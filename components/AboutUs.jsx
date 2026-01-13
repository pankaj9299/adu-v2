import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "../components/home/slick.css";
import Slider from "react-slick";

const AboutUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // < lg
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 640, // < sm
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
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
          {/* Slider */}
          <div className="slider-wrap relative overflow-visible my-8 sm:my-10">
            <Slider {...settings}>
              {[
                "/image/about/car1.png",
                "/image/about/car2.png",
                "/image/about/car3.png",
                "/image/about/car4.png",
                "/image/about/car5.png",
                "/image/about/car6.png",
                "/image/about/car7.png",
                "/image/about/car8.png",
                "/image/about/car9.png",
                "/image/about/car10.png",
                "/image/about/car11.png",
                "/image/about/car12.png",
                "/image/about/car13.png",
                "/image/about/car14.png",
                "/image/about/car15.png",
                "/image/about/car16.png",
                "/image/about/car17.png",
                "/image/about/car18.png",
              ].map((src, idx) => (
                <div key={idx} className="px-2">
                  <div className="h-[240px] sm:h-[280px] md:h-[300px] w-full">
                    <LazyLoadImage
                      src={src}
                      alt={`Slide ${idx + 1}`}
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                      effect="opacity"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

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
            src="https://www.youtube.com/embed/og3J4GmEpC0?si=GSYn9olyxShd1aCM"
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
