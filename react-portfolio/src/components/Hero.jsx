import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white dark:bg-black transition-colors duration-300 relative">
            <div className="flex flex-col items-center text-center">
                <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-4 text-5xl md:text-7xl tracking-tight text-zinc-900 dark:text-white transition-colors duration-300 font-light"
                >
                    Lorenzo Cardoso
                </motion.h1>
                <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="text-lg tracking-tight text-gray-500 dark:text-gray-400 text-center transition-colors duration-300 font-light"
                >
                    Developer
                </motion.span>
            </div>
        </div>
    );
};

export default Hero;
