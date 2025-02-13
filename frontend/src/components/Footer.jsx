import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container fluid>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              ZealTestHub is an online platform for students to take various exams and assess their knowledge in multiple subjects. We aim to make learning and testing accessible and efficient.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-light">Home</Nav.Link>
              <Nav.Link href="#about" className="text-light">About</Nav.Link>
              <Nav.Link href="#services" className="text-light">Services</Nav.Link>
              <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              Email: support@zealtesthub.com<br />
              Phone: +123 456 7890<br />
              Address: 123 Test Street, Knowledge City
            </p>
            <h5>Follow Us</h5>
            <Nav>
              <Nav.Link href="#" className="text-light">
                <i className="fab fa-facebook-f"></i> Facebook
              </Nav.Link>
              <Nav.Link href="#" className="text-light">
                <i className="fab fa-twitter"></i> Twitter
              </Nav.Link>
              <Nav.Link href="#" className="text-light">
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2025 ZealTestHub. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
