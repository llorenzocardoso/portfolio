import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Importe o AnimatePresence
import Contact from "./Contact";

const About = () => {
    const [isOpen, setIsOpen] = useState({
        background: false,
        love: false,
    });

    const toggleSection = (section) => {
        setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div>
            <div className="bg-white dark:bg-black min-h-screen flex flex-col justify-center items-center px-4 md:px-20 lg:px-32 transition-colors duration-300">
                <div className="flex-grow flex flex-col justify-center w-full max-w-2xl mx-auto">
                    <div>
                        <h1 className="mb-6 text-left text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                            Lorenzo
                        </h1>
                        <p className="text-left text-gray-500 dark:text-gray-300 font-extralight text-md md:text-lg mb-10 transition-colors duration-300">
                            I'm a Systems Analysis and Development graduate,
                            currently working at Leftbank. In my daily work, I
                            primarily develop mobile applications using Flutter,
                            along with Python, React with TypeScript, Firebase,
                            and MongoDB for various projects. I also have
                            knowledge in JavaScript, Java, Kotlin, PostgreSQL,
                            and other technologies from my academic projects.
                        </p>

                        <div className="py-4">
                            <button
                                className="flex items-center justify-between w-full text-left text-md md:text-lg font-semibold text-gray-900 dark:text-white focus:outline-none transition-colors duration-300"
                                onClick={() => toggleSection("background")}
                            >
                                Background
                                <motion.span
                                    className="text-xl text-gray-500 dark:text-gray-300 transition-colors duration-300"
                                    animate={{
                                        rotate: isOpen.background ? 45 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    +
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {isOpen.background && (
                                    <motion.div
                                        initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -10, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="mt-3 text-gray-700 dark:text-gray-200 transition-colors duration-300"
                                    >
                                        My name is Lorenzo, I'm 21 years old,
                                        and I'm from Arroio do Sal, RS, where I
                                        still live today. Since childhood, I've
                                        always had a passion for technology, and
                                        after finishing high school, I decided
                                        to pursue a degree in Systems Analysis
                                        and Development, which I have now
                                        completed.
                                        <br />
                                        <br />
                                        Currently, I work at Leftbank where I
                                        primarily develop mobile applications
                                        using Flutter, and also work with
                                        Python, React with TypeScript, Firebase,
                                        and MongoDB for various projects.
                                        Throughout my academic journey, I also
                                        gained experience with JavaScript, Java,
                                        Kotlin, PostgreSQL, and other
                                        technologies through university
                                        projects.
                                        <br />
                                        <br />
                                        Throughout my journey, I developed a
                                        deeper interest in Mobile development
                                        and Front-end development, especially in
                                        creating apps and web applications with
                                        clean and minimalist designs!
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="py-4">
                            <button
                                className="flex items-center justify-between w-full text-left text-md md:text-lg font-semibold text-gray-900 dark:text-white focus:outline-none transition-colors duration-300"
                                onClick={() => toggleSection("love")}
                            >
                                Things I Love
                                <motion.span
                                    className="text-xl text-gray-500 dark:text-gray-300 transition-colors duration-300"
                                    animate={{ rotate: isOpen.love ? 45 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    +
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {isOpen.love && (
                                    <motion.div
                                        initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -10, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="mt-3 text-gray-700 dark:text-gray-200 transition-colors duration-300"
                                    >
                                        I am passionate about many things that
                                        make my day-to-day life more joyful. I
                                        enjoy playing online with my friends and
                                        love the company of my pets — I have 13
                                        cats, 7 dogs, and a tortoise named Lola.
                                        My family and my girlfriend are
                                        essential to me, and traveling is
                                        something I really enjoy.
                                        <br />
                                        <br />I also love a good ice cream,
                                        watching movies, series, and live
                                        streams. I am into photography,
                                        skateboarding, playing sports, and many
                                        other activities!
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default About;
