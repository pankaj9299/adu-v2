import { LazyLoadImage } from "react-lazy-load-image-component";

const Resources = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="grid grid-cols-12 gap-8 items-stretch">
          <div className="col-span-12 md:col-span-4">
            <div className="h-full w-full flex items-center justify-center">
              <LazyLoadImage
                src="/image/financing/lady.jpg"
                alt="Meredith Munger"
                className="max-w-full h-auto"
                wrapperClassName="w-full text-center"
                effect="opacity"
                threshold={100}
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
            <h2 className="font-arial text-4xl md:text-7xl text-green leading-tight tracking-[-0.05em]">
              Backed by a Seasoned ADU Loan Professional
            </h2>
            <p className="text-xl md:text-2xl font-bold text-green tracking-[-0.02em] mt-5">
              Meredith Munger
            </p>
            <p className="text-xl md:text-2xl text-green tracking-[-0.02em]">
              The ADU Lender NMLS 2126086
            </p>

            <p className="text-xl md:text-xl font-normal text-green tracking-[-0.02em] mt-10">
              Meredith Munger helps people achieve their housing goals. She is a loan officer at CrossCountry Mortgage and ADUloans.net with a focus on helping families, buy, build, renovate and refinance property, notably Accessory Dwelling Units, (ADUs). She operates ADUloans.net and serves as a founding member of the ADU Coalition and Casita Coalition, advocating for attainable housing all throughout California.
            </p>
          </div>
        </div>

        {/* Resources */}
        <div className="mt-10">
          <h2 className="font-arial text-4xl md:text-[85px] text-green tracking-[-0.05em] mb-8 leading-tight">
            Financing Resources
          </h2>

          <div className="grid grid-cols-12 gap-5 items-stretch">
            {/* Card 1 */}
            <div className="col-span-12 md:col-span-4">
              <div className="h-full flex flex-col overflow-hidden rounded-lg">
                <div className="text-[0px]">
                  <LazyLoadImage
                    src="/image/financing/resource_1.png"
                    alt="HELOC Strategy for Building ADUs"
                    className="w-full h-auto"
                    wrapperClassName="w-full"
                    effect="opacity"
                    threshold={100}
                  />
                </div>

                <div className="bg-khaki p-8 flex flex-col flex-1">
                  <h3 className="text-dark-green text-3xl font-helvetica-neue-bold tracking-[-0.02em]">
                    HELOC Strategy for Building ADUs
                  </h3>

                  <p className="mt-4 mb-7 text-dark-green/90">
                    When building an ADU, your HELOC Strategy is important to saving
                    thousands while keeping your payment reasonable.
                  </p>

                  <p className="mt-auto">
                    <a className="underline italic font-bold text-thinGray" href="#">
                      Watch Now
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-span-12 md:col-span-4">
              <div className="h-full flex flex-col overflow-hidden rounded-lg">
                <div className="text-[0px]">
                  <LazyLoadImage
                    src="/image/financing/resource_2.png"
                    alt="Why Interest Rates Are NOT as Important as You Think"
                    className="w-full h-auto"
                    wrapperClassName="w-full"
                    effect="opacity"
                    threshold={100}
                  />
                </div>

                <div className="bg-khaki p-8 flex flex-col flex-1">
                  <h3 className="text-dark-green text-3xl font-helvetica-neue-bold tracking-[-0.02em]">
                    Why Interest Rates Are NOT as Important as You Think
                  </h3>

                  <p className="mt-4 mb-7 text-dark-green/90">
                    The length of the loan, loan type, buy-downs and interest-only
                    features are several other factors...
                  </p>

                  <p className="mt-auto">
                    <a className="underline italic font-bold text-thinGray" href="#">
                      Watch Now
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-span-12 md:col-span-4">
              <div className="h-full flex flex-col overflow-hidden rounded-lg">
                <div className="text-[0px]">
                  <LazyLoadImage
                    src="/image/financing/resource_3.png"
                    alt="First Step to Build an ADU: What's Your Budget?"
                    className="w-full h-auto"
                    wrapperClassName="w-full"
                    effect="opacity"
                    threshold={100}
                  />
                </div>

                <div className="bg-khaki p-8 flex flex-col flex-1">
                  <h3 className="text-dark-green text-3xl font-helvetica-neue-bold tracking-[-0.02em]">
                    First Step to Build an ADU: What&apos;s Your Budget?
                  </h3>

                  <p className="mt-4 mb-7 text-dark-green/90">
                    There&apos;s a reason why ADU pros typically send their client to us first:
                    They need to know what budget they are designing to...
                  </p>

                  <p className="mt-auto">
                    <a className="underline italic font-bold text-thinGray" href="#">
                      Watch Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
