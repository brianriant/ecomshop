import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, AboutUs, Footer } from "./components";
import ProductsPage from "./pages/ProductPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
