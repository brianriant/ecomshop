import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const footerLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
  ];

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
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a href={link.to}>{link.label}</a>
              </li>
            ))}
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
