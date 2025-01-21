import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/HomePage";
import About from "./pages/About";
import DentalClinics from "./pages/DentalClinics";
import { PricePage } from "./pages/PricePage";
import DashboardPage from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions/dental" element={<DentalClinics />} />
        <Route path="/pricing" element={<PricePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;