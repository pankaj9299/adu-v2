// import { LazyLoadImage } from "react-lazy-load-image-component";

// const BannerSecondLevel = () => {
//   return (
//     <section className="banner h-[800px] relative pb-0">
//       <div className="container p-0">
//         <div className="main-wrappper max-w-3xl items-center gap-5">
//           <div className="content-wrap  md:w-full ">
//             <h1 className="text-85 font-arial font-normal text-dark-green my-7 tracking-[-0.05em]">
//               Light Into Endless Possibilities
//             </h1>
//             <h2 className="text-4xl font-normal inline-block  text-marigold mb-5 font-helvetica-neue-bold">
//               Redefining the Equilibrium of Housing
//             </h2>
//             <p className="text-lg text-green font-Arial max-w-lg">
//               More customization than ordinary prefab, more efficiency than
//               traditional stick-build construction.
//             </p>
//             <div className="button-wrap mt-7 ">
//               <button className="border-dark-teal text-white tracking-[-0.05em] bg-dark-teal md:text-lg font-helvetica-neue-bold  pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
//                 Get in Touch
//               </button>
//             </div>
//             <div className="mt-20">
//               <LazyLoadImage
//                 src="/image/homepage/Group 96.png"
//                 alt={"banner"}
//                 className={``}
//                 wrapperClassName=""
//                 effect="opacity"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="img-wrapper absolute right-0 top-0">
//         <LazyLoadImage
//           src="/image/homepage/banner.png"
//           alt={"banner"}
//           className={``}
//           wrapperClassName=""
//           effect="opacity"
//         />
//       </div>
//     </section>
//   );
// };
// export default BannerSecondLevel;

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const BannerSecondLevel = () => {
  return (
    <section className="relative pb-16 pt-20 lg:pt-0 min-h-[600px] lg:min-h-screen overflow-hidden">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="max-w-3xl flex flex-col justify-center">
          <div className="content-wrap w-full md:pt-15">
            {/* Heading */}
            <h1
              className="font-arial font-normal text-dark-green my-6 tracking-[-0.05em]
              text-4xl sm:text-5xl md:text-6xl lg:text-[85px]"
            >
              Light Into Endless Possibilities
            </h1>

            <h2
              className="font-helvetica-neue-bold font-normal text-marigold mb-4
              text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            >
              Redefining the Equilibrium of Housing
            </h2>

            <p className="text-green font-Arial text-base sm:text-lg max-w-lg mt-8">
              More customization than ordinary prefab, more efficiency than
              traditional stick-build construction.
            </p>

            {/* CTA */}
            <div className="mt-12">
              <Link
                className="bg-dark-teal text-white tracking-[-0.02em]
                font-helvetica-neue-bold px-17 pt-[15px] pb-[12px] md:text-lg
                hover:bg-green transition-colors"
                to="/contact-us"
              >
                Get in Touch
              </Link>
            </div>

            {/* Decorative image */}
            <div className="mt-12 sm:mt-16 max-w-xs">
              <LazyLoadImage
                src="/image/homepage/Group 96.png"
                alt="decorative graphic"
                className="w-full h-auto"
                effect="opacity"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right image – desktop only */}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2">
        <LazyLoadImage
          src="/image/homepage/banner.png"
          alt="banner"
          className="h-full w-full object-cover"
          effect="opacity"
        />
      </div>
    </section>
  );
};

export default BannerSecondLevel;
