import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import Fotos from './data/fotos.json';
import feather from 'feather-icons';

const Main = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate("/detalle/" + slug);
  }

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <main style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
      <Carousel>
        {
          Fotos.map(it => (
            <Carousel.Item key={it.slug} onClick={(e) => {
              e.preventDefault(); handleClick(it.slug)
            }}>
              <img className='w-100 dark-image' src={it.picture} alt={it.name}></img>
              <Carousel.Caption>
                <h3>{it.name}</h3>
                <button className="btn btn-primary" style={{ backgroundColor: '#FF4500', color: '#FFFFFF', borderColor: '#FF4500' }}>Ver detalle</button>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>

      <div className="text-center py-5 my-5" style={{ backgroundColor: '#f8f9fa', color: '#000000' }}>
        <h2 className="fw-bold mb-4" style={{ color: '#FF4500' }}>Descubre lo que te ofrece UndergroundPe</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
        En UndergroundPe, te ofrecemos lo último en colaboraciones exclusivas con artistas urbanos y las zapatillas más originales. Nuestra colección cuidadosamente seleccionada destaca la creatividad y la calidad, garantizando que cada par de zapatillas no solo complementa tu estilo, sino que también cuenta una historia única. Vive tu pasión por la moda y el diseño con cada paso, descubriendo ediciones limitadas y piezas únicas que te diferenciarán del resto.
        </p>
      </div>

      <div className="py-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="card mb-4 shadow" style={{ backgroundColor: '#f8f9fa', color: '#000000' }}>
                <div className="card-body text-center">
                  <i className="bi bi-grid-3x3-gap-fill" style={{ fontSize: '2rem', color: '#8AEA91' }}></i>
                  <h5 className="card-title mt-3">Variedad Inigualable</h5>
                  <p className="card-text">Desde ediciones limitadas hasta clásicos modernos, encuentra la variedad más amplia de zapatillas premium.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="card mb-4 shadow" style={{ backgroundColor: '#f8f9fa', color: '#000000' }}>
                <div className="card-body text-center">
                  <i className="bi bi-shield-check" style={{ fontSize: '2rem', color: '#8AEA91' }}></i>
                  <h5 className="card-title mt-3">Autenticidad Garantizada</h5>
                  <p className="card-text">Cada par es autenticado para garantizar su originalidad y calidad superior.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="card mb-4 shadow" style={{ backgroundColor: '#f8f9fa', color: '#000000' }}>
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
