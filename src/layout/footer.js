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
          <div className="col-md-3">
            <h5>Síguenos</h5>
            <a href="#" className="me-2 text-white" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" className="me-2 text-white" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" className="me-2 text-white" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" className="me-2 text-white" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            <a href="#" className="me-2 text-white" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;