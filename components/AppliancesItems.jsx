import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AppliancesItems = ({ appliance, selectedRoom }) => {
  if (!appliance) return null;
  const activeItems = appliance.rooms.filter(
    (item) => item.name === selectedRoom
  );
  const mainImg = activeItems[0].image;
  //console.log('appliance', appliance.rooms, 'selectedModel', selectedModel, 'selectedRoom', selectedRoom, ' - activeItems: ', activeItems);
  //console.log('appliance', appliance, ' --- mainImg: ', mainImg, ' --- selectedRoom: ', selectedRoom);
  //console.log('activeItems: ', activeItems, ' --- appliance: ', appliance);
  const settings = {
    dots: true,
    infinite: appliance.rooms.length > 1,
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
              src={mainImg}
              alt={"Hero image"}
              className={`md:h-[560px] max-sm:h-full mx-auto`}
              wrapperClassName="w-full text-center"
              effect="opacity"
              threshold={100}
            />
          </div>
          <div className="slider-container mt-8 px-10 md:px-16">
            <Slider {...settings}>
              {activeItems.map((room) =>
                room.items.map((slide) => (
                  <div key={slide.id || slide.title}>
                    <div className="shadow-md grid grid-cols-1 md:grid-cols-10 gap-5 items-center place-items-center p-8">
                      <div className="img-wrapper md:col-span-3">
                        <LazyLoadImage
                          src={slide.image}
                          alt={slide.title}
                          className={`mx-auto h-full`}
                          effect="opacity"
                          threshold={100}
                        />
                      </div>
                      <div className="text-wrapper md:col-span-7">
                        <h4 className="text-dark-green font-helvetica-neue-bold tracking-[-0.02em]">
                          {slide.title}
                        </h4>
                        <div
                          className="prose-p:text-dark-green prose prose-p:text-base prose-p:leading-normal font-arial tracking-[0%]"
                          dangerouslySetInnerHTML={{ __html: slide.blurb }}
                        />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </Slider>
          </div>
        </>
      </div>
    </section>
  );
};

export default AppliancesItems;
