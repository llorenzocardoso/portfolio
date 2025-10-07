import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Freelance from "./components/Freelance";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <div className="overflow-x-hidden text-gray-800 dark:text-white antialiased bg-white dark:bg-black transition-colors duration-300">
                    <div className="max-w-6xl mx-auto relative">
                        <div className="border-x border-gray-200 dark:border-gray-700">
                            <div className="px-8">
                                <Navbar />
                            </div>
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <>
                                            <div className="border-t border-gray-200 dark:border-gray-700">
                                                <div className="px-8">
                                                    <Hero />
                                                </div>
                                            </div>
                                            <div className="border-t border-gray-200 dark:border-gray-700">
                                                <div className="px-8 py-12">
                                                    <h2 className="text-lg text-gray-700 dark:text-gray-400 font-bold tracking-wider uppercase text-center">
                                                        PROJECTS
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="border-t border-gray-200 dark:border-gray-700">
                                                <div className="px-8">
                                                    <Projects />
                                                </div>
                                            </div>
                                            <div className="border-t border-gray-200 dark:border-gray-700">
                                                <div className="px-8 py-12">
                                                    <h2 className="text-lg text-gray-700 dark:text-gray-400 font-bold tracking-wider uppercase text-center">
                                                        FREELANCE WORKS
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="border-t border-gray-200 dark:border-gray-700">
                                                <div className="px-8">
                                                    <Freelance />
                                                </div>
                                            </div>
                                            <div className="border-t border-gray-200 dark:border-gray-700">
                                                <div className="px-8">
                                                    <Contact />
                                                </div>
                                            </div>
                                        </>
                                    }
                                />
                                <Route
                                    path="/about"
                                    element={
                                        <div className="px-8">
                                            <About />
                                        </div>
                                    }
                                />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
