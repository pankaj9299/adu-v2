import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AppliancesItems = ({ appliance }) => {
  if (!appliance) return null;
  const settings = {
    dots: true,
    infinite: appliance.items.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="appliances-items pt-0">
      <div className="container">
        <>
          <div className="img-wrapper">
            <LazyLoadImage
              src={appliance.image}
              alt={"Hero image"}
              className={`mx-auto h-[460px]`}
              effect="opacity"
              threshold={100}
            />
          </div>
          <div className="slider-container mt-8 px-10 md:px-16">
            <Slider {...settings}>
              {appliance.items.map((slide) => (
                <div key={slide.id || slide.title}>
                  <div className="shadow-md grid grid-cols-1 md:grid-cols-10 gap-5 items-center p-8">
                    <div className="img-wrapper md:col-span-3">
                      <LazyLoadImage
                        src={slide.image}
                        alt={slide.title}
                        className={`mx-auto h-[237px]`}
                        effect="opacity"
                        threshold={100}
                      />
                    </div>
                    <div className="text-wrapper md:col-span-7">
                      <h4>{slide.title}</h4>
                      <div dangerouslySetInnerHTML={{ __html: slide.blurb }} />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </>
      </div>
    </section>
  );
};

export default AppliancesItems;
