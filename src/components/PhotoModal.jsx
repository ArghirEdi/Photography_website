import { useEffect } from "react";
import PropTypes from "prop-types";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

function PhotoModal({ isOpen, photo, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowRight") {
        onNext();
      } else if (event.key === "ArrowLeft") {
        onPrev();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  const handleClickOutside = (event) => {
    if (event.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      <div className="relative bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-lg max-w-3xl w-full h-full">
        <button
          className="absolute top-2 right-2 text-black dark:text-white"
          onClick={onClose}
        >
          <FaTimes className="text-2xl" />
        </button>
        <div className="flex items-center justify-center h-full">
          <img src={photo.path} alt="Photo" className="max-h-full max-w-full" />
        </div>
        <button
          className="absolute left-2 md:left-[-4.5%] md:p-2 md:rounded-md top-1/2 transform -translate-y-1/2 text-black dark:text-white md:bg-white md:dark:bg-zinc-900"
          onClick={onPrev}
        >
          <FaArrowLeft className="text-2xl" />
        </button>
        <button
          className="absolute right-2 md:right-[-4.5%] md:p-2 md:rounded-md top-1/2 transform -translate-y-1/2 text-black dark:text-white md:bg-white md:dark:bg-zinc-900"
          onClick={onNext}
        >
          <FaArrowRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

PhotoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  photo: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default PhotoModal;
