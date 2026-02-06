import BannerSecondLevel from "./home/BannerSecondLevel";
import ColThree from "./home/ColThree";
import ImageWithText from "./home/ImageWithText";
import Process from "./home/Process";
import Cta from "./home/Cta";

const HomePage = () => {
  return (
    <>
      <BannerSecondLevel />
      <ColThree />
      <ImageWithText
        imageSrc="/image/homepage/stairs.png"
        imageAlt="Shipping container stairs"
        title={`Why Shipping <br class="hidden sm:block" /> Containers Work`}
        description={[
          "Shipping containers hit the sweet spot between custom and modular.",
          "They’re affordable, fast, and flexible, giving you more for less without sacrificing design.",
          "Container ADUs deliver beauty and function at a fraction of the cost.",
        ]}
        ctaText="Get in Touch"
        ctaLink="/contact-us"
      />
      <Process />
      <ImageWithText
        imageSrc="/image/homepage/building.png"
        imageAlt="Shipping container stairs"
        title={`And experience that shapes a better space`}
        description={[
          "ADU Container CEO Drake Boroja brings over a decade of experience turning shipping containers into thoughtfully designed spaces, from luxury homes to well-known retail brands.",
          "Check out all of the projects that laid the groundwork for the iconic ADU Container you see today.",
        ]}
        ctaText="Learn More"
        ctaLink="/contact-us"
      />
      <Cta />
    </>
  );
};

export default HomePage;
