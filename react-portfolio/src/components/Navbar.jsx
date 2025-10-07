import logo from "../assets/lorenzoLogo.jpeg";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
    const { isDarkMode } = useTheme();

    return (
        <nav className="py-8 flex items-center justify-between">
            <div className="flex items-center">
                <Link to="/">
                    <img
                        className="w-8 h-8 rounded-full cursor-pointer"
                        src={logo}
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="flex items-center gap-8 text-base">
                <Link
                    to="/about"
                    className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 font-medium"
                >
                    About
                </Link>
                <a
                    href="https://drive.google.com/file/d/1ryFg6QFbbh6jNOn2Iop6CB1KGWZZd6zR/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 font-medium"
                >
                    CV
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
