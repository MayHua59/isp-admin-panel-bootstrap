import React from "react";

const NetworkStatusChart = () => (
  <div className="card network-card h-100">
    <div className="card-header bg-black d-flex align-items-center">
      <h5 className="mb-0">
        <i className="fas fa-chart-area me-2" /> Network status
      </h5>
    </div>
    <div className="card-body">
      <h6 className="card-subtitle mb-3 text-muted">Daily network status</h6>
      <div className="graph-container mb-3">
        <span className="y-axis-label">ONUs</span>
        <span className="y-axis-value val-20">2.0</span>
        <span className="y-axis-value val-15">1.5</span>
        <span className="y-axis-value val-10">1.0</span>
        <span className="y-axis-value val-05">0.5</span>
        <span className="y-axis-value val-00">0.0</span>
        <div className="grid-line line-1" />
        <div className="grid-line line-2" />
        <div className="grid-line line-3" />
        <div className="vertical-grid-line fr-04" />
        <div className="vertical-grid-line fr-08" />
        <div className="vertical-grid-line fr-12" />
        <div className="vertical-grid-line fr-16" />
        <div className="graph-data">
          <div className="graph-green-area" />
          <div className="graph-brown-area" />
        </div>
        <span className="x-axis-label" style={{ left: '0%' }}>Fr 00:00</span>
        <span className="x-axis-label" style={{ left: '20%' }}>Fr 04:00</span>
        <span className="x-axis-label" style={{ left: '40%' }}>Fr 08:00</span>
        <span className="x-axis-label" style={{ left: '60%' }}>Fr 12:00</span>
        <span className="x-axis-label" style={{ left: '80%' }}>Fr 16:00</span>
        <span className="x-axis-label" style={{ left: '100%', transform: 'translateX(-100%)' }}>Fr 20:00</span>
      </div>
      <div className="graph-legend mb-3">
        <div className="legend-item online-onus me-4">
          <span className="legend-color-box" />
          <span>Online ONUs</span>
        </div>
        <div className="legend-item me-4">
          <span className="legend-color-box bg-white border" />
          <span>1 Maximum</span>
        </div>
        <div className="legend-item me-4">
          <span className="legend-color-box bg-white border" />
          <span>0 Signal loss</span>
        </div>
        <div className="legend-item me-4">
          <span className="legend-color-box bg-white border" />
          <span>1 N/A</span>
        </div>
      </div>
    </div>
  </div>
);

export default NetworkStatusChart;