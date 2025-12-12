import { LazyLoadImage } from "react-lazy-load-image-component";

const Cta = () => {
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
        <div className="text-wrapper absolute top-1/2 left-0 w-full -translate-y-1/2 transform z-10">
          <h1 className="text-white text-85 tracking-[-5%]">
            Your Custom ADU Container <br />
            is Waiting For You
          </h1>
          <p className="text-khaki text-2xl font-helvetica-neue-bold mt-2 tracking-[-2%]">
            Built to your needs, budget, style, and timeline. Click below to
            start customizing your new home.
          </p>
          <div className="mt-7 flex gap-4">
            <button className="border-lightYellow text-white tracking-[-5%] bg-lightYellow md:text-lg font-helvetica-neue-bold rounded-md pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
              Customize Your ADU
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
