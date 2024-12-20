// import PropTypes from "prop-types";

// function PhotoCard({ path }) {
//   return (
//     <div className="overflow-hidden rounded-3xl shadow-lg w-full relative break-inside-avoid">
//       <img src={path} alt="Photo" className="object-cover w-full h-full" />
//     </div>
//   );
// }

// PhotoCard.propTypes = {
//   path: PropTypes.string.isRequired,
// };

// export default PhotoCard;

import PropTypes from "prop-types";

function PhotoCard({ path, onClick }) {
  return (
    <div onClick={onClick} className="mb-4 break-inside-avoid cursor-pointer">
      <img
        src={path}
        alt="Photo"
        className="object-cover w-full h-full rounded-xl"
      />
    </div>
  );
}

PhotoCard.propTypes = {
  path: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PhotoCard;
