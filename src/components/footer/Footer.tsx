import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h4>Contact Us</h4>
          <p>Email: info@ecomshop.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer__section">
          <h4>Navigation</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/shop-now">Shop Now</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Follow Us</h4>
          <div className="footer__socials">
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Ecomshop. All rights reserved.</p>
      </div>
    </footer>
  );
}
