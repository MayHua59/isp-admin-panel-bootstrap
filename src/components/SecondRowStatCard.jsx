import react from 'react';

const SecondRowStatCard = ({
  iconClass,
  row1col2,
  row2col1,
  row2col2,
  row3col1,
  row3col2,
  bgColor,
  textColor = "text-dark",
  cardStyle = {},
  iconColor = "#007bff",
}) => (
  <div className="col-md-3 mb-3">
    <div className={`card shadow-sm  ${bgColor} ${textColor}`} style={{ ...cardStyle, border: `1px solid ${bgColor}`,borderRadius: "0.375rem", overflow: "hidden" }}>
      {/* First row with icon and main text */}
      <div className="card-body p-0"> {/* Remove padding */}
        {/* Blue background for first and second row, full width */}
        <div style={{ background: bgColor }}>
          <div className="container-fluid px-3 py-2">
            <div className="row align-items-center mb-2">
              <div className="col-6 d-flex justify-content-between">
                {iconClass && (
                  <i className={`${iconClass}`} style={{ fontSize: "2.5rem", color: iconColor }}></i>
                )}
              </div>
              <div className="col-6 d-flex justify-content-end align-items-center">
                <span className="fw-bold text-white" style={{ fontSize: "2.5rem" }}>{row1col2}</span>
              </div>
            </div>
            <div className="row mb-2">
              {row2col1 ? (
                <>
                  <div className="col-6 text-white" style={{ fontSize: "0.7rem" }}>{row2col1}</div>
                  <div className="col-6 text-end text-white" style={{ fontSize: "0.7rem" }}>{row2col2}</div>
                </>
              ) : (
                <div className="col-12 text-end text-white" style={{ fontSize: "0.7rem" }}>{row2col2}</div>
              )}
            </div>
          </div>
        </div>
        {/* Third row with normal padding */}
        {/* <div className="container-fluid">
          <div className="row" style={{  borderRadius: "0 0 0.375rem 0.375rem" }}>
            <div className="col-6" style={{ fontSize: "0.7rem" }}>{row3col1}</div>
            <div className="col-6 text-end" style={{ fontSize: "0.7rem" }}>{row3col2}</div>
          </div>
        </div> */}
        {/* <div className="container-fluid mt-2">
  <div className="row align-items-center" style={{ borderRadius: "0 0 0.375rem 0.375rem" }}>
    <div className="col-6 d-flex align-items-center" style={{ fontSize: "0.7rem" }}>{row3col1}</div>
    <div className="col-6 d-flex align-items-center justify-content-end" style={{ fontSize: "0.7rem" }}>{row3col2}</div>
  </div>
</div> */}
<div className="container-fluid mt-2">
  <div className="row align-items-center" >
    {row3col2 ? (
      <>
        <div className="col-6 d-flex align-items-center text-nowrap mt-2" style={{ fontSize: "0.7rem" }}>{row3col1}</div>
        <div className="col-6 d-flex align-items-center justify-content-end mt-2" style={{ fontSize: "0.7rem" }}>{row3col2}</div>
      </>
    ) : (
      <div className="col-12 d-flex align-items-center text-nowrap mt-2" style={{ fontSize: "0.7rem" }}>{row3col1}</div>
    )}
  </div>
</div>
      </div>
    </div>
  </div>
);

export default SecondRowStatCard;