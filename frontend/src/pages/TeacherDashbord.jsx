import { useState } from "react";
import { Container, Row, Col, Card, Button, Table, Modal, Form } from "react-bootstrap";
import EditProfile from "../components/EditProfile";
import AddTest from "../components/AddTest";
import ManageClass from "../components/ManageClass";

const TeacherDashboard = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showTestModal, setShowTestModal] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);
  const [showEditTestModal, setShowEditTestModal] = useState(false);
  const [testData, setTestData] = useState({ subject: "", date: "" });

  const [teacher, setTeacher] = useState({
    name: "Prof. Alexa Johnson",
    email: "alexa.johnson@example.com",
    phone: "123-456-7890",
    password: "********",
  });

  const [tests, setTests] = useState([
    { id: 1, subject: "Mathematics", date: "Feb 20, 2025" },
    { id: 2, subject: "Physics", date: "Feb 25, 2025" },
  ]);

  const handleUpdateProfile = (updatedData) => {
    setTeacher(updatedData);
  };

  const handleDeleteTest = () => {
    setTests(tests.filter((test) => test.id !== selectedTest));
    setShowConfirmDelete(false);
  };

  const handleEditTest = (test) => {
    setTestData(test);
    setShowEditTestModal(true);
  };

  const handleSaveEditTest = () => {
    setTests(
      tests.map((test) => (test.id === testData.id ? { ...test, ...testData } : test))
    );
    setShowEditTestModal(false);
  };

  return (
    <Container fluid className="p-4">
      <h2 className="text-center mb-4 mt-5"> 🧑‍🏫 Teacher Dashboard</h2>

      <Row>
        {/* Left Section - Profile */}
        <Col md={4}>
          <Card className="text-center shadow">
            <Card.Body>
              <img src="/ab.jpg" alt="Profile" className="rounded-circle mb-3" />
              <h5>{teacher.name}</h5>
              <p>Email: {teacher.email}</p>
              <p>Phone: {teacher.phone}</p>
              <Button variant="primary" size="sm" onClick={() => setShowEditModal(true)}>
                Edit Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Section - Stats */}
        <Col md={8}>
          <Row>
            <Col md={6}>
              <Card className="shadow mb-3 mt-3">
                <Card.Body>
                  <h5>📚 Students Assigned</h5>
                  <p>Total Students: <strong>150</strong></p>
                  <Button variant="success" size="sm">View List</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <ManageClass />
            </Col>
          </Row>

          {/* Manage Tests Section */}
          <Card className="shadow mt-3">
            <Card.Body>
              <h5>📑 Manage Tests</h5>
              <AddTest
        show={showTestModal}
        handleClose={() => setShowTestModal(false)}
      />

              <Table striped bordered hover responsive className="mt-2">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tests.map((test, index) => (
                    <tr key={test.id}>
                      <td>{index + 1}</td>
                      <td>{test.subject}</td>
                      <td>{test.date}</td>
                      <td>
                        <Button variant="warning" size="sm" onClick={() => handleEditTest(test)}>Edit</Button>{' '}
                        <Button
                          variant="danger"
                          size="sm"
                          className="mt-2"
                          onClick={() => {
                            setSelectedTest(test.id);
                            setShowConfirmDelete(true);
                          }}
                        >Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modals */}
      <EditProfile
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        teacherData={teacher}
        updateProfile={handleUpdateProfile}
      />

     
      {/* Confirm Delete Modal */}
      <Modal show={showConfirmDelete} onHide={() => setShowConfirmDelete(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this test?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmDelete(false)}>Cancel</Button>
          <Button variant="danger" onClick={handleDeleteTest}>Delete</Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Test Modal */}
      <Modal show={showEditTestModal} onHide={() => setShowEditTestModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                value={testData.subject}
                onChange={(e) => setTestData({ ...testData, subject: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                value={testData.date}
                onChange={(e) => setTestData({ ...testData, date: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditTestModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleSaveEditTest}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TeacherDashboard;
