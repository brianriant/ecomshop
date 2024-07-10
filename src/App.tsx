import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/navbar/Navbar'
import ProductPage from './pages/ProductPage'

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
         <Route path='/' element={<HomePage />} />
         <Route path='/' element={<ProductPage />} />
        </Routes>
      </main>
    </Router>
  );
}


