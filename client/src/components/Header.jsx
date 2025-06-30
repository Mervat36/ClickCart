import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import "../css/common.css";

const Header = () => {
  return (
    <div className="navbar-wrapper fixed-top">
      <Navbar expand="lg" className="navbar-glass-inner">
        <Container className="navbar-content">

          <Navbar.Brand as={Link} to="/" className="brand-glow">
            ClickCart
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar" className="justify-content-center">

            <div className="navbar-full-row">

              <Nav className="nav-left d-flex gap-4 align-items-center">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/products">Products</Nav.Link>
              </Nav>

              <Form className="search-bar-form mx-4">
                <FormControl
                  type="search"
                  placeholder="Search for gadgets, accessories..."
                  className="search-input-wide"
                />
              </Form>

              <div className="nav-right d-flex align-items-center gap-3">
                <Nav.Link as={Link} to="/cart" className="cart-btn">🛒</Nav.Link>
                <Nav.Link as={Link} to="/login" className="login-btn">Login</Nav.Link>
                <Nav.Link as={Link} to="/register" className="register-btn">Register</Nav.Link>
              </div>

            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
