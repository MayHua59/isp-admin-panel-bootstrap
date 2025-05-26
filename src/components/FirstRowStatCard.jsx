import React from "react";
// import PropTypes from "prop-types";

const FirstRowStatCard = ({
  iconClass,
  mainText,
  leftText,
  rightText,
  bgColor = "bg-white",
  textColor = "text-dark",
  cardStyle = {},
  iconColor = "#007bff",
  iconSize = "1.5rem",
}) => (
  <div className="col-md-3 mb-3">
    <div
      className={`card shadow-sm rounded ${bgColor} ${textColor}`}
      style={{
        ...cardStyle,
        borderRadius: "0.375rem",
        overflow: "hidden",
      }}
    >
      <div className="card-body p-3 pb-2">
        {/* First row: icon + main text */}
        <div className="d-flex align-items-center mb-2">
          {iconClass && (
            <i
              className={`${iconClass} me-2`}
              style={{ fontSize: iconSize, color: iconColor }}
            ></i>
          )}
          <span className="fw-bold">{mainText}</span>
        </div>
        {/* Second row: left and right text */}
        <div className="d-flex justify-content-between">
          <span>{leftText}</span>
          <span>{rightText}</span>
        </div>
      </div>
    </div>
  </div>
);

// FirstRowStatCard.propTypes = {
//   iconClass: PropTypes.string,
//   mainText: PropTypes.node,
//   leftText: PropTypes.node,
//   rightText: PropTypes.node,
//   bgColor: PropTypes.string,
//   textColor: PropTypes.string,
//   cardStyle: PropTypes.object,
//   iconColor: PropTypes.string,
//   iconSize: PropTypes.string,
// };

export default FirstRowStatCard;