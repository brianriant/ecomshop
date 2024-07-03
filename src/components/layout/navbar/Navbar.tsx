import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Ecomshop
        </NavLink>

        <div className={`nav__menu ${menuOpen ? "active": ""} `} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/news" className="nav__link" onClick={toggleMenu}>
                News
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/about-us" className="nav__link" onClick={toggleMenu}>
                About Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/favorite" className="nav__link" onClick={toggleMenu}>
                Favorite
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/location" className="nav__link" onClick={toggleMenu}>
                Location
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/get-started" className="nav__link nav__cta" onClick={toggleMenu}>
                Get Started
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
