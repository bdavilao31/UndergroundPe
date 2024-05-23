import React, { useEffect } from 'react';
const feather = require('feather-icons');
import './style.css';

setTimeout(() => {
  feather.replace();
}, 1000);

const Aside = () => {
  return (
    <aside className="aside-container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleDropdownFormEmail1" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="email@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleDropdownFormPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="dropdownCheck"
          />
          <label className="form-check-label" htmlFor="dropdownCheck">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-3">
          Sign in
        </button>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">
          New around here? Sign up
        </a>
        <a className="dropdown-item" href="#">
          Forgot password?
        </a>
        <div className="icons-right">
          <i data-feather="bell"></i>
          <i data-feather="navigation"></i>
          <i data-feather="paperclip"></i>
          <i data-feather="trash-2"></i>
          <i data-feather="info"></i>
        </div>
      </form>
    </aside>
  );
}

export default Aside;
