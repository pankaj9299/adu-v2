import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const ImageWithText = ({
  imageSrc,
  imageAlt = "",
  title,
  description = [],
  ctaText,
  ctaLink = "#",
  reverse = false,
}) => {
  return (
    <section className="px-0 py-12 md:py-16">
      <div className="container mx-auto px-5 lg:px-0">
        <div
          className={`flex flex-col-reverse ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-8 lg:gap-10`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <LazyLoadImage
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-contain"
              wrapperClassName="w-full text-center"
              effect="opacity"
              threshold={100}
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2
              className="text-marigold mb-3 font-helvetica-neue-bold tracking-[-0.02em]
              text-3xl sm:text-4xl lg:text-4xl"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            {description.map((text, index) => (
              <p
                key={index}
                className={`text-green text-base sm:text-lg ${
                  index !== description.length - 1 ? "my-4 sm:my-5" : ""
                }`}
              >
                {text}
              </p>
            ))}

            {ctaText && (
              <div className="mt-8 sm:mt-10">
                <Link
                  to={ctaLink}
                  className="bg-dark-teal text-white tracking-[-0.02em]
                  font-helvetica-neue-bold px-17 pt-[15px] pb-[12px] md:text-lg
                  hover:bg-green transition-colors"
                >
                  {ctaText}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageWithText;

