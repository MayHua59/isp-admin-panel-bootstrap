// import { useState } from 'react'
// import React from 'react';
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="container">
//         <h1>Hello, Bootstrap with Vite!</h1>
//         <button className="btn btn-primary">Click Me</button>
//       </div>
//   )
// }

// export default App

// import React from 'react'
// import { Routes, Route, Link } from 'react-router-dom'
// import Dashboard from './pages/dashboard'
// // import Navbar from './layouts/Navbar';
// import MainLayout from './layouts/MainLayout'

// function Home() {
//   return <h2>Home Page</h2>
// }

// function About() {
//   return <h2>About Page</h2>
// }

// function NotFound() {
//   return <h2>Page Not Found</h2>
// }

// function App() {
//   return (
//     <div>
//       <MainLayout>
        
//       </MainLayout>
      

//       <hr />

//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/about" element={<About />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   )
// }

// export default App


import React, { useState, useEffect , useRef} from 'react';

// Main App component
function App() {
  // State for dynamic content, if needed later
  const [newCustomers, setNewCustomers] = useState(1);
  const [newOpenTickets, setNewOpenTickets] = useState(10);
  const [devicesDown, setDevicesDown] = useState(2);
  const [waitingAuthorization, setWaitingAuthorization] = useState(1);
  const [eapTlsUsers, setEapTlsUsers] = useState(10000);
  const [totalOffline, setTotalOffline] = useState(2);
  const [lowSignals, setLowSignals] = useState(0);

  useEffect(() => {
    // Dynamically load Font Awesome for icons
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    fontAwesomeLink.rel = 'stylesheet';
    document.head.appendChild(fontAwesomeLink);

    // Dynamically load Bootstrap CSS
    const bootstrapCssLink = document.createElement('link');
    bootstrapCssLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    bootstrapCssLink.rel = 'stylesheet';
    bootstrapCssLink.integrity = 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH';
    bootstrapCssLink.crossOrigin = 'anonymous';
    document.head.appendChild(bootstrapCssLink);

    // Dynamically load Bootstrap JS bundle (Popper.js included)
    const bootstrapJsScript = document.createElement('script');
    bootstrapJsScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    bootstrapJsScript.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
    bootstrapJsScript.crossOrigin = 'anonymous';
    document.body.appendChild(bootstrapJsScript);

    // Clean up on component unmount
    return () => {
      document.head.removeChild(fontAwesomeLink);
      document.head.removeChild(bootstrapCssLink);
      document.body.removeChild(bootstrapJsScript);
    };
  }, []); // Empty dependency array means this runs once on mount

  // Card component for statistics
  // const StatCard = ({ title, value, iconClass, bgColor, textColor, details, size = 'col-md-3' }) => (
  //   <div className={`${size} mb-3`}>
  //     <div className={`card shadow-sm h-100 ${bgColor} ${textColor}`}>
  //       <div className="card-body d-flex flex-column justify-content-between">
  //         <div className="d-flex align-items-center mb-2">
  //           {iconClass && <i className={`${iconClass} fa-2x me-3`}></i>}
  //           <h5 className="card-title mb-0 flex-grow-1">{title}</h5>
  //           {details && <small className="text-opacity-75">{details}</small>}
  //         </div>
  //         <p className="card-text display-4 fw-bold text-center">{value}</p>
  //       </div>
  //     </div>
  //   </div>
  // );
  const FirstRowStatCard = ({
  iconClass,
  mainText,
  leftText,
  rightText,
  bgColor = "bg-white",
  textColor = "text-dark",
  cardStyle = {},
  iconColor = "#007bff"
}) => (
  <div className="col-md-3 mb-3">
    <div className={`card shadow-sm rounded-0 ${bgColor} ${textColor}`} style={cardStyle}>
      <div className="card-body p-3">
        {/* First row: icon + main text */}
        <div className="d-flex align-items-center mb-2">
          {iconClass && (
            <i className={`${iconClass} me-2`} style={{ fontSize: "1rem", color: iconColor }}></i>
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
// const SecondRowStatCard = ({
//   iconClass,
//   row1col2,
//   row2col1,
//   row2col2,
//   row3col1,
//   row3col2,
//   bgColor ,
//   textColor = "text-dark",
//   cardStyle = {},
//   iconColor = "#007bff",
//   rowBg = "#e9ecef"
// }) => (
//   <div className="col-md-3 mb-3">
//     <div className={`card shadow-sm rounded-0 ${bgColor} ${textColor}`} style={cardStyle}>
//       <div className="card-body p-3">
//         <div className="container-fluid">
//           <div className="row align-items-center mb-2" >
//             <div className="col-6 d-flex justify-content-between">
//               {iconClass && (
//                 <i className={`${iconClass}`} style={{ fontSize: "2.5rem", color: iconColor }}></i>
//               )}
//             </div>
//             <div className="col-6 d-flex justify-content-end align-items-center">
//   <span className="fw-bold" style={{ fontSize: "3rem" }}>{row1col2}</span>
// </div>
//           </div>
//           <div className="row mb-2">
//             {row2col1 ? (
//               <>
//                 <div className="col-6" style={{ fontSize: "1rem" }}>{row2col1}</div>
//                 <div className="col-6 text-end" style={{ fontSize: "0.5rem" }}>{row2col2}</div>
//               </>
//             ) : (
//               <div className="col-12 text-end" style={{ fontSize: "0.7rem" }}>{row2col2}</div>
//             )}
//           </div>
//           <div className="row" style={{ background: "#e3f2fd", borderRadius: "0.25rem" }}>
//             <div className="col-6" style={{ fontSize: "0.7rem" }}>{row3col1}</div>
//             <div className="col-6 text-end" style={{ fontSize: "0.7rem" }}>{row3col2}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
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
    <div className={`card shadow-sm rounded-0 ${bgColor} ${textColor}`} style={cardStyle}>
      <div className="card-body p-0"> {/* Remove padding */}
        {/* Blue background for first and second row, full width */}
        <div style={{ background: "#0d6efd", borderTopLeftRadius: "0.375rem", borderTopRightRadius: "0.375rem" }}>
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
  <div className="row align-items-center" style={{ borderRadius: "0 0 0.375rem 0.375rem" }}>
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
  const StatCard = ({ title, value, iconClass, bgColor, textColor, details, size = 'col-md-3', cardStyle }) => (
  <div className={`${size} mb-3`}>
    <div className={`card shadow-sm rounded-1 ${bgColor} ${textColor}`} style={cardStyle}>
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="d-flex align-items-center mb-2">
          {iconClass && <i className={`${iconClass} fa-2x me-3`}></i>}
          <h5 className="card-title mb-0 flex-grow-1">{title}</h5>
          {details && <small className="text-opacity-75">{details}</small>}
        </div>
        <p className="card-text display-4 fw-bold text-center">{value}</p>
      </div>
    </div>
  </div>
);

  //Logic
  const [customersOpen, setCustomersOpen] = useState(false);
  const [ticketsOpen, setTicketsOpen] = useState(false);
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [networkingOpen, setNetworkingOpen] = useState(false);
  const [oltOpen, setOltOpen] = useState(false);
  const [splitterOpen, setSplitterOpen] = useState(false);
  const [onuOpen, setOnuOpen] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);
const [homePlanOpen, setHomePlanOpen] = useState(false);
const [cardPlanOpen, setCardPlanOpen] = useState(false);
const [billingOpen, setBillingOpen] = useState(false);
const [pppoeOpen, setPppoeOpen] = useState(false);
const [pppoeServerOpen, setPppoeServerOpen] = useState(false);
const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
const adminDropdownRef = useRef(null);

useEffect(() => {
  function handleClickOutside(event) {
    if (adminDropdownRef.current && !adminDropdownRef.current.contains(event.target)) {
      setAdminDropdownOpen(false);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);


  return (
    <div className="d-flex" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Sidebar */}
      <nav className="d-none d-md-block bg-white shadow-sm sidebar" style={{ width: '250px', flexShrink: 0, marginTop: '30px' }}>
        <div className="position-sticky pt-3">
          {/* <div className="d-flex align-items-center px-3 mb-4">
            <span className="fs-5 fw-bold text-primary">Dashboard</span>
          </div> */}
          <ul className="nav flex-column">
            <li className="nav-item" style={{ backgroundColor: "#2A4759" }}>
              <a className="nav-link active text-white" aria-current="page" href="#">
                <i className="fa-solid fa-table-columns me-2" style={{ color: "#ffffff" }}></i>
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <span className="nav-link text-muted text-uppercase fw-bold small mt-3">CRM</span>
            </li>
            {/* <li className="nav-item ">
              <a className="nav-link text-dark d-flex justify-content-between align-items-center" href="#">
                <span>
                  <i className="fas fa-users me-2"></i>
                Customers
                </span>
                <i className="fa-solid fa-less-than fa-rotate-270 me-2 text-secondary fa-sm" ></i>
              </a>
              
            </li> */}
            <li className="nav-item">
              <a
                className="nav-link text-dark d-flex justify-content-between align-items-center"
                href="#"
                onClick={e => {
                  e.preventDefault();
                  setCustomersOpen(open => !open);
                }}
                aria-expanded={customersOpen}
              >
                <span>
                  <i className="fas fa-users me-2"></i>
                  Customers
                </span>
                <i
                  className={`fa-solid fa-less-than me-2 text-secondary fa-sm transition-arrow`}
                  style={{
                    transform: customersOpen ? 'rotate(90deg)' : 'rotate(270deg)',
                    transition: 'transform 0.2s'
                  }}
                ></i>
              </a>
              {customersOpen && (
                <ul className="nav flex-column ms-4">
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="#">All Customers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Add Customer</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Customer Groups</a>
                  </li>
                </ul>
              )}
            </li>
            {/* <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-chart-line me-2"></i>
                Leads
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link text-dark d-flex justify-content-between align-items-center" href="#">
                <span>
                  <i className="fas fa-ticket-alt me-2"></i>
                Tickets
                </span>
                <i className="fa-solid fa-less-than fa-rotate-270 me-2 text-secondary fa-sm" ></i>
              </a>
            </li> */}
            <li className="nav-item">
  <a
    className="nav-link text-dark d-flex justify-content-between align-items-center"
    href="#"
    onClick={e => {
      e.preventDefault();
      setTicketsOpen(open => !open);
    }}
    aria-expanded={ticketsOpen}
  >
    <span>
      <i className="fas fa-ticket-alt me-2"></i>
      Tickets
    </span>
    <i
      className={`fa-solid fa-less-than me-2 text-secondary fa-sm transition-arrow`}
      style={{
        transform: ticketsOpen ? 'rotate(90deg)' : 'rotate(270deg)',
        transition: 'transform 0.2s'
      }}
    ></i>
  </a>
  {ticketsOpen && (
    <ul className="nav flex-column ms-4">
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">All Tickets</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Open Tickets</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Closed Tickets</a>
      </li>
    </ul>
  )}
</li>
           {/* <li className="nav-item">
  <a className="nav-link text-dark d-flex justify-content-between align-items-center" href="#">
    <span>
      <i className="fas fa-envelope me-2"></i>
      Messages
    </span>
    <i className="fa-solid fa-less-than fa-rotate-270 me-2 text-secondary fa-sm"></i>
  </a>
</li> */}
<li className="nav-item">
  <a
    className="nav-link text-dark d-flex justify-content-between align-items-center"
    href="#"
    onClick={e => {
      e.preventDefault();
      setMessagesOpen(open => !open);
    }}
    aria-expanded={messagesOpen}
  >
    <span>
      <i className="fas fa-envelope me-2"></i>
      Messages
    </span>
    <i
      className={`fa-solid fa-less-than me-2 text-secondary fa-sm transition-arrow`}
      style={{
        transform: messagesOpen ? 'rotate(90deg)' : 'rotate(270deg)',
        transition: 'transform 0.2s'
      }}
    ></i>
  </a>
  {messagesOpen && (
    <ul className="nav flex-column ms-4">
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">All Messages</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Unread</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Sent</a>
      </li>
    </ul>
  )}
</li>
            <li className="nav-item">
              <span className="nav-link text-muted text-uppercase fw-bold small mt-3">Company</span>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-globe me-2"></i>
                Networking
              </a>
            </li> */}
            
            <li className="nav-item">
  <a
    className="nav-link text-dark d-flex justify-content-between align-items-center"
    href="#"
    onClick={e => {
      e.preventDefault();
      setNetworkingOpen(open => !open);
    }}
    aria-expanded={networkingOpen}
  >
    <span>
      <i className="fas fa-globe me-2"></i>
      Networking
    </span>
    <i
      className={`fa-solid fa-less-than me-2 text-secondary fa-sm transition-arrow`}
      style={{
        transform: networkingOpen ? 'rotate(90deg)' : 'rotate(270deg)',
        transition: 'transform 0.2s'
      }}
    ></i>
  </a>
  {networkingOpen && (
    <ul className="nav flex-column ms-4">
      <li className="nav-item">
  <a
    className="nav-link text-dark d-flex justify-content-between align-items-center"
    href="#"
    onClick={e => {
      e.preventDefault();
      setOltOpen(open => !open);
    }}
    aria-expanded={oltOpen}
  >
    <span>
      <i className="fas fa-microchip me-2"></i>
      OLT
    </span>
    <i
      className={`fa-solid fa-less-than me-2 text-secondary fa-sm transition-arrow`}
      style={{
        transform: oltOpen ? 'rotate(90deg)' : 'rotate(270deg)',
        transition: 'transform 0.2s'
      }}
    ></i>
  </a>
  {oltOpen && (
    <ul className="nav flex-column ms-4">
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">OLT List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Add OLT</a>
      </li>
      
    </ul>
  )}
</li>
{/* Start Splitter */}
<li className="nav-item">
  <a
    className="nav-link text-dark d-flex justify-content-between align-items-center"
    href="#"
    onClick={e => {
      e.preventDefault();
      setSplitterOpen(open => !open);
    }}
    aria-expanded={splitterOpen}
  >
    <span>
      <i className="fas fa-code-branch me-2"></i>
      Splitter
    </span>
    <i
      className={`fa-solid fa-less-than me-2 text-secondary fa-sm transition-arrow`}
      style={{
        transform: splitterOpen ? 'rotate(90deg)' : 'rotate(270deg)',
        transition: 'transform 0.2s'
      }}
    ></i>
  </a>
  {splitterOpen && (
    <ul className="nav flex-column ms-4">
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Splitter List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Add Splitter</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link text-dark" href="#">Splitter Config</a>
      </li> */}
    </ul>
  )}
</li>
{/* End Splitter */}
      {/* <li className="nav-item">
        <a className="nav-link text-dark" href="#">Splitter</a>
      </li> */}
      {/* <li className="nav-item">
        <a className="nav-link text-dark" href="#">ONU</a>
      </li> */}
      {/* Start ONU */}
      <li className="nav-item">
  <a
    className="nav-link text-dark d-flex justify-content-between align-items-center"
    href="#"
    onClick={e => {
      e.preventDefault();
      setOnuOpen(open => !open);
    }}
    aria-expanded={onuOpen}
  >
    <span>
      <i className="fas fa-sitemap me-2"></i>
      ONU
    </span>
    <i
      className={`fa-solid fa-less-than me-2 text-secondary fa-sm transition-arrow`}
      style={{
        transform: onuOpen ? 'rotate(90deg)' : 'rotate(270deg)',
        transition: 'transform 0.2s'
      }}
    ></i>
  </a>
  {onuOpen && (
    <ul className="nav flex-column ms-4">
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">ONU List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Add ONU</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">ONU Config</a>
      </li>
    </ul>
  )}
</li>
      {/* End ONU */}
      {/* <li className="nav-item">
        <a className="nav-link text-dark" href="#">Plan</a>
      </li> */}
      {/* Start Plan */}
      
<li className="nav-item">
  <a
    className="nav-link text-dark d-flex justify-content-between align-items-center"
    href="#"
    onClick={e => {
      e.preventDefault();
      setPlanOpen(open => !open);
    }}
    aria-expanded={planOpen}
  >
    <span>
      <i className="fas fa-layer-group me-2"></i>
      Tariff Plan
    </span>
    <i
      className={`fa-solid fa-less-than me-2 text-secondary fa-sm transition-arrow`}
      style={{
        transform: planOpen ? 'rotate(90deg)' : 'rotate(270deg)',
        transition: 'transform 0.2s'
      }}
    ></i>
  </a>
  {planOpen && (
    <ul className="nav flex-column ms-4">
      {/* Home Plan */}
      <li className="nav-item">
        <a
          className="nav-link text-dark d-flex justify-content-between align-items-center"
          href="#"
          onClick={e => {
            e.preventDefault();
            setHomePlanOpen(open => !open);
          }}
          aria-expanded={homePlanOpen}
        >
          <span>
            <i className="fas fa-home me-2"></i>
            Home Plan
          </span>
          <i
            className={`fa-solid fa-less-than me-2 text-secondary fa-sm transition-arrow`}
            style={{
              transform: homePlanOpen ? 'rotate(90deg)' : 'rotate(270deg)',
              transition: 'transform 0.2s'
            }}
          ></i>
        </a>
        {homePlanOpen && (
          <ul className="nav flex-column ms-4">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Plan List</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Add Plan</a>
            </li>
          </ul>
        )}
      </li>
      {/* Card Plan */}
      <li className="nav-item">
        <a
          className="nav-link text-dark d-flex justify-content-between align-items-center"
          href="#"
          onClick={e => {
            e.preventDefault();
            setCardPlanOpen(open => !open);
          }}
          aria-expanded={cardPlanOpen}
        >
          <span>
            <i className="fas fa-id-card me-2"></i>
            Card Plan
          </span>
          <i
            className={`fa-solid fa-less-than me-2 text-secondary fa-sm transition-arrow`}
            style={{
              transform: cardPlanOpen ? 'rotate(90deg)' : 'rotate(270deg)',
              transition: 'transform 0.2s'
            }}
          ></i>
        </a>
        {cardPlanOpen && (
          <ul className="nav flex-column ms-4">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Plan List</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">New Plan</a>
            </li>
          </ul>
        )}
      </li>
    </ul>
  )}
</li>

      {/* End Plan */}
      {/* <li className="nav-item">
        <a className="nav-link text-dark" href="#">Billing</a>
      </li> */}
      {/* Start Billing */}
      <li className="nav-item">
  <a
    className="nav-link text-dark d-flex justify-content-between align-items-center"
    href="#"
    onClick={e => {
      e.preventDefault();
      setBillingOpen(open => !open);
    }}
    aria-expanded={billingOpen}
  >
    <span>
      <i className="fas fa-file-invoice-dollar me-2"></i>
      Billing
    </span>
    <i
      className={`fa-solid fa-less-than me-2 text-secondary fa-sm transition-arrow`}
      style={{
        transform: billingOpen ? 'rotate(90deg)' : 'rotate(270deg)',
        transition: 'transform 0.2s'
      }}
    ></i>
  </a>
  {billingOpen && (
    <ul className="nav flex-column ms-4">
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Billing List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Add Billing</a>
      </li>
    </ul>
  )}
</li>
      {/* End Billing */}
      {/* <li className="nav-item">
        <a className="nav-link text-dark" href="#">PPPoE Account</a>
      </li> */}
      {/* Start PPPoE Account */}
      <li className="nav-item">
  <a
    className="nav-link text-dark d-flex justify-content-between align-items-center"
    href="#"
    onClick={e => {
      e.preventDefault();
      setPppoeOpen(open => !open);
    }}
    aria-expanded={pppoeOpen}
  >
    <span>
      <i className="fas fa-user-lock me-2"></i>
      PPPoE Account
    </span>
    <i
      className={`fa-solid fa-less-than me-2 text-secondary fa-sm transition-arrow`}
      style={{
        transform: pppoeOpen ? 'rotate(90deg)' : 'rotate(270deg)',
        transition: 'transform 0.2s'
      }}
    ></i>
  </a>
  {pppoeOpen && (
    <ul className="nav flex-column ms-4">
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Account List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Add Account</a>
      </li>
    </ul>
  )}
</li>
      {/* End PPPoE Account */}
      {/* <li className="nav-item">
        <a className="nav-link text-dark" href="#">PPPoE Server</a>
      </li> */}
      {/* Start PPPoE Server */}
      <li className="nav-item">
  <a
    className="nav-link text-dark d-flex justify-content-between align-items-center"
    href="#"
    onClick={e => {
      e.preventDefault();
      setPppoeServerOpen(open => !open);
    }}
    aria-expanded={pppoeServerOpen}
  >
    <span>
      <i className="fas fa-server me-2"></i>
      PPPoE Server
    </span>
    <i
      className={`fa-solid fa-less-than me-2 text-secondary fa-sm transition-arrow`}
      style={{
        transform: pppoeServerOpen ? 'rotate(90deg)' : 'rotate(270deg)',
        transition: 'transform 0.2s'
      }}
    ></i>
  </a>
  {pppoeServerOpen && (
    <ul className="nav flex-column ms-4">
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Server List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Add Server</a>
      </li>
    </ul>
  )}
</li>
      {/* End PPPoE Server */}
      
    </ul>
  )}
</li>
            {/* <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-network-wired me-2"></i>
                Network sites
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-server me-2"></i>
                Routers
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-cogs me-2"></i>
                TR-GEM (ACS)
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-hdd me-2"></i>
                Hardware
              </a> */}
            {/* </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-globe me-2"></i>
                IPv4 networks
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-globe-americas me-2"></i>
                IPv6 networks
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-map me-2"></i>
                Maps
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-calendar-alt me-2"></i>
                Scheduling
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-boxes me-2"></i>
                Inventory
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-phone-alt me-2"></i>
                Voice
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-file-invoice-dollar me-2"></i>
                Tariff plans
              </a>
            </li> */}
            <li className="nav-item">
              <span className="nav-link text-muted text-uppercase fw-bold small mt-3">System</span>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-user-shield me-2"></i>
                Administration
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                <i className="fas fa-cog me-2"></i>
                Config
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow-1 p-4" style={{ marginTop: "70px" }}>
        {/* Top Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white  shadow-sm mb-4" style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    padding: "0.5rem 1rem",
    zIndex: 1050,
    borderRadius: 0,
    boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,.075)"
  }}>
          <div className="container-fluid">
            <a className="navbar-brand d-md-none" href="#">Dashboard</a> {/* Show brand on small screens */}
            <div className="d-flex align-items-center ms-auto">
              <button className="btn btn-primary btn-sm me-3">Deployment guide</button>
              <a href="#" className="nav-link text-dark me-3"><i className="fas fa-plus"></i></a>
              <a href="#" className="nav-link text-dark me-3"><i className="fas fa-search"></i></a>
              <a href="#" className="nav-link text-dark me-3"><i className="fas fa-bell"></i></a>
              <a href="#" className="nav-link text-dark me-3"><i className="fas fa-question-circle"></i></a>
              {/* <div className="dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-user-circle me-1"></i> Main Admin
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </div> */}
              {/* Admin Dropdown start */}
              <div className="dropdown" ref={adminDropdownRef}>
  <a
    className="nav-link dropdown-toggle text-dark"
    href="#"
    id="navbarDropdown"
    role="button"
    onClick={e => {
      e.preventDefault();
      setAdminDropdownOpen(open => !open);
    }}
    aria-expanded={adminDropdownOpen}
  >
    <i className="fas fa-user-circle me-1"></i> Main Admin
  </a>
  <ul
    className={`dropdown-menu dropdown-menu-end${adminDropdownOpen ? " show" : ""}`}
    aria-labelledby="navbarDropdown"
  >
    <li><a className="dropdown-item" href="#">Profile</a></li>
    <li><a className="dropdown-item" href="#">Settings</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="#">Logout</a></li>
  </ul>
</div>
              {/* Admin Dropdown end */}
            </div>
          </div>
        </nav>

        {/* Dashboard Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0"> <i className="fa-solid fa-table-columns me-2" style={{ color: "#000" }}></i>Dashboard</h2>
          
          
        </div>

        {/* Statistics Cards Row 1 */}
        
       
<div className="row">
  <StatCard
    title="New customers"
    value={newCustomers}
    iconClass="fas fa-user-plus"
    bgColor="bg-success"
    textColor="text-white"
    size="col-md-3"
    cardStyle={{ height: "80px" }} // Half height
  />
  {/* <StatCard
    title="New Customer"
    value={newOpenTickets}
    iconClass="fas fa-ticket-alt"
    bgColor="bg-primary"
    textColor="text-white"
    size="col-md-3"
    cardStyle={{ height: "80px" }}
  /> */}
    <FirstRowStatCard
    iconClass="fas fa-user"
    mainText="New Customers"
    leftText="View"
    rightText="10"
    bgColor="bg-light"
    textColor="text-dark"
    cardStyle={{ height: "80px" }}
    iconColor="#198754"
  />
   <FirstRowStatCard
    iconClass="fa-solid fa-ticket"
    mainText="New & open tickets"
    leftText="View"
    rightText="1"
    bgColor="bg-light"
    textColor="text-dark"
    cardStyle={{ height: "80px" }}
    iconColor="#198754"
  />
  <FirstRowStatCard
    iconClass="fa-solid fa-desktop"
    mainText="Devices down"
    leftText="View"
    rightText="2"
    bgColor="bg-light"
    textColor="text-dark"
    cardStyle={{ height: "80px" }}
    iconColor="#198754"
  />
</div>

        
        {/* Statistics Cards Row 2 */}  
<div className="row mt-3">
  <SecondRowStatCard
  iconClass="fa-solid fa-wand-magic-sparkles"
  row1col2="1"
  row2col1=""
  row2col2="Waiting Authorization"
  // row3col1="D: 0 Resyn:0"
  row3col1={
    <>
      <span>D: 0</span>
      <span className="ms-2">Resyn: 0</span>
    </>
  }
  row3col2="New: 1"
  bgColor="blue"
  textColor="text-dark"
  cardStyle={{ height: "160px" }}
  iconColor="#198754"
/>
   <SecondRowStatCard
  iconClass="fa-solid fa-wifi"
  row1col2="10000"
  row2col1="EAP TLS User"
  row2col2={
    <span className=''>USER</span>
  }
  // row3col1="D: 0 Resyn:0"
  row3col1="Total Authorzed: 3 "
  row3col2=""
  bgColor="blue"
  textColor="text-dark"
  cardStyle={{ height: "160px" }}
  iconColor="#198754"
/>
    <SecondRowStatCard
  iconClass="fa-solid fa-wifi"
  row1col2="10000"
  row2col1="EAP TLS User"
  row2col2={
    <span className=''>USER</span>
  }
  // row3col1="D: 0 Resyn:0"
  row3col1="Total Authorzed: 3 "
  row3col2=""
  bgColor="blue"
  textColor="text-dark"
  cardStyle={{ height: "160px" }}
  iconColor="#198754"
/>
  {/* <StatCard
    title=""
    value=""
    size="col-md-3"
    cardStyle={{ height: "160px", background: "primary", boxShadow: "none", border: "none" }}
    details={
      <div className="d-flex flex-column justify-content-end align-items-end h-100">
        <p className="text-muted mb-0">TR-GEM LACEI</p>
        <p className="text-muted mb-0">Information valid at 20:18</p>
      </div>
    }
  /> */}
  <SecondRowStatCard
  iconClass="fa-solid fa-wifi"
  row1col2="10000"
  row2col1="EAP TLS User"
  row2col2={
    <span className=''>USER</span>
  }
  // row3col1="D: 0 Resyn:0"
  row3col1="Total Authorzed: 3 "
  row3col2=""
  bgColor="blue"
  textColor="text-dark"
  cardStyle={{ height: "160px" }}
  iconColor="#198754"
/>
  
</div>

        {/* Network Status Section */}
        <div className="card shadow-sm mt-4">
          <div className="card-header bg-white d-flex justify-content-between align-items-center">
            <h5 className="mb-0"><i className="fas fa-chart-area me-2"></i> Network status</h5>
            <div>
              <button className="btn btn-outline-secondary btn-sm me-2">More graphs</button>
              <div className="btn-group">
                <button type="button" className="btn btn-outline-secondary btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  OLTS
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                </ul>
              </div>
              <div className="btn-group ms-2">
                <button type="button" className="btn btn-outline-secondary btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  All-
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h6 className="card-subtitle mb-3 text-muted">Daily network status</h6>
            {/* Graph Placeholder */}
            <div className="bg-light border rounded p-4 mb-3" style={{ height: '250px', position: 'relative' }}>
              {/* This is a simplified representation of the graph. A real implementation would use a charting library. */}
              <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '0.8em', color: '#666' }}>
                <p className="mb-0">ONUs</p>
                <p className="mb-0">2.0</p>
                <p className="mb-0">1.5</p>
                <p className="mb-0">1.0</p>
                <p className="mb-0">0.5</p>
                <p className="mb-0">0.0</p>
              </div>
              <div style={{ position: 'absolute', bottom: '10px', left: '50px', right: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '0.8em', color: '#666' }}>
                <span>Fr 00:00</span>
                <span>Fr 04:00</span>
                <span>Fr 08:00</span>
                <span>Fr 12:00</span>
                <span>Fr 16:00</span>
                <span>Fr 20:00</span>
              </div>
              {/* Simple bar to represent the graph data */}
              <div style={{
                position: 'absolute',
                bottom: '50px',
                left: '60px',
                width: 'calc(100% - 120px)',
                height: '150px',
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                borderLeft: '1px solid #ccc',
                borderBottom: '1px solid #ccc'
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '30%',
                  height: '80%',
                  backgroundColor: 'rgba(0, 123, 255, 0.6)'
                }}></div>
                 <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '30%',
                  width: '70%',
                  height: '40%',
                  backgroundColor: 'rgba(0, 123, 255, 0.4)'
                }}></div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <i className="fas fa-chart-pie me-2"></i> smartolt
                    <span className="badge bg-secondary">2 Days, 08:35 +PE</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <i className="fas fa-chart-pie me-2"></i> OLTONE
                    <span className="badge bg-secondary">N/A</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h6 className="mt-3 mt-md-0">Online ONUs</h6>
                <div className="row">
                  <div className="col-6">
                    <p className="mb-1"><i className="fas fa-bolt me-2 text-warning"></i> Power fail: 0</p>
                    <p className="mb-1"><i className="fas fa-exclamation-circle me-2 text-danger"></i> Maximum: 2</p>
                  </div>
                  <div className="col-6">
                    <p className="mb-1"><i className="fas fa-signal me-2 text-info"></i> Signal loss: 1</p>
                    <p className="mb-1"><i className="fas fa-times-circle me-2 text-muted"></i> N/A: 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

