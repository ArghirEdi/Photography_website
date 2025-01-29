import PropTypes from "prop-types";

export const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} custom-arrow`}
    style={{
      ...style,
      display: "block",
      right: "-35px",
      zIndex: 1,
      backgroundColor: "#181C14",
      borderRadius: "100%",
      padding: 1,
      paddingLeft: 0,
      paddingDown: 0,
    }}
    onClick={onClick}
  />
);

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} custom-arrow`}
    style={{
      ...style,
      display: "block",
      left: "-35px",
      zIndex: 1,
      backgroundColor: "#181C14",
      borderRadius: "100%",
      padding: 1,
      paddingLeft: 0,
      paddingDown: 0,
    }}
    onClick={onClick}
  />
);

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
