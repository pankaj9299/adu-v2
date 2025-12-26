import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner = () => {
  return (
    <section className="appliances relative isolate min-h-[250px] xl:min-h-[600px]">
      {/* Image behind */}
      <div className="img-wrapper absolute inset-0 -z-10 w-full h-full">
        <LazyLoadImage
          src="/image/financing/banner.png"
          alt="Hero image"
          wrapperClassName="w-full h-full"
          className="w-full h-full object-cover"
          effect="opacity"
          threshold={100}
        />
      </div>

      {/* Container must have height */}
      <div className="container relative z-20 min-h-[250px] xl:min-h-[600px] min-xl:p-0">
        <div className="text-wrapper absolute bottom-10 px-5 left-0 right-0">
          <h1 className="text-white text-3xl xl:text-[85px] tracking-[-0.05em]">
            Flexible Financing for Your <br />
            ADU Container
          </h1>
          <p className="text-khaki text-sm xl:text-2xl font-helvetica-neue-bold mt-2 tracking-[-0.02em]">
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
