import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log("window.scrollY =", window.scrollY); // 👈 should fire on scroll
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // run once on mount

  console.log("scrollY", scrollY);

  return (
    // <header className={`py-5 ${headerClass} mb-0`}>
    <header
      className={`py-5 mb-0 ${scrollY > 10 ? "bg-gray shadow-md" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <div className="wrapper w-full flex items-center justify-between">
          {/* Logo (Uncomment if needed) */}
          <div className="logo w-[140px] h-[70px]">
            <Link to="/">
              <img src="/image/Group 2@2x.png" alt="logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="links-with-button hidden md:flex items-center justify-center gap-12 w-full">
            <nav className="flex-1">
              <ul className="flex gap-10 justify-center">
                <li className="button-text text-lg">
                  <Link
                    className="text-marigold text-base font-normal hover:text-dark-teal hover:underline hover:decoration-marigold hover:underline-offset-5"
                    to="/"
                  >
                    Explore Models
                  </Link>
                </li>
                <li className="button-text text-lg">
                  <Link
                    className="text-marigold text-base font-normal hover:text-dark-teal hover:underline hover:decoration-marigold hover:underline-offset-5"
                    to="/financing"
                  >
                    Financing
                  </Link>
                </li>
                <li className="button-text text-lg">
                  <Link
                    className="text-marigold text-base font-normal hover:text-dark-teal hover:underline hover:decoration-marigold hover:underline-offset-5"
                    to="/how-it-works"
                  >
                    How it Works
                  </Link>
                </li>
                <li className="button-text text-lg">
                  <a
                    className="text-marigold text-base font-normal hover:text-dark-teal hover:underline hover:decoration-marigold hover:underline-offset-5"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            {/* Uncomment if you need the Contact Us button */}
            {/* <div className="last-wrap border border-gray-200 rounded-md px-5 py-2 button-text text-lg">
              <a className="text-yellow-600 hover:text-black hover:underline" href="#">
                Contact Us
              </a>
            </div> */}
          </div>

          {/* Burger Menu Button (Visible on Mobile) */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8 text-marigold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                // Close Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Burger Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Toggles based on state) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mt-4">
            <ul className="flex flex-col gap-4">
              <li className="button-text text-lg">
                <Link
                  className="text-marigold text-base font-normal hover:text-dark-teal hover:underline hover:decoration-marigold hover:underline-offset-5"
                  to="/"
                  onClick={toggleMenu} // Close menu on link click
                >
                  Explore Models
                </Link>
              </li>
              <li className="button-text text-lg">
                <a
                  className="text-marigold text-base font-normal hover:text-dark-teal hover:underline hover:decoration-marigold hover:underline-offset-5"
                  href="#"
                  onClick={toggleMenu}
                >
                  Financing
                </a>
              </li>
              <li className="button-text text-lg">
                <a
                  className="text-marigold text-base font-normal hover:text-dark-teal hover:underline hover:decoration-marigold hover:underline-offset-5"
                  href="#"
                  onClick={toggleMenu}
                >
                  How it Works
                </a>
              </li>
              <li className="button-text text-lg">
                <a
                  className="text-marigold text-base font-normal hover:text-dark-teal hover:underline hover:decoration-marigold hover:underline-offset-5"
                  href="#"
                  onClick={toggleMenu}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
