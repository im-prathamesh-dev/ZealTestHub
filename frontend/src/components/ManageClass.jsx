import { useState } from "react";
import { Card, Button, Table, Form, Modal } from "react-bootstrap";

const ManageClass = () => {
  const [classes, setClasses] = useState([
    { id: 1, name: "MCA - Semester 1" },
    { id: 2, name: "MCA - Semester 2" }
  ]);

  const [show, setShow] = useState(false);
  const [newClass, setNewClass] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddClass = () => {
    if (newClass.trim() !== "") {
      setClasses([...classes, { id: classes.length + 1, name: newClass }]);
      setNewClass("");
      handleClose();
    }
  };

  return (
    <Card className="shadow">
      <Card.Body>
        <h5>📌 Manage Classes</h5>
        <Button variant="info" size="sm" onClick={handleShow}>+ Add Class</Button>

        <Table striped bordered hover responsive className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => (
              <tr key={cls.id}>
                <td>{cls.id}</td>
                <td>{cls.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>

      {/* Modal for Adding Class */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Class Name</Form.Label>
            <Form.Control 
              type="text" 
              value={newClass} 
              onChange={(e) => setNewClass(e.target.value)} 
              placeholder="Enter class name" 
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleAddClass}>Add Class</Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default ManageClass;
