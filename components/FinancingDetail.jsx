import { Link } from "react-router-dom";
import DetailCards from "./financing/DetailCards";
import { useParams } from "react-router-dom";

const FINANCING_VIDEOS = {
  "heloc-strategy-building-adus": "aC7OKPr7aB8",
  "why-interest-rates-are-not-as-important-as-you-think": "tGfPfaXAfqw",
  "first-step-build-adu-budget-guide": "OzCFHE0YKk0",
};

const FinancingDetail = () => {
  const { slug } = useParams();
  const FINANCING_TITLES = {
    "heloc-strategy-building-adus": "HELOC Strategy for Building ADUs",

    "why-interest-rates-are-not-as-important-as-you-think":
      "Why Interest Rates Are NOT as Important as You Think",

    "first-step-build-adu-budget-guide":
      "First Step to Build an ADU: What's Your Budget?",
  };
  const title = FINANCING_TITLES[slug] ?? "Financing Resource";
  const videoId = FINANCING_VIDEOS[slug];

  return (
    <section className="financing-detail">
      <div className="container lg:p-0">
        <h1
          className="font-arial font-base tracking-[-0.05em]
                text-green
                text-85 sm:text-5xl md:text-6xl
                lg:text-85 lg:leading-[80px] my-15"
        >
          {title}
        </h1>
        <div className="img-wrapper">
          <iframe
            width="100%"
            height={600}
            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="text-center">
          <h2
            className="font-arial font-base tracking-[-0.05em]
                text-green
                text-7xl mt-8"
          >
            Talk to Meredith
          </h2>
          <p className="text-2xl text-green mt-5">
            The ADU Lender NMLS 2126086
          </p>
          <div className="mt-9 flex gap-4 justify-center">
            <a
              href="https://calendly.com/aduloans"
              target="_blank"
              className="bg-lightYellow text-white tracking-[-0.02em]
              font-helvetica-neue-bold px-10 pt-[15px] pb-[12px] md:text-2xl
              hover:bg-green transition-colors"
            >
              Schedule a Call
            </a>
          </div>
        </div>
        <DetailCards title="Other Financing Resources" />
      </div>
    </section>
  );
};

export default FinancingDetail;
