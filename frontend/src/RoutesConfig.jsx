import { Routes, Route } from "react-router-dom";

// Import your page components
import Home from "./pages/HomePage";
import Jobs from "./pages/JobsPage";
import Contact from "./pages/ContactPage";
import SingleJobPage from "./pages/SingleJobPage";
function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<SingleJobPage />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/signup" element={<Signup />} />  */}
    </Routes>
  );
}

export default RoutesConfig;
