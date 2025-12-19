import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";
import '../home/slick.css';

const Process = () => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
    return (
      <>
        <section className="bg-green overflow-visible pt-20">
          <div className="container relative p-0 overflow-visible">
            <div className="text-wrapper mb-15">
              <h2 className="text-white font-arial font-normal leading-[80px] text-85 tracking-[-0.05em]">
                A Streamlined Process
              </h2>
              <p className="text-white font-helvetica-neue-bold text-4xl tracking-[-0.02em] mt-4">
                ADUs made easy. All you have to do is say{" "}
                <span className="text-marigold">go.</span>
              </p>
            </div>
            <div className="flex flex-row gap-0">
              <div className="basis-1/3 text-white">
                <p className="pb-1 border-b-2 border-marigold text-khaki text-2xl font-helvetica-neue-bold tracking-[-0.02em]">
                  Step 1
                </p>
                <div className="max-w-3xs">
                  <h3 className="my-5 text-4xl font-helvetica-neue-bold tracking-[-0.02em]">
                    Envision It
                  </h3>
                  <p className="text-lg">
                    Explore layouts, browse finishes, and picture the perfect
                    ADU in your backyard. We help you clarify your goals so you
                    start with confidence.
                  </p>
                  <div className="btn-wrapper mt-10">
                    <button className="border-lightYellow text-white tracking-[-0.05em] bg-lightYellow md:text-lg font-helvetica-neue-bold pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
                      Start Designing
                    </button>
                  </div>
                </div>
              </div>
              <div className="basis-1/3 text-white">
                <p className="pb-1 border-b-2 border-marigold text-khaki text-2xl font-helvetica-neue-bold tracking-[-0.02em]">
                  Step 2
                </p>
                <div className="max-w-3xs">
                  <h3 className="my-5 text-4xl font-helvetica-neue-bold tracking-[-0.02em]">
                    Plan It
                  </h3>
                  <p className="text-lg">
                    Jump on a quick call with our team to review your vision,
                    budget, and timeline. We’ll answer questions, refine the
                    details, and make sure the plan fits your property.
                  </p>
                </div>
              </div>
              <div className="basis-1/3 text-white">
                <p className="pb-1 border-b-2 border-marigold text-khaki text-2xl font-helvetica-neue-bold tracking-[-0.02em]">
                  Step 3
                </p>
                <div className="max-w-3xs">
                  <h3 className="my-5 text-4xl font-helvetica-neue-bold tracking-[-0.02em]">
                    Approve It
                  </h3>
                  <p className="text-lg">
                    We handle the plans, engineering, and permits, keeping your
                    project compliant and moving forward. All you have to do is
                    review and sign off.
                  </p>
                  <p className="mt-5 font-bold">Then we take it from there.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-0 mt-10 h-[420px] relative overflow-visible">
              <div className="basis-1/2 pl-15 text-white">
                <p className="pb-1 border-b-2 border-marigold text-khaki text-2xl font-helvetica-neue-bold tracking-[-0.02em]">
                  Step 4
                </p>
                <div className="w-full">
                  <h3 className="my-5 text-4xl font-helvetica-neue-bold tracking-[-0.02em]">
                    Ship It
                  </h3>
                  <p className="text-lg">
                    Once your ADU is complete, we transport it straight to your
                    property and handle the on-site installation.
                  </p>
                  <p className="text-lg mt-8">
                    Your new space arrives ready to connect, place, and enjoy.
                  </p>
                  <p className="text-lg font-bold mt-12">
                    No stress. No surprises.
                  </p>
                </div>
              </div>
              <div className="absolute left-[-85px] max-w-4xl top-5 z-50 pointer-events-none overflow-visible">
                <LazyLoadImage
                  src="/image/homepage/step-img.png"
                  alt="Hero image"
                  className="block h-auto max-w-none w-full relative z-50"
                  wrapperClassName="relative z-50"
                  effect="opacity"
                  threshold={100}
                />
              </div>
            </div>
            <div className="absolute top-[-100px] right-[25%]">
              <LazyLoadImage
                src="/image/homepage/Group 96.png"
                alt={"banner"}
                className={``}
                wrapperClassName=""
                effect="opacity"
              />
            </div>
          </div>
        </section>
        <section className="beauty pt-30">
          <div className="container p-0">
            <div className="text-wrap">
              <h2 className="text-green font-arial font-normal leading-[80px] text-85 tracking-[-0.05em]">
                Beauty Inside & Out
              </h2>
              <p className="text-lg text-green mt-5">
                Every detail of our interiors is intentionally crafted to feel
                good the moment you step inside. Thoughtful layouts, smart
                storage, and elevated finishes come together to create a space
                that’s comfortable, functional, and effortlessly stylish.
              </p>
            </div>
            <div className="slider-wrap relative overflow-visible px-16 my-10">
              <Slider {...settings}>
                <div className="px-[10px]">
                  <div className="h-[300px] w-full">
                    <LazyLoadImage
                      src="/image/homepage/slide1.png"
                      alt="Hero image"
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                    />
                  </div>
                </div>
                <div className="px-[10px]">
                  <div className="h-[300px] w-full">
                    <LazyLoadImage
                      src="/image/homepage/slide2.png"
                      alt="Hero image"
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                    />
                  </div>
                </div>
                <div className="px-[10px]">
                  <div className="h-[300px] w-full">
                    <LazyLoadImage
                      src="/image/homepage/slide3.png"
                      alt="Hero image"
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                    />
                  </div>
                </div>
                <div className="px-[10px]">
                  <div className="h-[300px] w-full">
                    <LazyLoadImage
                      src="/image/homepage/slide1.png"
                      alt="Hero image"
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                    />
                  </div>
                </div>
                <div className="px-[10px]">
                  <div className="h-[300px] w-full">
                    <LazyLoadImage
                      src="/image/homepage/slide2.png"
                      alt="Hero image"
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                    />
                  </div>
                </div>
              </Slider>
            </div>
            <div className="btn-wrapper text-center">
              <button className="border-lightYellow text-white tracking-[-0.05em] bg-lightYellow md:text-lg font-helvetica-neue-bold pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
                Download Product Catalog
              </button>
            </div>
          </div>
        </section>
      </>
    );
}

export default Process;