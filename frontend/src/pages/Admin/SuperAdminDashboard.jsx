import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const SuperAdminDashboard = () => {
  // Dummy data for total counts
  const [stats, setStats] = useState({
    teachers: 25,
    departments: 6,
    classes: 12,
  });

  return (
    <Container fluid className="p-4">
      <h2 className="text-center mb-4 mt-3"> 🏫 Super Admin Dashboard</h2>

      <Row>
        {/* Total Teachers */}
        <Col md={4}>
          <Card className="shadow text-center p-3">
            <h5>👩‍🏫 Total Teachers</h5>
            <h3>{stats.teachers}</h3>
          </Card>
        </Col>

        {/* Total Departments */}
        <Col md={4}>
          <Card className="shadow text-center p-3">
            <h5>🏢 Total Departments</h5>
            <h3>{stats.departments}</h3>
          </Card>
        </Col>

        {/* Total Classes */}
        <Col md={4}>
          <Card className="shadow text-center p-3">
            <h5>📚 Total Classes</h5>
            <h3>{stats.classes}</h3>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SuperAdminDashboard;
