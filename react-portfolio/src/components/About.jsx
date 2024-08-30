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
              Sou estudante do curso superior de Análise e Desenvolvimento de Sistemas, atualmente no 6º semestre. Possuo conhecimentos em Kotlin, Flutter, Java, Python, PHP, C#, e Banco de Dados.
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
                    Adicionar detalhes sobre meu background.
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
                    Adicionar detalhes sobre as coisas que amo.
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
