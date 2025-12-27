import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const ImageWithText = () => {
  return (
    <section className="px-0 py-12 md:py-16">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="w-full">
              <LazyLoadImage
                src="/image/homepage/stairs.png"
                alt="Hero image"
                className="w-full h-auto object-contain"
                wrapperClassName="w-full text-center"
                effect="opacity"
                threshold={100}
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2
              className="text-marigold mb-3 font-helvetica-neue-bold tracking-[-0.02em]
              text-3xl sm:text-4xl lg:text-4xl"
            >
              Why Shipping <br className="hidden sm:block" />
              Containers Work
            </h2>

            <p className="text-green text-base sm:text-lg">
              Shipping containers hit the sweet spot between custom and modular.
            </p>

            <p className="text-green text-base sm:text-lg my-4 sm:my-5">
              They’re affordable, fast, and flexible, giving you more for less
              without sacrificing design.
            </p>

            <p className="text-green text-base sm:text-lg">
              Container ADUs deliver beauty and function at a fraction of the
              cost. And because we focus on residential, not big commercial
              projects, you still get custom touches with modular efficiency.
            </p>

            <div className="mt-8 sm:mt-10">
              <Link
                className="bg-dark-teal text-white tracking-[-0.02em]
                font-helvetica-neue-bold px-17 pt-[15px] pb-[12px] md:text-lg
                hover:bg-green transition-colors"
                to="/contact-us"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageWithText;
