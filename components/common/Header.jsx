import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-5 bg-gray mb-0">
      <div className="container">
        <div className="wrapper w-full">
          {/* <div className="logo w-[140px] h-[70px]">
            <Link to="/">
              <img src="/image/Group 2@2x.png" alt="logo" />
            </Link>
          </div> */}
          <div className="links-with-button flex items-center justify-center gap-12">
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
                  <a
                    className="text-marigold text-base font-normal hover:text-dark-teal hover:underline hover:decoration-marigold hover:underline-offset-5"
                    href="#"
                  >
                    Financing
                  </a>
                </li>
                <li className="button-text text-lg">
                  <a
                    className="text-marigold text-base font-normal hover:text-dark-teal hover:underline hover:decoration-marigold hover:underline-offset-5"
                    href="#"
                  >
                    How it Works
                  </a>
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
            {/* <div className="last-wrap border-1 border-gray-200 rounded-md px-5 py-2 button-text text-lg">
              <a
                className="text-yellow-600 hover:text-black hover:underline"
                href="#"
              >
                Contact Us
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;