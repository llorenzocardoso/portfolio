import { FaExternalLinkAlt } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/lorenzoLogo.jpeg";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-between mb-10 pt-10 mt-20 lg:flex-row lg:space-y-0 lg:px-20">
      {/* Logo */}
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:w-1/4 flex justify-center lg:justify-start">
        <img src={logo} alt="Logo" className="w-10 rounded-full scale-125 " />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:w-3/4 lg:justify-between lg:items-start lg:space-x-4">
        {/* Craft Section */}
        <div className="flex flex-col text-left lg:w-1/3 lg:justify-start mb-10 lg:mb-0">
          <h3 className="text-xs uppercase tracking-wider text-gray-600 font-semibold mb-2">Projects</h3>
          <div className="flex flex-col space-y-2">
            <a href="#1" className="text-sm text-gray-800 font-bold hover:text-blue-500">
              Project 1
            </a>
            <a href="#2" className="text-sm text-gray-800 font-bold hover:text-blue-500">
              Project 2
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col text-left lg:w-1/3 lg:justify-start mb-10 lg:mb-0">
          <h3 className="text-xs uppercase tracking-wider text-gray-600 font-semibold mb-2">Contact</h3>
          <div className="flex flex-col space-y-2">
            <a
              href="https://www.linkedin.com/in/llorenzocardoso/"
              target="_blank"
              className="flex items-center space-x-2 font-bold text-sm text-zinc-900 hover:text-blue-500"
            >
              <span>LinkedIn</span>
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://read.cv/lorenzocardoso"
              target="_blank"
              className="flex items-center space-x-2 font-bold text-sm text-zinc-900 hover:text-blue-500"
            >
              <span>Read.cv</span>
              <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/llorenzocardoso"
              target="_blank"
              className="flex items-center space-x-2 font-bold text-sm text-zinc-900 hover:text-blue-500"
            >
              <span>GitHub</span>
              <FaExternalLinkAlt />
            </a>
            <a
              href="mailto:llorenzocardoso1@gmail.com"
              target="_blank"
              className="flex items-center space-x-2 font-bold text-sm text-zinc-900 hover:text-blue-500"
            >
              <span>Mail</span>
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>

      {/* Dark Mode Toggle and Footer */}
      <div className="flex flex-col items-center lg:items-end lg:w-1/4 space-y-4 mt-10 lg:mt-0">
        <div
          className="relative flex items-center space-x-2 text-sm text-gray-800 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <RiSunFill />
          <span>Light Mode</span>

          {isHovered && (
            <motion.div
              className="absolute -top-6 px-3 py-1 rounded-md text-xs whitespace-nowrap bg-white text-black"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              Dark Mode coming soon!
            </motion.div>
          )}
        </div>
        <p className="text-xs text-gray-800 text-center  lg:text-right">
          © 2024 Lorenzo Cardoso. <br/> All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
