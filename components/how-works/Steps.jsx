// import { LazyLoadImage } from "react-lazy-load-image-component";

// const Steps = () => {
//   return (
//     <section className="pb-0 -mb-px">
//       <div className="container">
//         <div className="relative">
//           {/* Tall vertical line */}
//           <div className="absolute h-[102%] left-10 top-[35px] bottom-[19px] w-[2px] bg-khaki" />

//           {/* Steps */}
//           <div className="flex flex-col gap-6 pl-16">
//             <div className="relative flex items-center z-0">
//               {/* Small connector line */}
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" />

//               <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white border border-khaki font-semibold">
//                 <LazyLoadImage
//                   src="/image/how-works/01.png"
//                   alt={"banner"}
//                   className={`h-full`}
//                   wrapperClassName="h-full"
//                   effect="opacity"
//                 />
//               </div>
//               <p className="ml-6 text-green text-5xl tracking-[-0.05em]">
//                 Envision It
//               </p>
//               <div className="absolute right-0 top-0 z-10">
//                 <LazyLoadImage
//                   src="/image/how-works/sidebar.png"
//                   alt={"banner"}
//                   className={`h-full`}
//                   wrapperClassName="h-full"
//                   effect="opacity"
//                 />
//               </div>
//             </div>
//             <div className="text-wrap flex flex-row">
//               <div className="basis-1/3">
//                 <h3 className="text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
//                   Design Your ADU Your Way
//                 </h3>
//                 <p className="text-green mt-4 mb-7">
//                   Start by imagining how you want to use your ADU, and what you
//                   want it to feel like.
//                 </p>
//                 <p className="text-green mb-7">
//                   Choose your layout, finishes, and design details to match your
//                   lifestyle.
//                 </p>
//                 <div className="btn-wrapper">
//                   <button className="border-marigold text-white tracking-[-0.02em] bg-marigold md:text-lg font-helvetica-neue-bold pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
//                     Let’s Get Started
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="relative flex items-center">
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" />
//               <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white border border-khaki font-semibold">
//                 <LazyLoadImage
//                   src="/image/how-works/02.png"
//                   alt={"banner"}
//                   className={`h-full`}
//                   wrapperClassName="h-full"
//                   effect="opacity"
//                 />
//               </div>
//               <p className="ml-6 text-green text-5xl tracking-[-0.05em]">
//                 Plan It
//               </p>
//             </div>
//             <div className="text-wrap flex flex-row">
//               <div className="basis-1/3">
//                 <h3 className="text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
//                   Site Assessment
//                 </h3>
//                 <p className="text-green mt-4 mb-7">
//                   A Site Assessment gathers historical data, title report and
//                   other readily available public information, satellite photos,
//                   regarding site conditions and surroundings to evaluate your
//                   properties readiness for an ADU.
//                 </p>
//               </div>
//             </div>
//             <div className="inner-wrapper">
//               <p className="text-green mb-7">
//                 To get an accurate, finalized cost, a surveyor will visit your
//                 property to take detailed measurements to provide our Site Plan
//                 Designers with the required information to create a final
//                 proposal for your ADU project. Download sample Site Assessment
//                 Report.
//               </p>
//               <div className="btn-wrapper">
//                 <button className="border-marigold text-white tracking-[-0.02em] bg-marigold md:text-lg font-helvetica-neue-bold pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
//                   Order a Site Assessment | $495
//                 </button>
//               </div>
//               <p className="text-green mt-3">Delivery in 2 – 3 weeks.</p>
//             </div>

