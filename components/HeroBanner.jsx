import { LazyLoadImage } from 'react-lazy-load-image-component';

const HeroBanner = ({ selectedOption, defaultImage }) => {
  const imageSrc = selectedOption?.image
    ? selectedOption.image.startsWith("http")
      ? selectedOption.image
      : `${import.meta.env.VITE_API_DOMAIN}/${selectedOption.image}`
    : defaultImage ? defaultImage : `${import.meta.env.VITE_API_DOMAIN}/uploads/category_options/1753111703_d87a932b81637b70ee4b.png`;
    
  return (
    <section className="hero-banner pb-3 pt-0 mt-10">
      <div className="container mx-auto w-full">
        <div className=" flex flex-col md:flex-row w-full items-center gap-5">
          <div className="intro w-full md:w-2/5">
            <h3 className="text-3xl font-helvetica-neue-bold font-bold inline-block text-lightYellow mb-2">
              You are customizing
            </h3>
            <h1 className="text-5xl font-normal font-arial text-secondary-green mb-5">
              Floor Plan 4
            </h1>
            <div className="heading">
              <h3
                className="font-normal inline-block text-center flex flex-col bg-darkRed rounded-[5px] rounded-l-none overflow-hidden py-2 px-3 mb-10 max-sm:mb-0 text-white"
                style={{
                  clipPath:
                    "polygon(10% 0%, 99% 0%, 99% 100%, 0% 100%, 0% 30%)",
                }}
              >
                Side-by-Side Container
              </h3>
            </div>
          </div>
          <div className="image-wrap w-full md:w-3/5">
            <LazyLoadImage
              src={imageSrc || "https://placehold.co/1072x500?text=ADU"}
              className="w-full max-h-[419px] object-contain"
              alt="rooftop"
              effect="opacity"
              threshold={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;