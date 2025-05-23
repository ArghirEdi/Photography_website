import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ToggleButton from "./ToggleButton";

function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav className="bg-slate-200 dark:bg-zinc-950 shadow-xl mb-5 border-b border-gray-300 dark:border-gray-700">
      <div className="md:ml-6 md:pr-6 flex items-center">
        <div className="flex items-center md:ml-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-24" />
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-6 text-black dark:text-white md:text-lg text-base">
            <li>
              <Link
                to="/"
                className="text-black hover:font-bold dark:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-black hover:font-bold dark:text-white"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-black hover:font-bold dark:text-white"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <ToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;
