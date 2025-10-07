// import { FaExternalLinkAlt } from "react-icons/fa";
// import { RiSunFill, RiMoonFill } from "react-icons/ri";
// import { useState } from "react";
// import { motion } from "framer-motion";
import logo from "../assets/lorenzoLogo.jpeg";
// import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
    // Dark mode desabilitado temporariamente
    // const [isHovered, setIsHovered] = useState(false);
    // const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className="py-24 bg-white dark:bg-black transition-colors duration-300 relative">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex justify-start lg:w-1/4">
                        <img
                            src={logo}
                            alt="Lorenzo Cardoso"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col lg:flex-row lg:flex-1 lg:justify-between gap-12">
                        {/* Projects Section */}
                        <div className="space-y-4">
                            <h3 className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase">
                                Craft
                            </h3>
                            <div className="space-y-2">
                                <a
                                    href="#1"
                                    className="block text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 text-base"
                                >
                                    Project 1
                                </a>
                                <a
                                    href="#2"
                                    className="block text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 text-base"
                                >
                                    Project 2
                                </a>
                                <a
                                    href="#3"
                                    className="block text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 text-base"
                                >
                                    Project 3
                                </a>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="space-y-4">
                            <h3 className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase">
                                Contact
                            </h3>
                            <div className="space-y-2">
                                <a
                                    href="https://www.linkedin.com/in/llorenzocardoso/"
                                    target="_blank"
                                    className="block text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 text-base"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/llorenzocardoso"
                                    target="_blank"
                                    className="block text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 text-base"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="mailto:llorenzocardoso1@gmail.com"
                                    target="_blank"
                                    className="block text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 text-base"
                                >
                                    Mail
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex flex-col items-start lg:items-end lg:w-1/4 space-y-4">
                        {/* Dark Mode Toggle - Desabilitado temporariamente */}
                        {/*
                            <div
                                className="relative flex items-center space-x-2 text-sm text-gray-800 dark:text-gray-300 cursor-pointer"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <RiSunFill />
                                <span>Light Mode</span>

                                {isHovered && (
                                    <motion.div
                                        className="absolute -top-8 right-0 px-3 py-1 rounded-md text-xs whitespace-nowrap dark:bg-gray-100 text-black dark:text-white"
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 10, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        Dark Mode coming soon!
                                    </motion.div>
                                )}
                            </div>
                            */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-left lg:text-right">
                            © 2025 Lorenzo Cardoso.
                            <br />
                            All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
