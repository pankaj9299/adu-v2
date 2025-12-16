import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageWithText = () => {
    return (
      <section className="px-0">
        <div className="container">
          <div className="flex flex-row gap-10">
            <div className="basis-1/2">
              <LazyLoadImage
                src="/image/homepage/stairs.png"
                alt={"Hero image"}
                className={`h-full mx-auto`}
                wrapperClassName="h-full w-full text-center"
                effect="opacity"
                threshold={100}
              />
            </div>
            <div className="basis-1/2 self-center">
              <h2 className="text-marigold mb-3 font-helvetica-neue-bold text-4xl tracking-[-2%]">
                Why Shipping <br />
                Containers Work
              </h2>
              <p className="text-green text-lg">
                Shipping containers hit the sweet spot between custom and
                modular.
              </p>
              <p className="text-green text-lg my-5">
                They’re affordable, fast, and flexible, giving you more for less
                without sacrificing design.
              </p>
              <p className="text-green text-lg">
                Container ADUs deliver beauty and function at a fraction of the
                cost. And because we focus on residential, not big commercial
                projects, you still get custom touches with modular efficiency.
              </p>
              <div className="mt-10">
                <button className="border-dark-teal text-white tracking-[-5%] bg-dark-teal md:text-lg font-helvetica-neue-bold pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ImageWithText;