const HeroBanner = ({ selectedOption, defaultImage }) => {
  const imageSrc = selectedOption?.image
    ? selectedOption.image.startsWith("http")
      ? selectedOption.image
      : `${import.meta.env.VITE_API_DOMAIN}/${selectedOption.image}`
    : defaultImage ? defaultImage : `${import.meta.env.VITE_API_DOMAIN}/uploads/category_options/1753111703_d87a932b81637b70ee4b.png`;
    
  return (
    <section className="hero-banner pb-3 pt-0 mt-10">
      <div className="container">
        <div className="intro">
          <h3 className="text-[30px] font-helvetica-neue-bold font-bold inline-block w-1/2 text-lightYellow mb-2">
            Your are customizing
          </h3>
          <h1 className="text-[87px] font-normal font-arial text-secondary-green mb-5">
            Floor Plan 4
          </h1>
          <div className="heading">
            <h3
              className="font-normal inline-block text-center flex flex-col bg-darkRed rounded-[5px] rounded-l-none overflow-hidden py-2 px-3 mb-10 text-white"
              style={{
                clipPath: "polygon(10% 0%, 99% 0%, 99% 100%, 0% 100%, 0% 30%)",
              }}
            >
              Side-by-Side Container
            </h3>
          </div>
        </div>
        <div className="image-wrap">
          <img
            src={imageSrc || "https://placehold.co/1072x500?text=ADU"}
            className="w-full h-[620px] object-cover"
            alt="rooftop"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;