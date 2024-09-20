import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
});

const Hero = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="flex flex-col items-center">
                <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-10 text-6xl tracking-tight text-center lg:text-8xl text-zinc-900"
                >
                    Lorenzo Cardoso
                </motion.h1>
                <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="text-2xl tracking-tight text-gray-400 text-center"
                >
                    Developer
                </motion.span>
            </div>
        </div>
    );
};

export default Hero;
