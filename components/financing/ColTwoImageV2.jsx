import { LazyLoadImage } from "react-lazy-load-image-component";

const ColTwoImageV2 = () => {
  return (
    <section className="pb-0">
      <div className="grid grid-cols-12 bg-dark-green">
        <div className="col-span-6">
          <LazyLoadImage
            src="/image/financing/v2image.png"
            alt={"Hero image"}
            className={`h-full mx-auto`}
            wrapperClassName="h-full w-full text-center"
            effect="opacity"
            threshold={100}
          />
        </div>
        <div className="col-span-6 p-[80px_100px_80px_50px] self-center">
          <h3 className="text-white font-arial text-7xl leading-[74px] tracking-[-5%]">
            How Our Financing Works
          </h3>
          <p className="text-white my-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="btn-wrapper">
            <button className="border-lightYellow text-white tracking-[-5%] bg-lightYellow md:text-lg font-helvetica-neue-bold rounded-md pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
              Explore Models
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColTwoImageV2;
