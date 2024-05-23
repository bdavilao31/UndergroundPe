import React, { useEffect } from 'react';
import feather from 'feather-icons';

const Aside = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  const buttonStyle = {
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#000000',
    color: '#FFFFFF',
  };

  return (
    <aside className="col-md-4 p-4" style={{ backgroundColor: '#5F5566', color: '#FFFFFF', borderRadius: '8px' }}>
      <h2 className="d-flex justify-content-center align-items-center mb-4">
        Registro de Usuario
      </h2>
      <form>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            <i data-feather="user" className="me-2"></i>
            Nombre
          </label>
          <input type="text" className="form-control" id="firstName" placeholder="Ingrese su nombre" style={{ color: '#000000' }} />
        </div>
        
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            <i data-feather="user" className="me-2"></i>
            Apellido
          </label>
          <input type="text" className="form-control" id="lastName" placeholder="Ingrese su apellido" style={{ color: '#000000' }} />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <i data-feather="mail" className="me-2"></i>
            Correo
          </label>
          <input type="email" className="form-control" id="email" placeholder="ejemplo@gmail.com" required style={{ color: '#000000' }} />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            <i data-feather="phone" className="me-2"></i>
            Número de Celular
          </label>
          <div className="d-flex">
            <span className="input-group-text" style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>+51</span>
            <input type="tel" className="form-control" id="phone" placeholder="999999999" style={{ color: '#000000' }} />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <i data-feather="lock" className="me-2"></i>
            Contraseña
          </label>
          <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" style={{ color: '#000000' }} />
        </div>

        <button type="submit" className="btn btn-primary d-block w-100 mb-3" style={{ backgroundColor: '#8AEA91', borderColor: '#8AEA91', color: '#000000' }}>
          <i data-feather="send" className="me-2"></i>
          Registrarse
        </button>
      </form>
      <div className="text-center">
        <p>¿Ya tienes una cuenta?</p>
        <button
          className="btn btn-outline-light"
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.currentTarget.style.color = buttonHoverStyle.color;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '';
            e.currentTarget.style.color = buttonStyle.color;
          }}
          aria-label="Iniciar Sesión"
        >
          <i data-feather="log-in" className="me-1"></i> Iniciar Sesión
        </button>
      </div>
    </aside>
  );
}

export default Aside;
