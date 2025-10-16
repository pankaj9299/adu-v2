import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import { findImageByProduct } from "../utils/helpers";
import { useEffect, useMemo, useState } from "react";

const HeroBanner = ({ selectedOption, defaultImage }) => {
  const selectedProduct = useSelector(
    (state) => state.configurator.selectedProduct
  );
  const imageUrl = findImageByProduct(selectedProduct?.product_name);

  const imageSrc = useMemo(() => {
    const src = selectedOption?.image_two
      ? selectedOption.image_two
      : selectedOption?.image
      ? selectedOption.image
      : defaultImage
      ? defaultImage
      : "/uploads/category_options/1753111703_d87a932b81637b70ee4b.png";

    return src.startsWith("http")
      ? src
      : `${import.meta.env.VITE_API_DOMAIN}/${src.replace(/^\//, "")}`;
  }, [selectedOption?.image_two, selectedOption?.image, defaultImage]);

  // Track loading state whenever src changes
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setHasError(false);

    const img = new Image();
    img.src = imageSrc;

    img.onload = () => {
      if (!cancelled) setIsLoading(false);
    };
    img.onerror = () => {
      if (!cancelled) {
        setHasError(true);
        setIsLoading(false);
      }
    };

    return () => {
      cancelled = true;
    };
  }, [imageSrc]);

  // Force LazyLoadImage to re-initialize when src changes
  const imageKey = imageSrc;

  return (
    <section className="hero-banner pb-3 pt-0 mt-10">
      <div className="container mx-auto w-full">
        <div className=" flex flex-col md:flex-row w-full items-center gap-5">
          <div className="intro w-full md:w-2/5">
            {/* <h3 className="text-3xl font-helvetica-neue-bold font-bold inline-block text-lightYellow mb-2">
              You are customizing
            </h3> */}
            <h1 className="text-6xl font-normal font-arial text-secondary-green tracking-[-0.05em] mb-5">
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
          <div className="image-wrap relative w-full md:w-3/5 h-[450px]">
            {/* Loader overlay (visible until image loaded) */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-xl animate-pulse bg-gray-200" />
                <div className="absolute h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-gray-600" />
              </div>
            )}

            {/* Actual image (fade in when loaded) */}
            <LazyLoadImage
              key={imageKey}
              src={
                hasError
                  ? "https://placehold.co/1072x500?text=Image+unavailable"
                  : imageSrc || "https://placehold.co/1072x500?text=ADU"
              }
              alt={selectedProduct?.product_name || "Hero image"}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
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
