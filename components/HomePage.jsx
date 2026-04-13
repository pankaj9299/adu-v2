import { Helmet } from "react-helmet-async";
import BannerSecondLevel from "./home/BannerSecondLevel";
import ColThree from "./home/ColThree";
import ImageWithText from "./home/ImageWithText";
import Process from "./home/Process";
import Cta from "./home/Cta";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home | My App</title>
        <meta name="description" content="Welcome to my app." />
        <link rel="canonical" href="https://yoursite.com/" />

        <meta property="og:title" content="Home | My App" />
        <meta property="og:description" content="Welcome to my app." />
        <meta property="og:url" content="https://yoursite.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yoursite.com/og-home.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | My App" />
        <meta name="twitter:description" content="Welcome to my app." />
        <meta name="twitter:image" content="https://yoursite.com/og-home.png" />
      </Helmet>
      <BannerSecondLevel />
      <ColThree />
      <ImageWithText
        imageSrc="/image/homepage/stairs.png"
        imageAlt="Shipping container stairs"
        title={`Why Shipping <br class="hidden sm:block" /> Containers Work`}
        description={[
          "Shipping containers hit the sweet spot between custom and modular.",
          "<strong>They’re affordable, fast, and flexible, giving you more for less without sacrificing design.</strong>",
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
          "ADU Container CEO Drake Boroja brings over <strong>a decade of experience</strong> turning shipping containers into thoughtfully designed spaces, from luxury homes to well-known retail brands.",
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
