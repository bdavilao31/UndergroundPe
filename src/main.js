import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import Fotos from './data/fotos.json'

const Main = () => {
  return (
    <main className="col-md-8" style={{ backgroundColor: '#8AEA91', padding: '10px', borderRadius: '8px' }}>
      <div className="pt-3 pb-3">
        <div className="container text-center">
          <h2 className="fw-bold mb-3" style={{ color: '#000000', marginTop: '0' }}>Descubre lo que te ofrece UndergroundPe</h2>
        </div>
      </div>

      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://media.gq.com.mx/photos/63f660d6f57c61d24bf508b9/16:9/w_2560%2Cc_limit/tenis-adidas-originals-x-bad-bunny-campus-light-caracteristicas-fecha-de-lanzamiento.jpg"
            alt="Adidas x Bad Bunny - Campus Ligth"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Adidas x Bad Bunny - Campus Ligth</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://www.21exclusives.com/cdn/shop/products/air-jordan-4-military-black-dh6927-111-release-date.jpg?v=1668059923"
            alt="Jordan Retro 4 - Military" 
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Jordan Retro 4 - Military</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://store.yankeekicks.com/cdn/shop/products/Travis-Scott-Nike-SB-Dunk-Low-CT5053-001-Release-Date-Price-4_4f7427b8-a556-4e86-a0ae-7d753695c2c3.jpg?v=1707416579"
            alt="Travis Scott x Nike SB Dunk"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Travis Scott x Nike SB Dunk</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="py-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="card mb-4 shadow" style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
                <div className="card-body text-center">
                  <i className="bi bi-grid-3x3-gap-fill" style={{ fontSize: '2rem', color: '#8AEA91' }}></i>
                  <h5 className="card-title mt-3">Variedad Inigualable</h5>
                  <p className="card-text">Desde ediciones limitadas hasta clásicos modernos, encuentra la variedad más amplia de zapatillas premium.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="card mb-4 shadow" style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
                <div className="card-body text-center">
                  <i className="bi bi-shield-check" style={{ fontSize: '2rem', color: '#8AEA91' }}></i>
                  <h5 className="card-title mt-3">Autenticidad Garantizada</h5>
                  <p className="card-text">Cada par es autenticado para garantizar su originalidad y calidad superior.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="card mb-4 shadow" style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
                <div className="card-body text-center">
                  <i className="bi bi-heart-fill" style={{ fontSize: '2rem', color: '#8AEA91' }}></i>
                  <h5 className="card-title mt-3">Pasión por las Zapatillas</h5>
                  <p className="card-text">Compartimos tu pasión y te ayudamos a encontrar ese par perfecto que habla por ti.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <h3 className="fw-bold mb-4" style={{ color: '#000000' }}>Marcas Disponibles</h3>
            <div className="d-flex justify-content-center flex-wrap">
              <div className="col-md-2 text-center mb-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike" className="img-fluid" style={{ maxHeight: '50px' }} />
              </div>
              <div className="col-md-2 text-center mb-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" alt="Adidas" className="img-fluid" style={{ maxHeight: '50px' }} />
              </div>
              <div className="col-md-2 text-center mb-4">
                <img src="https://seeklogo.com/images/P/puma-se-logo-ACC0F72575-seeklogo.com.png" alt="Puma" className="img-fluid" style={{ maxHeight: '50px' }} />
              </div>
              <div className="col-md-2 text-center mb-4">
                <img src="https://reebokpe.vtexassets.com/assets/vtex/assets-builder/reebokpe.store-theme/2.0.222/header/header-logo___fa9bb8f70890855d6cc021c8dacb7c17.svg" alt="Reebok" className="img-fluid" style={{ maxHeight: '50px' }} />
              </div>
              <div className="col-md-2 text-center mb-4">
                <img src="https://newbalance.com.pe/static/version1716416430/frontend/Omnipro/New-Balance/default/images/logo.svg" alt="New Balance" className="img-fluid" style={{ maxHeight: '50px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;


