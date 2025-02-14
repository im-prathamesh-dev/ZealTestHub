import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/student/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TeacherDashboard from "./pages/Teacher/TeacherDashbord";
import ContactUs from "./pages/ContactUs";
import SuperAdminDashboard from "./pages/Admin/SuperAdminDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tdashboard" element={<TeacherDashboard />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/forgot-password" element={<h1>Forgot Password</h1>} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/admin" element={<SuperAdminDashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
