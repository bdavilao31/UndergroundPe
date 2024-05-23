import React from 'react';

const Footer = () => {
  return (
    <footer className="py-3" style={{ backgroundColor: '#33202A', color: '#FFFFFF' }}>
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-md-3 mb-3 mb-md-0">
            <h5>Desarrollador</h5>
            <p>Davila Ortiz, Briyan</p>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <p>© 2024 UNDERGROUNDPE UPAO</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;