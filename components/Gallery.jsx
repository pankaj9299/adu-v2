import Banner from "./gallery/Banner";
import Models from "./gallery/Models";
import ImageWithText from "./gallery/ImageWithText";
import Video from "./gallery/Video";
import Line from "./gallery/Line";
import IntroImagesV2 from "./gallery/IntroImagesV2";

const Gallery = () => {
  return (
    <>
      <Banner />
      <Models />
      <Line />
      <ImageWithText
        imageSrc="/image/gallery/adu1.png"
        alt="ADU 01"
        title="ADU_01 Floor Plan"
        details={["160 sq ft", "1 Bedroom", "1 Bathroom"]}
        rootImg={true}
        rootImgSrc="/image/single_container.png"
        className="pb-10"
      />
      <Video
        videoId="EHnH2u9LYrk"
        ctaText="Customize This Model"
        ctaLink="/models"
        className="pb-15"
      />
      <ImageWithText
        imageSrc="/image/gallery/adu2.png"
        alt="ADU 02"
        title="ADU_02 Floor Plan"
        details={["160 sq ft", "Studio", "1 Bathroom"]}
        rootImg={false}
        className="pb-15"
      />
      <Video
        videoId="60qqwrvLwAs"
        ctaText="Customize This Model"
        ctaLink="/models"
      />
      <Line />
      <ImageWithText
        imageSrc="/image/gallery/adu3.png"
        alt="ADU 03"
        title="ADU_03 Floor Plan"
        details={["320 sq ft", "2 Bedrooms", "1 Bathroom"]}
        rootImg={true}
        rootImgSrc="/image/side_by_side.png"
        className="pb-15"
      />
      <Video
        videoId="w2oHjsJHmJI"
        ctaText="Customize This Model"
        ctaLink="/models"
        className="pb-15"
      />
      <ImageWithText
        imageSrc="/image/gallery/adu4.png"
        alt="ADU 04"
        title="ADU_04 Floor Plan"
        details={["320 sq ft", "1 Bedroom", "1 Bathroom"]}
        rootImg={false}
        className="pb-15"
      />
      <Video
        videoId="ICAQWQRlP_E"
        ctaText="Customize This Model"
        ctaLink="/models"
      />
      <Line />
      <IntroImagesV2
        imageSrc1="/image/gallery/adu_5_1.png"
        imageSrc2="/image/gallery/adu_5_2.png"
        alt="ADU 05"
        title="ADU_05 Floor Plan"
        details={["640 sq ft", "3 Bedrooms", "2 Bathrooms"]}
        imageEffect="opacity"
        reverse={false}
        rootImg={true}
        rootImgSrc="/image/two_story_container.png"
        className="pb-15"
      />
      <Video
        videoId="N2dWK8Bw9KA"
        ctaText="Customize This Model"
        ctaLink="/models"
        className="pb-15"
      />
      <IntroImagesV2
        imageSrc1="/image/gallery/adu_6_1.png"
        imageSrc2="/image/gallery/adu_6_2.png"
        alt="ADU 06"
        title="ADU_06 Floor Plan"
        details={["640 sq ft", "2 Bedroom", "2 Bathroom"]}
        imageEffect="opacity"
        reverse={false}
        className="pb-15"
      />
      <Video
        videoId="WyfjsQaVu4c"
        ctaText="Customize This Model"
        ctaLink="/models"
        className="pb-15"
      />
    </>
  );
};

export default Gallery;