//             <div className="relative flex items-center">
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" />
//               <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white border border-khaki font-semibold">
//                 <LazyLoadImage
//                   src="/image/how-works/03.png"
//                   alt={"banner"}
//                   className={`h-full`}
//                   wrapperClassName="h-full"
//                   effect="opacity"
//                 />
//               </div>
//               <p className="ml-6 text-green text-5xl tracking-[-0.05em]">
//                 Approve It
//               </p>
//             </div>
//             <div className="text-wrap flex gap-5 justify-center">
//               <div className="flex-[2]">
//                 <LazyLoadImage
//                   src="/image/how-works/approve.png"
//                   alt={"banner"}
//                   className={`h-full w-full`}
//                   wrapperClassName="h-full w-full"
//                   effect="opacity"
//                 />
//               </div>
//               <div className="flex-[3]">
//                 <h3 className="text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
//                   Permitting Your ADU-Container
//                 </h3>
//                 <p className="text-green mt-4 mb-7">
//                   After your Site Assessment is complete, we’ll transform it
//                   into the drafts and engineer-approved drawings required for
//                   the permitting process. This step includes engineering
//                   analysis & stamp, Title 24 energy analysis & certification,
//                   plans and solar if required.
//                 </p>
//                 <p className="text-green">
//                   Once the detailed and engineered set of drawings is created,
//                   the city/county permitting process begins.
//                 </p>
//               </div>
//             </div>
//             <div className="inner-text-wrap">
//               <h3 className="text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
//                 How much does an ADU permit cost in California?
//               </h3>
//               <p className="text-green mt-4">
//                 Each city is different, and many have specific requirements for
//                 drawings, details, and engineering that differ from city to city
//                 and county to county. Depending on your location, you may need
//                 both zoning and building permits.
//               </p>
//             </div>

//             <div className="relative flex items-center">
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" />
//               <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white border border-khaki font-semibold">
//                 <LazyLoadImage
//                   src="/image/how-works/04.png"
//                   alt={"banner"}
//                   className={`h-full`}
//                   wrapperClassName="h-full"
//                   effect="opacity"
//                 />
//               </div>
//               <p className="ml-6 text-green text-5xl tracking-[-0.05em]">
//                 Ship It
//               </p>
//             </div>
//             <div className="text-wrap flex gap-5 justify-center">
//               <div className="flex-[2]">
//                 <LazyLoadImage
//                   src="/image/how-works/approve.png"
//                   alt={"banner"}
//                   className={`h-full w-full`}
//                   wrapperClassName="h-full w-full"
//                   effect="opacity"
//                 />
//               </div>
//               <div className="flex-[3]">
//                 <h3 className="text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
//                   Permitting Your ADU-Container
//                 </h3>
//                 <p className="text-green mt-4 mb-7">
//                   After your Site Assessment is complete, we’ll transform it
//                   into the drafts and engineer-approved drawings required for
//                   the permitting process. This step includes engineering
//                   analysis & stamp, Title 24 energy analysis & certification,
//                   plans and solar if required.
//                 </p>
//                 <p className="text-green">
//                   Once the detailed and engineered set of drawings is created,
//                   the city/county permitting process begins.
//                 </p>
//               </div>
//             </div>

//             <div className="relative flex items-center top-[108px]">
//               <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" />
//               <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white border border-khaki font-semibold">
//                 <LazyLoadImage
//                   src="/image/how-works/05.png"
//                   alt={"banner"}
//                   className={`h-full`}
//                   wrapperClassName="h-full"
//                   effect="opacity"
//                 />
//               </div>
//               <p className="ml-6 text-white bg-marigold text-5xl tracking-[-0.05em] px-5 py-0">
//                 Enjoy It
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-image overflow-hidden leading-0">
//         <LazyLoadImage
//           src="/image/how-works/buulding.png"
//           alt="banner"
//           className="block w-full"
//           wrapperClassName="block w-full"
//           effect="opacity"
//         />
//       </div>
//     </section>
//   );
// };

// export default Steps;

import { LazyLoadImage } from "react-lazy-load-image-component";

