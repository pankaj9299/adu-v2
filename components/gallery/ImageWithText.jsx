import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageWithText = ({
  imageSrc = "/image/gallery/adu1.png",
  alt = "Approve",
  title = "ADU_01 Floor Plan",
  details = ["160 sq ft", "1 Bedroom", "1 Bathroom"], // array OR string with <br>
  imageEffect = "opacity",
  reverse = false, // swap image/text order on lg
  rootImg = false,
  rootImgSrc = "/image/single_container.png",
}) => {
  const detailsHtml = Array.isArray(details)
    ? details.map((line) => `${line}<br />`).join("")
    : details;

  return (
    <section className="p-0">
      <div className="container">
        {rootImg && (
          <div className="img-wrapper mb-10">
            <LazyLoadImage
              src={rootImgSrc}
              alt={"container"}
              effect={imageEffect}
            />
          </div>
        )}
        <div
          className={`text-wrap flex flex-col lg:flex-row gap-12 lg:gap-12 lg:justify-center items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full lg:flex-[3]">
            <LazyLoadImage
              src={imageSrc}
              alt={alt}
              className="w-full h-auto"
              wrapperClassName="w-full"
              effect={imageEffect}
            />
          </div>

          <div className="w-full lg:flex-[2]">
            <h3 className="text-xl sm:text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
              {title}
            </h3>

            <p
              className="text-green mt-4 mb-6 sm:mb-7"
              dangerouslySetInnerHTML={{ __html: detailsHtml }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageWithText;
