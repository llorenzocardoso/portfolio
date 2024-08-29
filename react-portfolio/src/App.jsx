import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden text-gray-800 antialiased bg-white">
        <div className="container mx-auto px-8">
          <Navbar />
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <Projects />
              <Contact />
            </>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;