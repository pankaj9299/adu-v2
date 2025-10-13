import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import { findImageByProduct } from "../utils/helpers";

const HeroBanner = ({ selectedOption, defaultImage }) => {
  const selectedProduct = useSelector(
    (state) => state.configurator.selectedProduct
  );
  const imageUrl = findImageByProduct(selectedProduct?.product_name);
  const imageSrc = selectedOption?.image_two
    ? selectedOption.image_two.startsWith("http")
      ? selectedOption.image_two
      : `${import.meta.env.VITE_API_DOMAIN}/${selectedOption.image_two}`
    : selectedOption?.image
    ? selectedOption.image.startsWith("http")
      ? selectedOption.image
      : `${import.meta.env.VITE_API_DOMAIN}/${selectedOption.image}`
    : defaultImage
    ? defaultImage
    : `${
        import.meta.env.VITE_API_DOMAIN
      }/uploads/category_options/1753111703_d87a932b81637b70ee4b.png`;

  return (
    <section className="hero-banner pb-3 pt-0 mt-10">
      <div className="container mx-auto w-full">
        <div className=" flex flex-col md:flex-row w-full items-center gap-5">
          <div className="intro w-full md:w-2/5">
            {/* <h3 className="text-3xl font-helvetica-neue-bold font-bold inline-block text-lightYellow mb-2">
              You are customizing
            </h3> */}
            <h1 className="text-6xl font-normal font-arial text-secondary-green tracking-[-5%] mb-5">
              {selectedProduct?.floor_name?.replace("Floor", "Floor Plan")}
            </h1>
            <div className="heading">
              <img
                src={imageUrl}
                alt={selectedProduct?.product_name}
                width="290"
                height="38"
              />
            </div>
          </div>
          <div className="image-wrap w-full md:w-3/5">
            <LazyLoadImage
              src={imageSrc || "https://placehold.co/1072x500?text=ADU"}
              className="w-full h-full object-contain"
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
