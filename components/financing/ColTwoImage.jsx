import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const ColTwoImage = () => {
  return (
    <section>
      <div className="grid grid-cols-1 xl:grid-cols-11 bg-dark-green">
        {/* Text */}
        <div className="xl:col-span-5 p-6 md:p-10 xl:p-[80px_50px_80px_190px]">
          <h3 className="text-white font-helvetica-neue-bold text-2xl md:text-4xl tracking-[-0.02em]">
            Get our Single Container,
            <br />
            <span className="text-marigold">One-Bedroom Model</span> for <br />
            as low as:
          </h3>

          <h2 className="text-white font-arial font-normal leading-tight md:leading-[80px] text-5xl md:text-7xl xl:text-[85px] tracking-[-0.05em] my-5 md:my-7">
            $79,950
          </h2>

          <div className="btn-wrapper">
            <Link
              className="w-full md:w-auto border-lightYellow text-white tracking-[-0.02em] bg-lightYellow md:text-lg font-helvetica-neue-bold rounded-md px-8 pt-[13px] pb-[10px] px-5 hover:bg-green cursor-pointer"
              to="/models"
            >
              Explore Models
            </Link>
            {/* <button className="w-full sm:w-auto border-lightYellow text-white tracking-[-0.05em] bg-lightYellow md:text-lg font-helvetica-neue-bold rounded-md pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
              Explore Models
            </button> */}
          </div>
        </div>

        {/* Image */}
        <div className="xl:col-span-6 h-[260px] sm:h-[320px] md:h-[420px] xl:h-auto">
          <LazyLoadImage
            src="/image/financing/container.png"
            alt="Hero image"
            wrapperClassName="w-full h-full"
            className="w-full h-full object-cover"
            effect="opacity"
            threshold={100}
          />
        </div>
      </div>
    </section>
  );
};

export default ColTwoImage;
