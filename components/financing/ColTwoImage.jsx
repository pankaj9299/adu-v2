import { LazyLoadImage } from "react-lazy-load-image-component";

const ColTwoImage = () => {
  return (
    <section>
      <div className="grid grid-cols-11 bg-dark-green">
        <div className="col-span-5 p-[80px_50px_80px_190px]">
          <h3 className="text-white font-helvetica-neue-bold text-4xl tracking-[-2%]">
            Get our Single Container,
            <br />
            <span className="text-marigold">One-Bedroom Model</span> for <br />
            as low as:
          </h3>
          <h2 className="text-white font-arial font-normal leading-[80px] text-85 tracking-[-5%] my-7">
            $XXX,XXX
          </h2>
          <div className="btn-wrapper">
            <button className="border-lightYellow text-white tracking-[-5%] bg-lightYellow md:text-lg font-helvetica-neue-bold rounded-md pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
              Explore Models
            </button>
          </div>
        </div>
        <div className="col-span-6">
          <LazyLoadImage
            src="/image/financing/container.png"
            alt={"Hero image"}
            className={`h-full mx-auto`}
            wrapperClassName="h-full w-full text-center"
            effect="opacity"
            threshold={100}
          />
        </div>
      </div>
    </section>
  );
};

export default ColTwoImage;
