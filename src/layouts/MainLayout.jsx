import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layouts/Navbar'; // Import the Navbar component

/**
 * MainLayout component provides the responsive top navbar and the collapsible sidebar.
 * It uses the 'children' prop to render the content of the current page.
 */
function MainLayout({ children }) {
  // State to control sidebar visibility on small screens
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="d-flex" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Sidebar - conditionally show/hide based on sidebarOpen state and screen size */}
      <nav
        className={`bg-white shadow-sm sidebar ${sidebarOpen ? 'd-block' : 'd-none d-md-block'}`}
        style={{ width: '250px', flexShrink: 0, transition: 'transform 0.3s ease-in-out', transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)' }}
      >
        <div className="position-sticky pt-3">
          <div className="d-flex align-items-center px-3 mb-4">
            <span className="fs-5 fw-bold text-primary">Dashboard</span>
            {/* Close button for sidebar on small screens */}
            {sidebarOpen && (
              <button className="btn btn-link text-dark ms-auto d-md-none" onClick={toggleSidebar}>
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/" onClick={toggleSidebar}>
                <i className="fas fa-home me-2"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-primary" aria-current="page" to="/dashboard" onClick={toggleSidebar}>
                <i className="fas fa-tachometer-alt me-2"></i>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link text-muted text-uppercase fw-bold small mt-3">CRM</span>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-users me-2"></i>
                Customers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-chart-line me-2"></i>
                Leads
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-ticket-alt me-2"></i>
                Tickets
              </a>
            </li>
            <li className="nav-item">
              <span className="nav-link text-muted text-uppercase fw-bold small mt-3">Company</span>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-dollar-sign me-2"></i>
                Finance
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-envelope me-2"></i>
                Messages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-network-wired me-2"></i>
                Network sites
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-server me-2"></i>
                Routers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-cogs me-2"></i>
                TR-GEM (ACS)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-hdd me-2"></i>
                Hardware
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-globe me-2"></i>
                IPv4 networks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-globe-americas me-2"></i>
                IPv6 networks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-map me-2"></i>
                Maps
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-calendar-alt me-2"></i>
                Scheduling
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-boxes me-2"></i>
                Inventory
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-phone-alt me-2"></i>
                Voice
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-file-invoice-dollar me-2"></i>
                Tariff plans
              </a>
            </li>
            <li className="nav-item">
              <span className="nav-link text-muted text-uppercase fw-bold small mt-3">System</span>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-user-shield me-2"></i>
                Administration
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#" onClick={toggleSidebar}>
                <i className="fas fa-cog me-2"></i>
                Config
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Overlay for when sidebar is open on small screens */}
      {sidebarOpen && (
        <div
          className="offcanvas-backdrop fade show d-md-none"
          onClick={toggleSidebar}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1040 }}
        ></div>
      )}

      {/* Main Content Area */}
      <div className="flex-grow-1 p-4">
        {/* Render the Navbar component here, passing the state and function as props */}
        <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        {/* Render the children (page content) */}
        {children}
      </div>
    </div>
  );
}

export default MainLayout;