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

  console.log("scrollY", scrollY);

  return (
    // <header className={`py-5 ${headerClass} mb-0`}>
    <header
      className={`py-5 mb-0 ${scrollY > 10 ? "bg-gray shadow-md" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <div className="wrapper w-full flex items-center justify-between">
          {/* Logo (Uncomment if needed) */}
          <div className="logo w-auto h-[70px] xl:w-[280px] xl:h-[80px]">
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
                <li 
                  className="relative button-text text-lg" 
                  ref={modelsRef}
                  onMouseEnter={() => setIsModelsOpen(true)}
                  onMouseLeave={() => setIsModelsOpen(false)}
                  >
                  <button
                    type="button"
                    className="text-marigold text-[16px] min-[1000px]:text-[length:var(--font-size-22)] font-bold font-helvetica-neue-bold tracking-[-0.05em] inline-flex items-center leading-none"
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
                    <ul className="absolute top-full left-1/2 -translate-x-1/2 w-3xs bg-white border border-marigold py-3 z-50">
                      <li className="px-4">
                        <Link
                          to="/models"
                          onClick={() => setIsModelsOpen(false)}
                          className="block border-b border-[#F1E7CE] text-lg text-marigold font-helvetica-neue-light font-semibold tracking-[-0.05em]"
                        >
                          Customize Your Own ADU
                        </Link>
                      </li>
                      <li className="px-4 py-2">
                        <Link
                          to="/gallery"
                          onClick={() => setIsModelsOpen(false)}
                          className="block border-b border-[#F1E7CE] text-lg text-marigold font-helvetica-neue-light font-semibold tracking-[-0.05em]"
                        >
                          View Gallery
                        </Link>
                      </li>
                      <li className="px-4">
                        <Link
                          to="/appliances"
                          onClick={() => setIsModelsOpen(false)}
                          className="block text-lg text-marigold font-helvetica-neue-light font-semibold tracking-[-0.05em]"
                        >
                          Appliances
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="button-text text-lg">
                  <Link
                    className="text-marigold text-[16px] min-[1000px]:text-[length:var(--font-size-22)] font-bold font-helvetica-neue-bold tracking-[-0.05em]"
                    to="/financing"
                  >
                    Financing
                  </Link>
                </li>
                <li className="button-text text-lg">
                  <Link
                    className="text-marigold text-[16px] min-[1000px]:text-[length:var(--font-size-22)] font-bold font-helvetica-neue-bold tracking-[-0.05em]"
                    to="/how-it-works"
                  >
                    How it Works
                  </Link>
                </li>
                <li className="button-text text-lg">
                  <Link
                    className="text-marigold text-[16px] min-[1000px]:text-[length:var(--font-size-22)] font-bold font-helvetica-neue-bold tracking-[-0.05em]"
                    to="/about-us"
                  >
                    About Us
                  </Link>
                </li>
                <li className="button-text text-lg">
                  <Link
                    className="bg-marigold text-white text-[16px] min-[1000px]:text-[length:var(--font-size-22)] font-bold font-helvetica-neue-bold tracking-[-0.05em] px-5 pt-4 pb-3"
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
                  className="w-full text-marigold text-base font-helvetica-neue-bold tracking-[-0.05em] inline-flex items-center leading-none"
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
                        className="text-sm font-helvetica-neue-bold tracking-[-0.05em]"
                      >
                        Customize Your Own ADU
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/gallery"
                        className="text-sm font-helvetica-neue-bold tracking-[-0.05em]"
                      >
                        View Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/appliances"
                        className="text-sm font-helvetica-neue-bold tracking-[-0.05em]"
                      >
                        Appliances
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="button-text text-lg">
                <Link
                  className="text-marigold text-base font-helvetica-neue-bold tracking-[-0.05em]"
                  to="/financing"
                  onClick={toggleMenu}
                >
                  Financing
                </Link>
              </li>
              <li className="button-text text-lg">
                <Link
                  className="text-marigold text-base font-helvetica-neue-bold tracking-[-0.05em]"
                  to="/how-it-works"
                  onClick={toggleMenu}
                >
                  How it Works
                </Link>
              </li>
              <li className="button-text text-lg">
                <Link
                  className="text-marigold text-base font-helvetica-neue-bold tracking-[-0.05em]"
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
