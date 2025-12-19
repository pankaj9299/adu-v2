import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

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
                  <a href="#">
                    <FaFacebook className="text-marigold w-10 h-10" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram className="text-marigold w-10 h-10" />
                  </a>
                </li>
                <li>
                  <a href="#">
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
                    <a href="#">Download Our Catalog</a>
                  </li>
                  <li>
                    <a href="#">Explore Our Models</a>
                  </li>
                  <li>
                    <a href="#">Financing</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">How it Works</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-5 font-arial">
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>

                <h3 className="mt-20 mb-5 text-[30px] font-normal font-helvetica-neue-bold text-white tracking-[-0.02em]">
                  Contact
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#">866.###.####</a>
                  </li>
                  <li>
                    <a href="#">info@adu-container.com</a>
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
