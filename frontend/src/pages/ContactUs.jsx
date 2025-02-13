import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 sec
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow p-4">
            <h2 className="text-center mb-4">📩 Contact Us</h2>

            {showAlert && <Alert variant="success">Message Sent Successfully!</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={4} 
                  placeholder="Enter your message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;

