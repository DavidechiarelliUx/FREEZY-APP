import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logoLight from "../../assets/image/logo-light.svg"



function TopBar() {
  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home"><Image src={logoLight} alt="logo freezy"></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light p-1 mb-2" />
        <Navbar.Collapse id="basic-navbar-nav" className="bg-light border border-3">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/frigoPage">Frigo</Nav.Link>
            <Nav.Link as={Link} to="/shopPage">Shop</Nav.Link>
            <Nav.Link as={Link} to="/gamePage">Game</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
