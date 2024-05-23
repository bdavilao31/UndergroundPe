import React, { useEffect } from 'react';
import feather from 'feather-icons';

const Header = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <header className="d-flex justify-content-between align-items-center py-3 px-4" style={{ backgroundColor: '#000000' }}>
      <a className="navbar-brand" href="#" style={{ fontFamily: "'Press Start 2P', cursive", color: 'white', fontSize: '20px' }}>
        UndergroundPE
      </a>
      <nav className="d-flex align-items-center">
        <button className="btn btn-outline-light me-2" aria-label="Inicio">
          <i data-feather="home" className="me-1"></i> Inicio
        </button>
        <button className="btn btn-outline-light me-2" aria-label="Productos">
          <i data-feather="shopping-bag" className="me-1"></i> Productos
        </button>
        <button className="btn btn-outline-light me-2" aria-label="Categorías">
          <i data-feather="layers" className="me-1"></i> Categorías
        </button>
        <button className="btn btn-outline-light me-2" aria-label="Mis Pedidos">
          <i data-feather="package" className="me-1"></i> Mis Pedidos
        </button>
        <button className="btn btn-outline-light" aria-label="Preguntas Frecuentes">
          <i data-feather="help-circle" className="me-1"></i> Preguntas Frecuentes
        </button>
      </nav>

      <div className="d-flex align-items-center">
        <form className="d-flex me-3" role="search">
          <label htmlFor="search" className="visually-hidden">Buscar</label>
          <input id="search" className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
          <button className="btn btn-outline-light" type="submit" aria-label="Buscar">
            <i data-feather="search"></i>
          </button>
        </form>
        <button className="btn btn-outline-light me-2" aria-label="Carrito de Compras">
          <i data-feather="shopping-cart"></i>
        </button>
        <button className="btn btn-outline-light me-2" aria-label="Iniciar Sesión">
          <i data-feather="user"></i>
        </button>
        <button className="btn btn-outline-light" aria-label="Notificaciones">
          <i data-feather="bell"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;

