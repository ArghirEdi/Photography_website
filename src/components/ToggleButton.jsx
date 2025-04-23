import PropTypes from "prop-types";
import { FaSun, FaMoon } from "react-icons/fa";

function ToggleButton({ isDarkMode, toggleTheme }) {
  return (
    <div
      className="relative w-20 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 md:mr-5 cursor-pointer"
      onClick={toggleTheme}
    >
      <div
        className={`absolute h-6 w-9 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isDarkMode ? "translate-x-full" : "translate-x-0"
        }`}
      ></div>
      <div className="flex justify-between w-full px-2 z-10">
        <div className="flex items-center space-x-1">
          <FaSun className="text-yellow-500 text-sm" />
        </div>
        <div className="flex items-center space-x-1">
          <FaMoon className="text-blue-500 text-sm" />
        </div>
      </div>
    </div>
  );
}

ToggleButton.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default ToggleButton;
