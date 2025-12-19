import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner = () => {
  return (
    <section className="appliances p-0 relative">
      <div className="img-wrapper">
        <LazyLoadImage
          src="/image/financing/banner.png"
          alt={"Hero image"}
          className={`mx-auto`}
          wrapperClassName="w-full text-center"
          effect="opacity"
          threshold={100}
        />
      </div>
      <div className="container md:p-0">
        <div className="text-wrapper absolute bottom-10">
          <h1 className="text-white text-85 tracking-[-0.05em]">
            Flexible Financing for Your <br />
            ADU Container
          </h1>
          <p className="text-khaki text-2xl font-helvetica-neue-bold mt-2 tracking-[-0.02em]">
            Simple, transparent options designed to fit your budget.
          </p>
          <div className="mt-7 flex gap-4">
            <button className="border-lightYellow text-white tracking-[-0.05em] bg-lightYellow md:text-lg font-helvetica-neue-bold rounded-md pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
              Talk to a Lender
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
