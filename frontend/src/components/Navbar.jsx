import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg"  className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Container>
        {/* Logo and Brand Name */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://zibacar.in/wp-content/uploads/2020/12/logo.png"
            width="60"
            height="30"
            className="d-inline-block align-top me-2"
            alt="Zeal Institute Logo"
          />
          <strong>ZealTestHub</strong>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Navbar Items */}
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="mx-2">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="mx-2">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
