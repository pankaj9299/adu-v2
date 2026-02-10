import { LazyLoadImage } from "react-lazy-load-image-component";

const IntroImagesV2 = ({
  imageSrc1 = "/image/gallery/adu5.png",
  imageSrc2 = "/image/gallery/adu5.png",
  alt = "Approve",
  title = "ADU_01 Floor Plan",
  details = ["160 sq ft", "1 Bedroom", "1 Bathroom"], // array OR string with <br>
  imageEffect = "opacity",
  reverse = false, // swap image/text order on lg
  rootImg = false,
  rootImgSrc = "/image/single_container.png",
  className = "p-0",
}) => {
  const detailsHtml = Array.isArray(details)
    ? details.map((line) => `${line}<br />`).join("")
    : details;

  return (
    <section className={className}>
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
          className={`text-wrap flex flex-col lg:flex-row gap-12 lg:gap-12 lg:justify-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full lg:flex-[3]">
            <h3 className="text-40 text-marigold font-helvetica-neue-bold tracking-[-0.02em]">
              First Floor
            </h3>
            <LazyLoadImage
              src={imageSrc1}
              alt={alt}
              className="w-full h-auto"
              wrapperClassName="w-full"
              effect={imageEffect}
            />
            <h3 className="text-40 text-marigold font-helvetica-neue-bold tracking-[-0.02em] mt-5">
              Second Floor
            </h3>
            <LazyLoadImage
              src={imageSrc2}
              alt={alt}
              className="w-full h-auto"
              wrapperClassName="w-full"
              effect={imageEffect}
            />
          </div>

          <div className="w-full lg:flex-[2]">
            <h3 className="text-4xl xs:text-2xl text-marigold font-helvetica-neue-bold tracking-[-0.02em] mt-10">
              {title}
            </h3>

            <p
              className="text-green mt-4 mb-6 sm:mb-7 text-2xl"
              dangerouslySetInnerHTML={{ __html: detailsHtml }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroImagesV2;
