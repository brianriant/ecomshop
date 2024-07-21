import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import { Navbar, AboutUs, Footer } from './components'
import ProductsPage from './pages/productpage/ProductPage';

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
      <ProductsPage />
      <Footer />
    </Router>
  );
}


