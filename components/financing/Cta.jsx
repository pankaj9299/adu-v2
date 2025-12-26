import { LazyLoadImage } from "react-lazy-load-image-component";

const Cta = () => {
  return (
    <section className="appliances p-0">
      <div className="img-wrapper relative w-full overflow-hidden text-[0px]">
        <LazyLoadImage
          src="/image/financing/cta.png"
          alt="Hero image"
          className="w-full h-[320px] sm:h-[420px] md:h-[520px] xl:h-[590px] object-cover"
          wrapperClassName="w-full block leading-none"
          effect="opacity"
          threshold={100}
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container px-4 md:px-0 md:p-0">
            <div className="text-wrapper max-w-3xl">
              <h1 className="text-white text-3xl sm:text-4xl md:text-6xl xl:text-[85px] tracking-[-0.05em] leading-tight">
                Your Custom ADU Container <br className="hidden sm:block" />
                is Waiting For You
              </h1>

              <p className="text-khaki text-sm sm:text-base md:text-xl xl:text-2xl font-helvetica-neue-bold mt-2 tracking-[-0.02em]">
                Built to your needs, budget, style, and timeline. Click below to
                start customizing your new home.
              </p>

              <div className="mt-6 md:mt-7 flex flex-col sm:flex-row gap-4">
                <button
                  className="
    w-full sm:w-auto
    border-lightYellow bg-lightYellow text-white
    font-helvetica-neue-bold tracking-[-0.05em]
    text-base sm:text-lg
    px-6 py-3 sm:px-5 sm:pt-2 sm:pb-1
    rounded-md
    hover:bg-green
    cursor-pointer
  "
                >
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
