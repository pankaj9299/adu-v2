import { LazyLoadImage } from "react-lazy-load-image-component";

const Cta = () => {
  return (
    <section className="appliances p-0">
      <div className="img-wrapper relative w-full overflow-hidden text-[0px]">
        <LazyLoadImage
          src="/image/financing/cta.png"
          alt="Hero image"
          className="w-full h-[590px] object-cover"   // adjust height
          wrapperClassName="w-full block leading-none"
          effect="opacity"
          threshold={100}
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container md:p-0">
            <div className="text-wrapper">
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
        </div>
      </div>
    </section>
  );
};

export default Cta;