const Steps = () => {
  return (
    <section className="pb-0 -mb-px">
      <div className="container">
        <div className="relative">
          {/* Timeline vertical line (desktop only) */}
          {/* <div className="hidden lg:block absolute h-[102%] left-10 top-[35px] bottom-[19px] w-[2px] bg-khaki" /> */}

          {/* Steps */}
          <div className="flex flex-col gap-10 pl-6 sm:pl-10 lg:pl-16">
            {/* STEP 1 HEADER */}
            <div className="relative flex items-center z-0">
              {/* connector line (desktop only) */}
              {/* <span className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" /> */}

              <div className="flex h-[44px] w-[44px] sm:h-[54px] sm:w-[54px] items-center justify-center rounded-full bg-white border border-khaki font-semibold shrink-0">
                <LazyLoadImage
                  src="/image/how-works/01.png"
                  alt="Step 1"
                  className="h-full"
                  wrapperClassName="h-full"
                  effect="opacity"
                />
              </div>

              <p className="ml-4 sm:ml-6 text-green tracking-[-0.05em] text-2xl sm:text-3xl lg:text-5xl">
                Envision It
              </p>

              {/* Sidebar image (keep on desktop, hide on mobile/tablet) */}
              <div className="hidden lg:block absolute right-0 top-0 z-10">
                <LazyLoadImage
                  src="/image/how-works/sidebar.png"
                  alt="Sidebar"
                  className="h-full"
                  wrapperClassName="h-full"
                  effect="opacity"
                />
              </div>
            </div>

            {/* STEP 1 BODY */}
            <div className="text-wrap">
              <div className="w-full lg:w-1/3">
                <h3 className="text-xl sm:text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
                  Design Your ADU Your Way
                </h3>
                <p className="text-green mt-4 mb-6 sm:mb-7">
                  Start by imagining how you want to use your ADU, and what you
                  want it to feel like.
                </p>
                <p className="text-green mb-6 sm:mb-7">
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

            {/* STEP 2 HEADER */}
            <div className="relative flex items-center">
              {/* <span className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" /> */}
              <div className="flex h-[44px] w-[44px] sm:h-[54px] sm:w-[54px] items-center justify-center rounded-full bg-white border border-khaki font-semibold shrink-0">
                <LazyLoadImage
                  src="/image/how-works/02.png"
                  alt="Step 2"
                  className="h-full"
                  wrapperClassName="h-full"
                  effect="opacity"
                />
              </div>
              <p className="ml-4 sm:ml-6 text-green text-2xl sm:text-3xl lg:text-5xl tracking-[-0.05em]">
                Plan It
              </p>
            </div>

            {/* STEP 2 BODY */}
            <div className="text-wrap">
              <div className="w-full lg:w-1/3">
                <h3 className="text-xl sm:text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
                  Site Assessment
                </h3>
                <p className="text-green mt-4 mb-6 sm:mb-7">
                  A Site Assessment gathers historical data, title report and
                  other readily available public information, satellite photos,
                  regarding site conditions and surroundings to evaluate your
                  properties readiness for an ADU.
                </p>
              </div>
            </div>

            <div className="inner-wrapper w-full lg:w-2/3">
              <p className="text-green mb-6 sm:mb-7">
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

            {/* STEP 3 HEADER */}
            <div className="relative flex items-center">
              {/* <span className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" /> */}
              <div className="flex h-[44px] w-[44px] sm:h-[54px] sm:w-[54px] items-center justify-center rounded-full bg-white border border-khaki font-semibold shrink-0">
                <LazyLoadImage
                  src="/image/how-works/03.png"
                  alt="Step 3"
                  className="h-full"
                  wrapperClassName="h-full"
                  effect="opacity"
                />
              </div>
              <p className="ml-4 sm:ml-6 text-green text-2xl sm:text-3xl lg:text-5xl tracking-[-0.05em]">
                Approve It
              </p>
            </div>

            {/* STEP 3 BODY (image + text responsive) */}
            <div className="text-wrap flex flex-col lg:flex-row gap-6 lg:gap-5 lg:justify-center">
              <div className="w-full lg:flex-[2]">
                <LazyLoadImage
                  src="/image/how-works/approve.png"
                  alt="Approve"
                  className="w-full h-auto"
                  wrapperClassName="w-full"
                  effect="opacity"
                />
              </div>
              <div className="w-full lg:flex-[3]">
                <h3 className="text-xl sm:text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
                  Permitting Your ADU-Container
                </h3>
                <p className="text-green mt-4 mb-6 sm:mb-7">
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
          </div>
        </div>
      </div>

      {/* Green BG */}
      <div className="bg-green overflow-hidden leading-none text-[0] flex items-center my-10">
        <div className="container">
          <div className="inner-text-wrap w-full py-12 lg:w-2/3 pl-6 sm:pl-10 lg:pl-16">
            <h3 className="text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
              How much does an ADU permit cost in California?
            </h3>
            <p className="text-white text-base mt-4">
              Each city is different, and many have specific requirements for
              drawings, details, and engineering that differ from city to city
              and county to county. Depending on your location, you may need
              both zoning and building permits.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col gap-10 pl-6 sm:pl-10 lg:pl-16">
          {/* STEP 4 HEADER */}
          <div className="relative flex items-center">
            {/* <span className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" /> */}
            <div className="flex h-[44px] w-[44px] sm:h-[54px] sm:w-[54px] items-center justify-center rounded-full bg-white border border-khaki font-semibold shrink-0">
              <LazyLoadImage
                src="/image/how-works/04.png"
                alt="Step 4"
                className="h-full"
                wrapperClassName="h-full"
                effect="opacity"
              />
            </div>
            <p className="ml-4 sm:ml-6 text-green text-2xl sm:text-3xl lg:text-5xl tracking-[-0.05em]">
              Ship It
            </p>

            {/* Sidebar image (keep on desktop, hide on mobile/tablet) */}
            <div className="hidden lg:block absolute right-0 top-0 z-10">
              <LazyLoadImage
                src="/image/how-works/ship.png"
                alt="Sidebar"
                className="h-full"
                wrapperClassName="h-full"
                effect="opacity"
              />
            </div>
          </div>

          {/* STEP 4 BODY (same pattern as step 3) */}
          <div className="text-wrap">
            <div className="w-full lg:w-1/2">
              <h3 className="text-xl sm:text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
                Site Preparation
              </h3>
              <p className="text-green mt-2 mb-6 sm:mb-7">
                With permits approved, we can start preparing your property for
                the ADU-Container(s) to arrive.
              </p>
              <p className="text-green mb-6 sm:mb-7">
                Site preparation begins with preparing the property for the
                trench foundation. This often includes grading the land and as
                well as any utility work.
              </p>
              <p className="text-green mb-6 sm:mb-7">
                *The cost of the sitework may increase depending on what the
                soil looks like below the surface (rocks, piping, wiring, etc.).
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-6 items-start lg:flex-row lg:gap-10 lg:items-center">
              <div className="">
                <LazyLoadImage
                  src="/image/how-works/cutout.png"
                  alt="Sidebar"
                  className="h-full"
                  wrapperClassName="h-full"
                  effect="opacity"
                />
              </div>
              <div className="">
                <h3 className="text-xl sm:text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
                  Site Preparation
                </h3>
                <p className="text-green mt-2 mb-6 sm:mb-7">
                  With permits approved, we can start preparing your property
                  for the ADU-Container(s) to arrive.
                </p>
              </div>
            </div>
          </div>

          {/* STEP 5 HEADER */}
          <div className="relative flex items-center lg:top-[108px]">
            {/* <span className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" /> */}
            <div className="flex h-[44px] w-[44px] sm:h-[54px] sm:w-[54px] items-center justify-center rounded-full bg-white border border-khaki font-semibold shrink-0">
              <LazyLoadImage
                src="/image/how-works/05.png"
                alt="Step 5"
                className="h-full"
                wrapperClassName="h-full"
                effect="opacity"
              />
            </div>
            <p className="ml-4 sm:ml-6 text-white bg-marigold tracking-[-0.05em] px-4 sm:px-5 text-2xl sm:text-3xl lg:text-5xl">
              Enjoy It
            </p>
          </div>
        </div>
      </div>

      {/* Bottom full-width image */}
      <div className="bg-image overflow-hidden leading-none text-[0]">
        <LazyLoadImage
          src="/image/how-works/buulding.png"
          alt="banner"
          className="block w-full h-auto"
          wrapperClassName="block w-full"
          effect="opacity"
        />
      </div>
    </section>
  );
};

export default Steps;
