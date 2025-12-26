import { LazyLoadImage } from "react-lazy-load-image-component";

const ColTwoImageV2 = () => {
  return (
    <section className="py-0">
      <div className="grid grid-cols-1 xl:grid-cols-12 bg-dark-green">
        {/* Image */}
        <div className="xl:col-span-6 h-[260px] sm:h-[320px] md:h-[420px] xl:h-auto">
          <LazyLoadImage
            src="/image/financing/v2image.png"
            alt="Hero image"
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full text-center"
            effect="opacity"
            threshold={100}
          />
        </div>

        {/* Text */}
        <div className="xl:col-span-6 self-center p-6 md:p-10 xl:p-[80px_100px_80px_50px]">
          <h3 className="text-white font-arial text-3xl sm:text-4xl md:text-5xl xl:text-7xl leading-tight xl:leading-[74px] tracking-[-0.05em]">
            How Our Financing Works
          </h3>

          <p className="text-white my-6 md:my-10 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="btn-wrapper">
            <button className="w-full sm:w-auto border-lightYellow text-white tracking-[-0.05em] bg-lightYellow md:text-lg font-helvetica-neue-bold rounded-md pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
              Explore Models
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColTwoImageV2;
