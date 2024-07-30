import "./Footer.css";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const footerLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { href: "https://facebook.com", icon: <FaFacebook /> },
    { href: "https://twitter.com", icon: <FaXTwitter /> },
    { href: "https://instagram.com", icon: <FaInstagram /> },
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
            {footerLinks.map((social, index) => (
              <a key={index} href={social.href}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Ecomshop. All rights reserved.</p>
      </div>
    </footer>
  );
}
