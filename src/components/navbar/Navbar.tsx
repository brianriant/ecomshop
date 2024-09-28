import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

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
  ];

  return (
    <header className="fixed w-[100%] top-0 bg-[var(--body-glass-color)] z-[var(--z-fixed)] border-b backdrop-blur-md mx-auto">
      <nav
        className="flex items-center justify-between h-[var(--header-height)] m-4 container"
        aria-label="Main Navigation">
        <NavLink to="/" className="text-[var(--first-color)] font-bold uppercase size-[var(--h2-font-size)] " onClick={closeMenu}>
          Ecomshop
        </NavLink>

        <div
          className={`flex items-center gap-5 nav__menu ${menuOpen ? "active" : ""} `}
          id="nav-menu"
          role="menu">
          <ul className="flex items-center justify-between nav__list">
            {navLinks.map((link, index) => (
              <li className="ml-8" key={index}>
                <NavLink
                  to={link.to}
                  className={`text-[var(--title-color)] font-semibold transition hover:text-[var(--first-color) hover:underline] ${link || ""}`}
                  onClick={closeMenu}
                  role="menuitem"
                  tabIndex={menuOpen ? 0 : -1}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className="nav__close"
            id="nav-close"
            onClick={toggleMenu}
            aria-label="CLose menu">
            <IoClose />
          </button>
        </div>

        <button
          className={`nav__toggle ${menuOpen ? "active" : ""}`}
          id="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu">
          <IoMenu />
        </button>
      </nav>
    </header>
  );
}
