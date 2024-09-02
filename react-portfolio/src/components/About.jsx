import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Importe o AnimatePresence
import Contact from "./Contact";

const About = () => {
  const [isOpen, setIsOpen] = useState({ background: false, love: false });

  const toggleSection = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div>
      <div className="bg-white min-h-screen flex flex-col justify-center items-center px-4 md:px-20 lg:px-32">
        <div className="flex-grow flex flex-col justify-center w-full max-w-2xl mx-auto">
          <div>
            <h1 className="mb-6 text-left text-3xl md:text-4xl font-semibold text-gray-900">Lorenzo</h1>
            <p
              className="text-left text-gray-500 font-extralight text-md md:text-lg mb-10">
              I’m currently pursuing a degree in Systems Analysis and Development, and I’m in the 6th semester. I have knowledge in Kotlin, Flutter, Java, Python, React and databases such as MySQL and MongoDB.
            </p>

            <div className="py-4">
              <button
                className="flex items-center justify-between w-full text-left text-md md:text-lg font-semibold text-gray-900 focus:outline-none"
                onClick={() => toggleSection("background")}
              >
                Background
                <motion.span
                  className="text-xl text-gray-500"
                  animate={{ rotate: isOpen.background ? 45 : 0 }}
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
                    className="mt-3 text-gray-700"
                  >
                    My name is Lorenzo, I’m 20 years old, and I’m from Arroio do Sal, RS, where I still live today. Since childhood, I’ve always had a passion for technology, and after finishing high school, I decided to pursue a degree in Systems Analysis and Development.
                    <br />
                    <br />
                    Throughout my academic journey, I developed a deeper interest in Mobile development, especially in creating apps with clean and minimalist designs!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="py-4">
              <button
                className="flex items-center justify-between w-full text-left text-md md:text-lg font-semibold text-gray-900 focus:outline-none"
                onClick={() => toggleSection("love")}
              >
                Things I Love
                <motion.span
                  className="text-xl text-gray-500"
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
                    className="mt-3 text-gray-700"
                  >
                    I am passionate about many things that make my day-to-day life more joyful. I enjoy playing online with my friends and love the company of my pets — I have 8 cats, 5 dogs, and a tortoise named Lola. My family and my girlfriend are essential to me, and traveling is something I really enjoy.
                    <br />
                    <br />
                    I also love a good ice cream, watching movies, series, and live streams. I am into photography, skateboarding, playing sports, and many other activities!
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
