import PropTypes from "prop-types";
import "../styles/custom-slick.css";

function PhotoCard({ path, onClick }) {
  return (
    <div onClick={onClick} className="mb-4 break-inside-avoid cursor-pointer">
      <img
        src={path}
        alt="Photo"
        className="object-cover w-full h-full rounded-xl photo-card"
      />
    </div>
  );
}

PhotoCard.propTypes = {
  path: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PhotoCard;
