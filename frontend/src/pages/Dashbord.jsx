import { useState } from "react";
import { Container, Row, Col, Card, Button, Table, Modal, Form } from "react-bootstrap";

const Dashboard = () => {
  const [student, setStudent] = useState({
    name: "Joye Das",
    email: "joyedas@example.com",
  });
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState(student.name);
  const [newEmail, setNewEmail] = useState(student.email);

  const handleSaveChanges = () => {
    setStudent({ name: newName, email: newEmail });
    setShowModal(false);
  };

  return (
    <Container fluid className="p-4">
      <h2 className="text-center mb-4">🎓 Student Dashboard</h2>

      <Row>
        {/* Left Section - Student Profile */}
        <Col md={4}>
          <Card className="text-center shadow">
            <Card.Body>
              <img src="/ab.jpg" alt="Profile" className="rounded-circle mb-3" />
              <h5>{student.name}</h5>
              <p>Email: {student.email}</p>
              <Button variant="primary" size="sm" onClick={() => setShowModal(true)}>
                Edit Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Section - Stats */}
        <Col md={8}>
          <Row>
            <Col md={6}>
              <Card className="shadow mb-1">
                <Card.Body>
                  <h5>📅 Upcoming Tests</h5>
                  <ul>
                    <li>JAVA - Feb 15, 2025</li>
                    <li>STQA - Feb 18, 2025</li>
                    <li>STQA - Feb 18, 2025</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="shadow mb-3">
                <Card.Body>
                  <h5>📊 Performance Overview</h5>
                  <p>Average Score: <strong>85%</strong></p>
                  <p>Rank: <strong>Top 10%</strong></p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Card className="shadow">
            <Card.Body>
              <h5>📜 Test History</h5>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Score</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Python</td>
                    <td>90%</td>
                    <td>Jan 10, 2025</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Web Development</td>
                    <td>80%</td>
                    <td>Jan 15, 2025</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Profile Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Dashboard;