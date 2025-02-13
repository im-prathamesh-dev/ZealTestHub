import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AddTest = ({ onAddTest }) => {
  const [show, setShow] = useState(false);
  const [testDetails, setTestDetails] = useState({
    title: "",
    subject: "",
    date: "",
    duration: "",
    totalMarks: "",
  });

  // Handle modal open/close
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Handle input changes
  const handleChange = (e) => {
    setTestDetails({ ...testDetails, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTest(testDetails); // Pass test data to parent component
    setTestDetails({ title: "", subject: "", date: "", duration: "", totalMarks: "" }); // Clear form
    handleClose(); // Close modal
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>+ Add New Test</Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>📑 Add New Test</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Test Title</Form.Label>
              <Form.Control type="text" name="title" value={testDetails.title} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" name="subject" value={testDetails.subject} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" value={testDetails.date} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Duration (in minutes)</Form.Label>
              <Form.Control type="number" name="duration" value={testDetails.duration} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Total Marks</Form.Label>
              <Form.Control type="number" name="totalMarks" value={testDetails.totalMarks} onChange={handleChange} required />
            </Form.Group>

            <Button variant="success" type="submit"className="me-3">Add Test</Button>
            <Button variant="primary" type="submit"className="me-3" >Upload Question Paper</Button>
            <Button variant="warning" type="submit"className="me-3 mt-2" >Upload Answer Key</Button>

          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddTest;
