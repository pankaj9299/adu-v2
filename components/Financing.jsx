import Banner from "./financing/Banner";
import Pricing from "./financing/Pricing";
import ColTwoImage from "./financing/ColTwoImage";
import ColTwoImageV2 from "./financing/ColTwoImageV2";
import Cta from "./financing/Cta";
import Resources from "./financing/Resources";
import Calculator from "./financing/Calculator";

export default function FinancingHome() {
  return (
    <>
      <Banner />
      <Pricing />
      <ColTwoImage />
      <Calculator />
      <ColTwoImageV2 />
      <Resources />
      <Cta />
    </>
  );
}
