import { LazyLoadImage } from "react-lazy-load-image-component";

const Steps = () => {
  return (
    <section>
      <div className="container">
        <div className="relative">
          {/* Tall vertical line */}
          <div className="absolute left-10 top-[21px] bottom-[21px] w-[2px] bg-khaki" />

          {/* Steps */}
          <div className="flex flex-col gap-6 pl-16">
            <div className="relative flex items-center z-0">
              {/* Small connector line */}
              <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" />

              <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white border border-khaki font-semibold">
                <LazyLoadImage
                  src="/image/how-works/01.png"
                  alt={"banner"}
                  className={`h-full`}
                  wrapperClassName="h-full"
                  effect="opacity"
                />
              </div>
              <p className="ml-6 text-green text-5xl tracking-[-0.05em]">Envision It</p>
              <div className="absolute right-0 z-10">
                <LazyLoadImage
                  src="/image/how-works/sidebar.png"
                  alt={"banner"}
                  className={`h-full`}
                  wrapperClassName="h-full"
                  effect="opacity"
                />
              </div>
            </div>
            <div className="text-wrap flex flex-row">
              <div className="basis-1/3">
                <h3 className="text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">Design Your ADU Your Way</h3>
                <p className="text-green mt-4 mb-7">
                  Start by imagining how you want to use your ADU, and what you
                  want it to feel like.
                </p>
                <p className="text-green mb-7">
                  Choose your layout, finishes, and design details to match your
                  lifestyle.
                </p>
                <div className="btn-wrapper">
                  <button className="border-marigold text-white tracking-[-2%] bg-marigold md:text-lg font-helvetica-neue-bold pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
                    Let’s Get Started
                  </button>
                </div>
              </div>
            </div>

            <div className="relative flex items-center">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" />
              <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white border border-khaki font-semibold">
                <LazyLoadImage
                  src="/image/how-works/02.png"
                  alt={"banner"}
                  className={`h-full`}
                  wrapperClassName="h-full"
                  effect="opacity"
                />
              </div>
              <p className="ml-6 text-green text-5xl tracking-[-0.05em]">Plan It</p>
            </div>

            <div className="relative flex items-center">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" />
              <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white border border-khaki font-semibold">
                <LazyLoadImage
                  src="/image/how-works/03.png"
                  alt={"banner"}
                  className={`h-full`}
                  wrapperClassName="h-full"
                  effect="opacity"
                />
              </div>
              <p className="ml-6 text-green text-5xl tracking-[-0.05em]">Approve It</p>
            </div>

            <div className="relative flex items-center">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" />
              <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white border border-khaki font-semibold">
                <LazyLoadImage
                  src="/image/how-works/04.png"
                  alt={"banner"}
                  className={`h-full`}
                  wrapperClassName="h-full"
                  effect="opacity"
                />
              </div>
              <p className="ml-6 text-green text-5xl tracking-[-0.05em]">Ship It</p>
            </div>

            <div className="relative flex items-center">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" />
              <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white border border-khaki font-semibold">
                <LazyLoadImage
                  src="/image/how-works/05.png"
                  alt={"banner"}
                  className={`h-full`}
                  wrapperClassName="h-full"
                  effect="opacity"
                />
              </div>
              <p className="ml-6 text-green text-5xl tracking-[-0.05em]">Enjoy It</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
