import { useState } from "react";
import { Card, Button, Table, Form, Modal } from "react-bootstrap";

const AssignStudents = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", class: "MCA - Semester 1" },
    { id: 2, name: "Jane Smith", class: "MCA - Semester 2" }
  ]);

  const [show, setShow] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: "", class: "" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAssignStudent = () => {
    if (newStudent.name && newStudent.class) {
      setStudents([...students, { id: students.length + 1, ...newStudent }]);
      setNewStudent({ name: "", class: "" });
      handleClose();
    }
  };

  return (
    <Card className="shadow mt-3">
      <Card.Body>
        <h5>🎓 Assign Students</h5>
        <Button variant="info" size="sm" onClick={handleShow}>+ Assign Student</Button>

        <Table striped bordered hover responsive className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.class}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>

      {/* Modal for Assigning Student */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Student Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default AssignStudents;
