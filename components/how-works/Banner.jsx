import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner = () => {
  return (
    <section className="relative lg:h-[600px] h-auto">
      <div className="container p-0">
        <div className="flex flex-row-reverse">
          {/* Text wrapper */}
          <div className="w-full lg:basis-1/2">
            <div
              className="
                flex flex-col items-center justify-center text-center
                px-5 h-full
                lg:block lg:text-left lg:px-0 lg:pl-15 lg:mt-40
              "
            >
              <h1 className="font-arial font-normal tracking-[-0.05em]
                text-green
                text-4xl sm:text-5xl md:text-6xl
                lg:text-85 lg:leading-[80px]">
                How it Works
              </h1>

              <p className="text-marigold font-helvetica-neue-bold tracking-[-0.02em]
                text-xl sm:text-2xl md:text-3xl lg:text-3xl">
                The Build Process
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image: hidden on mobile + tablet, unchanged on desktop */}
      <div className="hidden lg:block absolute top-0 left-0">
        <LazyLoadImage
          src="/image/how-works/banner.png"
          alt="Hero image"
          className="h-full mx-auto"
          wrapperClassName="h-full w-full text-center"
          effect="opacity"
          threshold={100}
        />
      </div>
    </section>
  );
};

export default Banner;
