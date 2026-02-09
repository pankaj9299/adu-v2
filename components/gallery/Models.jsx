const modelsData = [
  {
    image: "/image/single_container.png",
    text: `160 sq ft <br>Studio or 1 Bedroom <br>1 Bathroom`,
  },
  {
    image: "/image/side_by_side.png",
    text: `320 sq ft <br>1 Bedroom <br>1 Bathroom`,
  },
  {
    image: "/image/two_story_container.png",
    text: `640 sq ft <br>3 Bedrooms <br>2 Bathrooms`,
  },
];

const Models = () => {
  return (
    <section className="pt-25">
      <div className="container">
        <div className="col-three-wrap">
          <div className="intro mb-20">
            <h3 className="text-4xl text-left font-normal font-helvetica-neue-bold text-lightYellow tracking-[-0.02em]">
              Auto-Navigation
            </h3>
            <p className="text-2xl text-dark-green font-normal font-arial">
              Click a Container type below
            </p>
          </div>
          <div className="wrapper grid grid-cols-1 md:grid-cols-3 gap-x-25">
            {modelsData.map((item, index) => (
              <div className="wrap text-center" key={index}>
                <div className="heading mb-6 h-[45px] flex items-center justify-center max-h-[38px]">
                  <img
                    src={item.image}
                    alt={`Model ${index + 1}`}
                    className="w-full h-full object-contain object-center"
                  />
                </div>

                <div className="text-wrap mt-2">
                  <p
                    className="text-xl font-normal font-arial text-dark-green"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;
