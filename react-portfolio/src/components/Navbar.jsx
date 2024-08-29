import logo from "../assets/lorenzoLogo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-15 flex items-center justify-between py-6 bg-white shadow-md"> 
      <div className="flex flex-shrink-0 items-center ml-8"> {/* Adiciona margem à esquerda */}
        <Link to="/">
          <img className="mx-2 w-10 rounded-full scale-150 cursor-pointer" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl mr-8"> {/* Adiciona margem à direita */}
        <Link to="/about" className="text-xl text-gray-800 hover:text-gray-600">About</Link>
        <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-800 hover:text-gray-600">
          CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
