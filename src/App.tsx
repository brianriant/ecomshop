import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import AboutUs from './components/aboutus/AboutUs';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}


