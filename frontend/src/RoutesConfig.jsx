import { Routes, Route } from "react-router-dom";

// Import your page components
import Home from "./pages/HomePage";
import Jobs from "./pages/JobsPage";
import Contact from "./pages/ContactPage";
import SingleJobPage from "./pages/SingleJobPage";
import Dashboard from "./pages/EmployerDashboard";
import CanditateDashboard from "./pages/CanditateDashboard";
function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<SingleJobPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/employer-dashboard" element={<Dashboard />} />
      <Route path="/candidate-dashboard" element={<CanditateDashboard />} />
    </Routes>
  );
}

export default RoutesConfig;
