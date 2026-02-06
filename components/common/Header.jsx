import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isModelsOpen, setIsModelsOpen] = useState(false);
  const modelsRef = useRef(null);
  const modelsMobileRef = useRef(null);
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

  useEffect(() => {
    const handlePointerDown = (e) => {
      const clickedOutsideDesktop =
        modelsRef.current && !modelsRef.current.contains(e.target);

      const clickedOutsideMobile =
        modelsMobileRef.current && !modelsMobileRef.current.contains(e.target);

      // Close only if click is outside BOTH (whichever exists on screen)
      if (clickedOutsideDesktop && clickedOutsideMobile) {
        setIsModelsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modelsRef.current && !modelsRef.current.contains(e.target)) {
        setIsModelsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  console.log("scrollY", scrollY);

  return (
    // <header className={`py-5 ${headerClass} mb-0`}>
    <header
      className={`py-5 mb-0 ${scrollY > 10 ? "bg-gray shadow-md" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <div className="wrapper w-full flex items-center justify-between">
          {/* Logo (Uncomment if needed) */}
          <div className="logo w-auto h-[40px] xl:w-[140px] xl:h-[70px]">
            <Link to="/" className="block h-full w-full">
              <img
                src="/image/Group 2@2x.png"
                className="h-full w-full object-contain"
                alt="logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="links-with-button hidden md:flex items-center justify-center gap-12 w-full">
            <nav className="flex-1">
              <ul className="flex gap-10 justify-center">
                <li className="relative button-text text-lg" ref={modelsRef}>
                  <button
                    type="button"
                    onClick={() => setIsModelsOpen((v) => !v)}
                    className="text-marigold text-base font-normal inline-flex items-center leading-none hover:text-dark-teal hover:underline hover:decoration-marigold hover:underline-offset-5"
                    aria-haspopup="menu"
                    aria-expanded={isModelsOpen}
                  >
                    Explore Models
                    <svg
                      className={`ml-1 w-4 h-4 inline transition-transform duration-200 ${
                        isModelsOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isModelsOpen && (
                    <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white shadow-lg border rounded-md py-2 z-50">
                      <li>
                        <Link
                          to="/models"
                          onClick={() => setIsModelsOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Customize Your Own ADU
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/gallery"
                          onClick={() => setIsModelsOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          View Gallery
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/appliances"
                          onClick={() => setIsModelsOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Appliances
                        </Link>
                      </li>
                    </ul>
                  )}
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
                  <Link
                    className="text-marigold text-base font-normal hover:text-dark-teal hover:underline hover:decoration-marigold hover:underline-offset-5"
                    to="/about-us"
                  >
                    About Us
                  </Link>
                </li>
                <li className="button-text text-lg">
                  <Link
                    className="bg-marigold text-white font-normal rounded-sm px-3 py-2"
                    to="/contact-us"
                  >
                    Contact Us
                  </Link>
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
              <li className="button-text text-lg" ref={modelsMobileRef}>
                <button
                  type="button"
                  onClick={() => setIsModelsOpen((v) => !v)}
                  className="w-full text-marigold text-base font-normal inline-flex items-center leading-none"
                  aria-haspopup="menu"
                  aria-expanded={isModelsOpen}
                >
                  Explore Models
                  <svg
                    className={`ml-1 w-4 h-4 inline transition-transform duration-200 ${
                      isModelsOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isModelsOpen && (
                  <ul className="ml-4 mt-2 flex flex-col gap-2">
                    <li>
                      <Link
                        to="/models"
                        className="text-sm text-gray-600 hover:text-dark-teal"
                      >
                        Customize Your Own ADU
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/gallery"
                        className="text-sm text-gray-600 hover:text-dark-teal"
                      >
                        View Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/appliances"
                        className="text-sm text-gray-600 hover:text-dark-teal"
                      >
                        Appliances
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="button-text text-lg">
                <Link
                  className="text-marigold text-base font-normal hover:text-dark-teal hover:underline hover:decoration-marigold hover:underline-offset-5"
                  to="/financing"
                  onClick={toggleMenu}
                >
                  Financing
                </Link>
              </li>
              <li className="button-text text-lg">
                <Link
                  className="text-marigold text-base font-normal hover:text-dark-teal hover:underline hover:decoration-marigold hover:underline-offset-5"
                  to="/how-it-works"
                  onClick={toggleMenu}
                >
                  How it Works
                </Link>
              </li>
              <li className="button-text text-lg">
                <Link
                  className="text-marigold text-base font-normal hover:text-dark-teal hover:underline hover:decoration-marigold hover:underline-offset-5"
                  to="/contact-us"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
