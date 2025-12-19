import { LazyLoadImage } from "react-lazy-load-image-component";

const Steps = () => {
  return (
    <section className="pb-0 -mb-px">
      <div className="container">
        <div className="relative">
          {/* Tall vertical line */}
          <div className="absolute h-[102%] left-10 top-[35px] bottom-[19px] w-[2px] bg-khaki" />

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
              <p className="ml-6 text-green text-5xl tracking-[-0.05em]">
                Envision It
              </p>
              <div className="absolute right-0 top-0 z-10">
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
                <h3 className="text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
                  Design Your ADU Your Way
                </h3>
                <p className="text-green mt-4 mb-7">
                  Start by imagining how you want to use your ADU, and what you
                  want it to feel like.
                </p>
                <p className="text-green mb-7">
                  Choose your layout, finishes, and design details to match your
                  lifestyle.
                </p>
                <div className="btn-wrapper">
                  <button className="border-marigold text-white tracking-[-0.02em] bg-marigold md:text-lg font-helvetica-neue-bold pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
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
              <p className="ml-6 text-green text-5xl tracking-[-0.05em]">
                Plan It
              </p>
            </div>
            <div className="text-wrap flex flex-row">
              <div className="basis-1/3">
                <h3 className="text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
                  Site Assessment
                </h3>
                <p className="text-green mt-4 mb-7">
                  A Site Assessment gathers historical data, title report and
                  other readily available public information, satellite photos,
                  regarding site conditions and surroundings to evaluate your
                  properties readiness for an ADU.
                </p>
              </div>
            </div>
            <div className="inner-wrapper">
              <p className="text-green mb-7">
                To get an accurate, finalized cost, a surveyor will visit your
                property to take detailed measurements to provide our Site Plan
                Designers with the required information to create a final
                proposal for your ADU project. Download sample Site Assessment
                Report.
              </p>
              <div className="btn-wrapper">
                <button className="border-marigold text-white tracking-[-0.02em] bg-marigold md:text-lg font-helvetica-neue-bold pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
                  Order a Site Assessment | $495
                </button>
              </div>
              <p className="text-green mt-3">Delivery in 2 – 3 weeks.</p>
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
              <p className="ml-6 text-green text-5xl tracking-[-0.05em]">
                Approve It
              </p>
            </div>
            <div className="text-wrap flex gap-5 justify-center">
              <div className="flex-[2]">
                <LazyLoadImage
                  src="/image/how-works/approve.png"
                  alt={"banner"}
                  className={`h-full w-full`}
                  wrapperClassName="h-full w-full"
                  effect="opacity"
                />
              </div>
              <div className="flex-[3]">
                <h3 className="text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
                  Permitting Your ADU-Container
                </h3>
                <p className="text-green mt-4 mb-7">
                  After your Site Assessment is complete, we’ll transform it
                  into the drafts and engineer-approved drawings required for
                  the permitting process. This step includes engineering
                  analysis & stamp, Title 24 energy analysis & certification,
                  plans and solar if required.
                </p>
                <p className="text-green">
                  Once the detailed and engineered set of drawings is created,
                  the city/county permitting process begins.
                </p>
              </div>
            </div>
            <div className="inner-text-wrap">
              <h3 className="text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
                How much does an ADU permit cost in California?
              </h3>
              <p className="text-green mt-4">
                Each city is different, and many have specific requirements for
                drawings, details, and engineering that differ from city to city
                and county to county. Depending on your location, you may need
                both zoning and building permits.
              </p>
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
              <p className="ml-6 text-green text-5xl tracking-[-0.05em]">
                Ship It
              </p>
            </div>
            <div className="text-wrap flex gap-5 justify-center">
              <div className="flex-[2]">
                <LazyLoadImage
                  src="/image/how-works/approve.png"
                  alt={"banner"}
                  className={`h-full w-full`}
                  wrapperClassName="h-full w-full"
                  effect="opacity"
                />
              </div>
              <div className="flex-[3]">
                <h3 className="text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
                  Permitting Your ADU-Container
                </h3>
                <p className="text-green mt-4 mb-7">
                  After your Site Assessment is complete, we’ll transform it
                  into the drafts and engineer-approved drawings required for
                  the permitting process. This step includes engineering
                  analysis & stamp, Title 24 energy analysis & certification,
                  plans and solar if required.
                </p>
                <p className="text-green">
                  Once the detailed and engineered set of drawings is created,
                  the city/county permitting process begins.
                </p>
              </div>
            </div>

            <div className="relative flex items-center top-[108px]">
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
              <p className="ml-6 text-white bg-marigold text-5xl tracking-[-0.05em] px-5 py-0">
                Enjoy It
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-image overflow-hidden leading-0">
        <LazyLoadImage
          src="/image/how-works/buulding.png"
          alt="banner"
          className="block w-full"
          wrapperClassName="block w-full"
          effect="opacity"
        />
      </div>
    </section>
  );
};

export default Steps;
