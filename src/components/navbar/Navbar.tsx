import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";
import Button from "../button/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    // { to: "/favorite", label: "Favorite" },
    { to: "/", label: "Shop Now", className: "nav__cta" },
  ];

  return (
    <header className="header">
      <nav className="nav container" aria-label="Main Navigation">
        <NavLink to="/" className="nav__logo" onClick={closeMenu}>
          Ecomshop
        </NavLink>

        <div
          className={`nav__menu ${menuOpen ? "active" : ""} `}
          id="nav-menu"
          role="menu">
          <ul className="nav__list">
            {navLinks.map((link, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={link.to}
                  className={`nav__link ${link.className || ""}`}
                  onClick={closeMenu}
                  role="menuitem"
                  tabIndex={menuOpen ? 0 : -1}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Button children={'Shop Now'} variant="primary" onClick= {toggleMenu} />
          <button
            className="nav__close"
            id="nav-close"
            onClick={toggleMenu}
            aria-label="CLose menu">
            <IoClose />
          </button>
        </div>

        <button
          className="nav__toggle"
          id="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu">
          <IoMenu />
        </button>
      </nav>
    </header>
  );
}
