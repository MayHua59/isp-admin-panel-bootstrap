import React from 'react';
import { Link } from 'react-router-dom'; 

const NotFoundPage = () => {
  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
      <div className="text-center p-5 bg-white rounded shadow" style={{ maxWidth: '480px', width: '90%' }}>
        <h1 className="display-1 text-primary">404</h1>
        <p className="lead text-secondary mb-4">Sorry, the page you are looking for does not exist.</p>
        
        <Link to="/dashboard" className="btn btn-primary btn-lg">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;