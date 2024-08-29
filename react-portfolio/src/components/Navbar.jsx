import logo from "../assets/lorenzoLogo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-15 mt-4 flex items-center justify-between px-2"> 
      <div className="flex items-center">
        <Link to="/">
          <img className="w-10 rounded-full cursor-pointer" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center gap-8 text-2xl">
        <Link to="/about" className="text-xl text-gray-800 hover:text-gray-600">About</Link>
        <a href="https://drive.google.com/file/d/1ryFg6QFbbh6jNOn2Iop6CB1KGWZZd6zR/view" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-800 hover:text-gray-600">
          CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
