import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner = () => {
  return (
    <section className="relative lg:h-[600px] h-auto">
      <div className="container p-0">
        <div className="flex flex-row">
          {/* Text wrapper */}
          <div className="w-full lg:basis-1/2">
            <div
              className="
                flex flex-col items-center justify-center text-center
                px-5 h-full
                lg:block lg:text-left lg:mt-40
              "
            >
              <h1
                className="font-arial font-base tracking-[-0.05em]
                text-green
                text-85 sm:text-5xl md:text-6xl
                lg:text-85 lg:leading-[80px]"
              >
                ADU Models <br />
                Gallery
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Image: hidden on mobile + tablet, unchanged on desktop */}
      <div className="hidden lg:block absolute top-0 right-0">
        <LazyLoadImage
          src="/image/gallery/banner.png"
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
