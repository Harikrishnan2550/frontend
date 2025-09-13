 
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets";

export default function Navbar() {
  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/price", label: "Price List" },
    { path: "/contact", label: "Contact" },
  ];

  const headerRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stickynavbar = () => {
    if (window.scrollY > 80) {
      headerRef.current.classList.add("sticky-headbar");
    } else {
      headerRef.current.classList.remove("sticky-headbar");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickynavbar);
    return () => {
      window.removeEventListener("scroll", stickynavbar);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="bg-white   transition-all duration-300 ease-in-out sticky-headbar"
    >
      <div className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">
        <Link to="/">
          <img
            className="w-28 max-w-full md:w-auto  h-auto object-contain"
            src={assets.logo}
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex  items-center  space-x-8 font-semibold">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[var(--primary-color)] border-b-2 border-[var(--primary-color)] pb-1"
                      : "hover:text-gray-400"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex  items-center  space-x-8 font-semibold">
          <Link to="/cart">
            <button className="flex items-center font-semibold text-gray-700">
              <img src={assets.cart} alt="Cart Icon" className="mr-2" />
              Cart
            </button>
          </Link>
          <Link to="/account">
            <button className="flex items-center px-4 py-1 font-semibold text-gray-700">
              <img src={assets.account} alt="Account Icon" className="mr-2" />
              Account
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden  flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <img
              src={assets.hamburger}
              alt="Menu Icon"
              className="md:w-6 w-4 object-cover md:h-6 h-4"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-12 left-0 w-full bg-white shadow-lg  z-20 ">
          <ul className="flex flex-col space-y-4 px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[var(--primary-color)]"
                      : "hover:text-gray-400"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                <button className="flex items-center text-gray-700">
                  {/* <img src={assets.cart} alt="Cart Icon" className="mr-2" /> */}
                  Cart
                </button>
              </Link>
            </li>
            <li>
              <Link to="/account" onClick={() => setIsMenuOpen(false)}>
                <button className="flex items-center   text-gray-700">
                  {/* <img
                    src={assets.account}
                    alt="Account Icon"
                    className="mr-2"
                  /> */}
                  Account
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
