import { LazyLoadImage } from "react-lazy-load-image-component";

const Cta = () => {
  return (
    <>
      <section className="cta bg-khaki relative overflow-visible">
        <div className="container p-0">
          <div className="flex flex-row">
            <div className="basis-2/3">
              <div className="intro-wrap">
                <h2 className="text-green font-helvetica-neue-bold text-4xl tracking-[-2%]">
                  Don’t worry... We have financing options too.
                </h2>
                <p className="text-green mt-5">
                  With loan amounts of up to $300,000, we’ll help you find a
                  financing option that works to get you your dream ADU without
                  stress.
                </p>
                <p className="text-green font-bold my-5">
                  See how much you qualify for using our financing calculator
                </p>
                <div className="btn-wrapper">
                  <button className="border-lightYellow text-white tracking-[-5%] bg-lightYellow md:text-lg font-helvetica-neue-bold pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
                    Get an Estimate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[-175px] right-0">
          <LazyLoadImage
            src="/image/homepage/cta.png"
            alt={"Cta"}
            className={`h-full mx-auto`}
            wrapperClassName="h-full max-w-3xl text-center"
            effect="opacity"
            threshold={100}
          />
        </div>
      </section>
      <section className="beauty pt-30">
          <div className="container p-0">
            <div className="text-wrap text-center">
              <h2 className="text-green mb-5 font-arial font-normal leading-[80px] text-85 tracking-[-5%]">
                Customized to Your Life
              </h2>
              <h3 className="text-4xl text-green font-helvetica-neue-bold tracking-[-2%]">Choose the finishes you love and make the layout work for you.</h3>
              <p className="text-green my-5">
                Create a space that feels both intentional and unmistakably yours.
              </p>
              <p className="text-green mt-5">
                Talk to a representative to talk about how you can add an ADU Container to your life.
              </p>
            </div>
            <div className="slider-wrap relative overflow-visible px-16 my-10">
              
            </div>
            <div className="btn-wrapper text-center">
              <button className="border-dark-teal text-white tracking-[-5%] bg-dark-teal md:text-lg font-helvetica-neue-bold pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
    </>
  );
};

export default Cta;
