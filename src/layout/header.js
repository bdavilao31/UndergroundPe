import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import feather from 'feather-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';

const Header = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Zapatillas Adidas x Bad Bunny', quantity: 1, price: 680.00, size: 43, image: 'https://images.stockx.com/360/adidas-Forum-Low-Bad-Bunny/Images/adidas-Forum-Low-Bad-Bunny/Lv2/img01.jpg?fm=webp&auto=compress&w=480&dpr=2&updated_at=1635276861&h=320&q=60' }
  ]);
  const [showCart, setShowCart] = useState(false);
  const [showPromotions, setShowPromotions] = useState(false);
  const promotionsButtonRef = useRef(null);
  const [promotionsPosition, setPromotionsPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    feather.replace();
  }, []);

  const handleCartButtonClick = () => {
    setShowCart(!showCart);
  };

  const handlePromotionsButtonClick = () => {
    if (promotionsButtonRef.current) {
      const rect = promotionsButtonRef.current.getBoundingClientRect();
      setPromotionsPosition({ top: rect.top, left: rect.left - 300 }); // 300 is the width of the promotions container
    }
    setShowPromotions(!showPromotions);
  };

  const renderCartItems = () => {
    return cartItems.map(item => (
      <ListGroup.Item key={item.id} className="d-flex align-items-center">
        <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        <div>
          <div>{item.name}</div>
          <div>Talla: {item.size}</div>
          <div>Cantidad: {item.quantity}</div>
          <div>Precio: S/.{item.price.toFixed(2)}</div>
        </div>
      </ListGroup.Item>
    ));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#000000' }}>
        <Container fluid>
          <Navbar.Brand href="#" style={{ fontFamily: "'Press Start 2P', cursive", color: '#FFFFFF', fontSize: '20px' }}>
            UndergroundPE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link as={Link} to="/" style={{ color: '#FF6347' }} aria-label="Inicio">
                <i data-feather="home" className="me-1"></i> Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/productos" style={{ color: '#FF6347' }} aria-label="Productos">
                <i data-feather="shopping-bag" className="me-1"></i> Productos
              </Nav.Link>
              <Nav.Link as={Link} to="/categorias" style={{ color: '#FF6347' }} aria-label="Categorías">
                <i data-feather="layers" className="me-1"></i> Categorías
              </Nav.Link>
              <Nav.Link as={Link} to="/mispedidos" style={{ color: '#FF6347' }} aria-label="Mis Pedidos">
                <i data-feather="package" className="me-1"></i> Mis Pedidos
              </Nav.Link>
              <Nav.Link as={Link} to="/preguntasfrecuentes" style={{ color: '#FF6347' }} aria-label="Preguntas Frecuentes">
                <i data-feather="help-circle" className="me-1"></i> Preguntas Frecuentes
              </Nav.Link>
            </Nav>
            <Form className="d-flex me-3" role="search">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Buscar"
              />
              <Button variant="outline-light" style={{ borderColor: '#FF6347', color: '#FF6347' }}>
                <i data-feather="search"></i>
              </Button>
            </Form>
            <div className="d-flex align-items-center">
              <Button variant="outline-light" aria-label="Carrito de Compras" style={{ borderColor: '#FF6347', color: '#FF6347' }} onClick={handleCartButtonClick}>
                <i data-feather="shopping-cart"></i>
              </Button>
              <Button variant="outline-light" aria-label="Iniciar Sesión" style={{ borderColor: '#FF6347', color: '#FF6347' }}>
                <i data-feather="user"></i>
              </Button>
              <Button ref={promotionsButtonRef} variant="outline-light" aria-label="Notificaciones" style={{ borderColor: '#FF6347', color: '#FF6347' }} onClick={handlePromotionsButtonClick}>
                <i data-feather="bell"></i>
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showCart && (
        <div style={{ position: 'absolute', right: '10px', top: '60px', width: '300px', backgroundColor: 'white', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '10px', zIndex: 1000 }}>
          <ListGroup>
            {renderCartItems()}
          </ListGroup>
          <p className="mt-3">Total: S/.{calculateTotalPrice()}</p>
          <div className="d-flex justify-content-end">
            <Button variant="primary" style={{ marginRight: '10px' }}>
              Pagar
            </Button>
            <Button variant="secondary" onClick={() => setShowCart(false)}>
              Cerrar
            </Button>
          </div>
        </div>
      )}

      {showPromotions && (
        <div style={{ position: 'absolute', top: `${promotionsPosition.top}px`, left: `${promotionsPosition.left}px`, width: '300px', backgroundColor: 'white', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '10px', zIndex: 1000 }}>
          <h5>Promociones</h5>
          <ListGroup>
            <ListGroup.Item>
              <i data-feather="percent" style={{ marginRight: '10px' }}></i>
              <div>
                <strong>30% de Descuento</strong>
                <p>Obtén un 30% de descuento en tu primera compra registrándote en la web.</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <i data-feather="tag" style={{ marginRight: '10px' }}></i>
              <div>
                <strong>Mitad de Precio</strong>
                <p>Tu tercera zapatilla te sale a mitad de precio.</p>
              </div>
            </ListGroup.Item>
          </ListGroup>
          <div className="d-flex justify-content-end mt-3">
            <Button variant="secondary" onClick={() => setShowPromotions(false)}>
              Cerrar
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;


