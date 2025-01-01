import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ErrorPage from "./components/404/ErrorPage";
import BookingForm from "./pages/BookingsPage";
import CompanyPage from "./pages/CompanyPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bookings" element={<BookingForm />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="*" element={<ErrorPage />} /> {/* Wildcard Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
