import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 bg-black text-white opacity-60 hover:opacity-100 dark:bg-white dark:text-black dark:opacity-60 dark:hover:opacity-100 rounded-full shadow-md transition duration-300"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
