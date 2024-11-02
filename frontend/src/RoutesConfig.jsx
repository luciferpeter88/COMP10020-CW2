import { Routes, Route } from "react-router-dom";

// Import your page components
import Home from "./pages/HomePage";
import Jobs from "./pages/JobsPage";
import Contact from "./pages/ContactPage";
// import Signup from "./components/Signup";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/signup" element={<Signup />} />  */}
    </Routes>
  );
}

export default RoutesConfig;
