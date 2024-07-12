import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/navbar/Navbar'
import ProductPage from './pages/ProductPage'
import HeroSection from './components/hero/HeroSection';

export default function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<ProductPage />} />
        </Routes>
      </main>
    </Router>
  );
}


