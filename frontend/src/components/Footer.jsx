import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
              <Nav.Link  linkto="/" className="text-light">Home</Nav.Link>
              <Nav.Link linkto="/login" className="text-light">Student Login</Nav.Link>
              <Nav.Link linkto="/teacherlogin" className="text-light">Teacher Login</Nav.Link>
              <Nav.Link linkto="/adminlogin" className="text-light"></Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              Email: support@zealtesthub.com<br />
              Phone: +91 8806605436<br />
              Address: ZIBACAR,Narhe,Pune.
            </p>
            
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
