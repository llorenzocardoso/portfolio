import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ScrollToTop from "./components/layout/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./i18n/LanguageContext";
import About from "./pages/About";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

const App = () => (
    <ThemeProvider>
        <LanguageProvider>
            <Router>
                <ScrollToTop />
                <div className="min-h-svh overflow-x-hidden bg-bg text-fg">
                    <div className="relative mx-auto min-h-svh max-w-6xl border-x border-line">
                        <Navbar />
                        <main>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                {/* Projetos ficam na raiz (/picsofme), não em
                                    /projects/x. O react-router dá precedência
                                    à rota estática, então /about não colide. */}
                                <Route path="/:slug" element={<ProjectDetail />} />
                                <Route
                                    path="*"
                                    element={<Navigate to="/" replace />}
                                />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </div>
            </Router>
        </LanguageProvider>
    </ThemeProvider>
);

export default App;
