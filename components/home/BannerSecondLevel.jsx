import { LazyLoadImage } from "react-lazy-load-image-component";

const BannerSecondLevel = () => {
  return (
    <section className="banner h-[800px] relative">
      <div className="container p-0">
        <div className="main-wrappper max-w-3xl items-center gap-5">
          <div className="content-wrap  md:w-full ">
            <h1 className="text-85 font-arial font-normal text-dark-green my-7 tracking-[-5%]">
              Light Into Endless Possibilities
            </h1>
            <h2 className="text-4xl font-normal inline-block  text-marigold mb-5 font-helvetica-neue-bold">
              Redefining the Equilibrium of Housing
            </h2>
            <p className="text-lg text-green font-Arial max-w-lg">
              More customization than ordinary prefab, more efficiency than
              traditional stick-build construction.
            </p>
            <div className="button-wrap mt-7 ">
              <button className="border-dark-teal text-white tracking-[-5%] bg-dark-teal md:text-lg font-helvetica-neue-bold  pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
                Get in Touch
              </button>
            </div>
            <div className="mt-20">
              <LazyLoadImage
                src="/image/homepage/Group 96.png"
                alt={"banner"}
                className={``}
                wrapperClassName=""
                effect="opacity"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="img-wrapper absolute right-0 top-0">
        <LazyLoadImage
          src="/image/homepage/banner.png"
          alt={"banner"}
          className={``}
          wrapperClassName=""
          effect="opacity"
        />
      </div>
    </section>
  );
};
export default BannerSecondLevel;
