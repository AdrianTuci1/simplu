import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/HomePage";
import About from "./pages/About";
import DentalClinics from "./pages/DentalClinics";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions/dental" element={<DentalClinics />} />
      </Routes>
    </Router>
  );
}

export default App;