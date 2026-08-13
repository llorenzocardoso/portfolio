import {
    motion,
    useMotionValue,
    useReducedMotion,
    useSpring,
    useTransform,
} from "framer-motion";
import { useRef } from "react";

// Molas frouxas: o mockup persegue o cursor com atraso, em vez de grudar
// nele — é o atraso que dá peso ao movimento.
const SPRING = { stiffness: 150, damping: 18, mass: 0.6 };

const MAX_TILT = 12; // graus

/**
 * Dá a um mockup 2D a leitura de objeto físico: ele flutua sozinho e
 * inclina em 3D acompanhando o cursor.
 *
 * Girar de fato (rotateY completo) não funciona aqui — a imagem é plana e
 * mostraria o verso espelhado.
 */
const Tilt = ({ className = "", float = true, children }) => {
    const ref = useRef(null);
    const prefersReducedMotion = useReducedMotion();

    // -0.5 … 0.5 relativo ao centro do elemento.
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);

    const rotateY = useSpring(
        useTransform(pointerX, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]),
        SPRING
    );
    const rotateX = useSpring(
        useTransform(pointerY, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]),
        SPRING
    );

    const handlePointerMove = (event) => {
        // Ponteiro grosseiro (toque) não tem hover: mexer aqui faria o
        // mockup saltar no primeiro toque.
        if (prefersReducedMotion || event.pointerType === "touch") return;

        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;

        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
    };

    const resetTilt = () => {
        pointerX.set(0);
        pointerY.set(0);
    };

    const shouldFloat = float && !prefersReducedMotion;

    return (
        <div
            ref={ref}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetTilt}
            className={className}
            style={{ perspective: 1100 }}
        >
            <motion.div
                className="flex h-full w-full items-center justify-center gap-3 sm:gap-5"
                animate={shouldFloat ? { y: [0, -10, 0] } : undefined}
                transition={
                    shouldFloat
                        ? {
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut",
                          }
                        : undefined
                }
                style={{
                    rotateX: prefersReducedMotion ? 0 : rotateX,
                    rotateY: prefersReducedMotion ? 0 : rotateY,
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Tilt;
