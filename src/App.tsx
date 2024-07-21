import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import { Navbar, AboutUs, Footer } from './components'

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


