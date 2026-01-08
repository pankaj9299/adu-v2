import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="text-wrapper">
          <h1
            className="font-arial font-normal text-dark-green mb-3 tracking-[-0.05em]
              text-4xl sm:text-5xl md:text-6xl lg:text-[85px]"
          >
            About ADU-Container Co.
          </h1>
          <h2
            className="font-helvetica-neue-bold font-normal text-marigold mb-10
              text-xl sm:text-2xl md:text-3xl lg:text-3xl tracking-[-0.02em]"
          >
            The idea for ADU-Container Company comes from 13+ years of
            experience.
          </h2>
          <p>
            Drake Boroja, CEO of ADU-Container Company, began designing and
            building Container homes in the Michigan area over a decade ago,
            completing unique projects for homeowners, major retailers, and
            more.
          </p>
          <p className="my-8">
            Couple this with the changes to California laws to allow homeowners
            to build ADU’s on their property, it was an easy decision to come
            West and take the design concepts and Intellectual Property to the
            CA ADU market.
          </p>
          <p>
            We manufacture the Containers in Mexico. While your ADU-Container is
            being built, we work with your city to get the drawings approved and
            permits pulled, complete the site assessment, start the preparation
            for the foundation and trenching for the utility hookups. Doing all
            of this “in parallel” allows us to finish your ADU in a matter of
            months versus years with standard stick-built construction methods. 
          </p>
          <p className="mt-8">
            Our company is at the intersection of a custom ADU and prefabricated
            construction methods.
          </p>
        </div>
        <div className="video-wrapper my-10">
          <h4
            className="font-helvetica-neue-bold font-normal text-marigold mb-7
              text-xl sm:text-2xl md:text-2xl lg:text-3xl tracking-[-0.02em]"
          >
            More work from our CEO
          </h4>
          <iframe
            width="100%"
            height="580"
            src="https://www.youtube.com/embed/iQx2DYpAqog?si=Jo9ZHDamXsziUrMz"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="image-wrapper flex gap-5 sm:flex-row flex-col items-center mb-10">
          <div className="basis-1/2">
            <h3
              className="font-arial font-normal text-dark-green mb-3 tracking-[-0.05em]
              text-4xl sm:text-5xl md:text-6xl lg:text-[85px]"
            >
              Design Guided by Insight
            </h3>
            <h4
              className="font-helvetica-neue-bold font-normal text-marigold mb-10
              text-xl sm:text-2xl md:text-3xl lg:text-3xl tracking-[-0.02em]"
            >
              Design your custom container home today
            </h4>
            <div className="btn-wrapper">
              <Link
                className="w-full md:w-auto border-dark-teal text-white tracking-[-0.02em] bg-dark-teal md:text-lg font-helvetica-neue-bold rounded-md px-8 pt-[13px] pb-[10px] px-5 hover:bg-green cursor-pointer"
                to="/models"
              >
                Customize Now
              </Link>
            </div>
          </div>
          <div className="basis-1/2">
            <LazyLoadImage
              src="/image/contact/adu2.png"
              alt="ADU 1"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
