// import PropTypes from "prop-types";
// import { FaSun, FaMoon } from "react-icons/fa";

// function ToggleButton({ isDarkMode, toggleTheme }) {
//   return (
//     <div
//       className="relative w-8 h-40 flex flex-col items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer ml-4"
//       onClick={toggleTheme}
//     >
//       <div
//         className={`absolute w-6 h-20 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
//           isDarkMode ? "translate-y-full" : "translate-y-0"
//         }`}
//       ></div>
//       <div className="flex flex-col justify-between h-full py-2 z-10">
//         <div className="flex flex-col items-center space-y-2">
//           <FaSun className="text-yellow-500 text-sm" />
//           <span className="text-gray-700 dark:text-gray-300 transform -rotate-90 text-s">
//             LIGHT
//           </span>
//         </div>
//         <div className="flex flex-col items-center space-y-2">
//           <span className="text-gray-700 dark:text-gray-300 transform -rotate-90 text-s">
//             DARK
//           </span>
//           <FaMoon className="text-blue-500 text-sm" />
//         </div>
//       </div>
//     </div>
//   );
// }

// ToggleButton.propTypes = {
//   isDarkMode: PropTypes.bool.isRequired,
//   toggleTheme: PropTypes.func.isRequired,
// };

// export default ToggleButton;

import PropTypes from "prop-types";
import { FaSun, FaMoon } from "react-icons/fa";

function ToggleButton({ isDarkMode, toggleTheme }) {
  return (
    <div
      className="relative w-8 h-20 flex flex-col items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer ml-4"
      onClick={toggleTheme}
    >
      <div
        className={`absolute w-6 h-9 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isDarkMode ? "translate-y-full" : "translate-y-0"
        }`}
      ></div>
      <div className="flex flex-col justify-between h-full py-2 z-10">
        <div className="flex flex-col items-center space-y-2">
          <FaSun className="text-yellow-500 text-sm" />
        </div>
        <div className="flex flex-col items-center space-y-2">
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
