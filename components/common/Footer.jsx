import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#263824] py-15">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-4">
          <div>
            <div className="img-wrapper mb-15">
              <img src="/image/logo.svg" alt="logo" />
            </div>
            <h3 className="text-[30px] text-left font-normal font-helvetica-neue-bold text-lightYellow tracking-[-0.05em]">
              Be the first to know what we launch next
            </h3>

            <div className="social mt-10">
              <ul className="flex gap-4">
                <li>
                  <a href="https://www.facebook.com/aducontainerco">
                    <FaFacebook className="text-marigold w-10 h-10" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/aducontainerco/">
                    <FaInstagram className="text-marigold w-10 h-10" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@ADUContainerCo">
                    <FaYoutube className="text-marigold w-10 h-10" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-white">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="mb-5 text-[30px] font-normal font-helvetica-neue-bold text-white tracking-[-0.02em]">
                  Explore
                </h3>
                <ul className="space-y-5 font-arial">
                  <li>
                    <a target="_blank" href="/pdf/ADU-Container Co Catalog 2026.pdf">Download Our Catalog</a>
                  </li>
                  <li>
                    <Link to="/models">Explore Our Models</Link>
                  </li>
                  <li>
                    <Link to="/financing">Financing</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About</Link>
                  </li>
                  <li>
                    <Link to="/how-it-works">How it Works</Link>
                  </li>
                </ul>
              </div>
              <div>
                {/* <ul className="space-y-5 font-arial">
                  <li>
                    <Link to="/terms-and-condition">Conditions of Use</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul> */}

                <h3 className="mt-20 mb-5 text-[30px] font-normal font-helvetica-neue-bold text-white tracking-[-0.02em]">
                  Contact
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a href="tel:800-910-1717">800-910-1717</a>
                  </li>
                  <li>
                    <a href="mailto:info@adu-container.com">
                      info@adu-container.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
