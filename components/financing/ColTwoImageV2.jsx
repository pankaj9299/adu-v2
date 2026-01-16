import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const ColTwoImageV2 = () => {
  return (
    <section className="py-0">
      <div className="grid grid-cols-1 xl:grid-cols-12 bg-dark-green">
        {/* Image */}
        <div className="xl:col-span-5 h-[260px] sm:h-[320px] md:h-[420px] xl:h-auto">
          <LazyLoadImage
            src="/image/financing/v2image.png"
            alt="Hero image"
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full text-center"
            effect="opacity"
            threshold={100}
          />
        </div>

        {/* Text */}
        <div className="xl:col-span-7 self-center p-4 md:p-8 xl:p-[60px_30px_60px_30px]">
          <h3 className="text-white font-arial text-3xl sm:text-4xl md:text-5xl xl:text-7xl leading-tight xl:leading-[60px] tracking-[-0.05em]">
            How Our Financing Works
          </h3>
          <div className="mt-10">
            <h4 className="text-3xl text-lightYellow font-helvetica-neue-bold font-bold tracking-[-0.02em] mb-2">Get a Quote</h4>
            <p className="text-white text-xl">Start by receiving a clear, upfront estimate for your ADU container home so you know what to plan for.</p>
          </div>
          <div className="my-5">
            <h4 className="text-3xl text-lightYellow font-helvetica-neue-bold font-bold tracking-[-0.02em] mb-2">Talk to a Lender</h4>
            <p className="text-white text-xl">You’ll connect with a trusted lending partner who reviews your financial picture (home equity, income, and goals) to understand what options may work for you.</p>
          </div>
          <div className="mb-10">
            <h4 className="text-3xl text-lightYellow font-helvetica-neue-bold font-bold tracking-[-0.02em] mb-2">Explore Your Options</h4>
            <p className="text-white text-xl">Based on that review, the lender recommends loan options tailored to your situation, explaining terms, timelines, and monthly payments in plain language.</p>
          </div>
          <div className="mb-10">
            <h4 className="text-3xl text-lightYellow font-helvetica-neue-bold font-bold tracking-[-0.02em] mb-2">Move Forward with Confidence</h4>
            <p className="text-white text-xl">Once financing is in place, you’re ready to move ahead with design, permits, and construction.</p>
          </div>
          <div className="btn-wrapper">
            <Link
              className="w-full md:w-auto border-lightYellow text-white tracking-[-0.02em] bg-lightYellow md:text-lg font-helvetica-neue-bold rounded-md px-8 pt-[13px] pb-[10px] px-5 hover:bg-green cursor-pointer"
              to="/contact-us"
            >
              Talk to a Lender
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColTwoImageV2;
