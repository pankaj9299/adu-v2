import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const FINANCING_RESOURCES = [
  {
    slug: "heloc-strategy-building-adus",
    image: "/image/financing/resource_1.png",
    alt: "HELOC Strategy for Building ADUs",
    title: "HELOC Strategy for Building ADUs",
    description:
      "When building an ADU, your HELOC Strategy is important to saving thousands while keeping your payment reasonable.",
    link: "/financing/heloc-strategy-building-adus",
    cta: "Watch Now",
  },
  {
    slug: "why-interest-rates-are-not-as-important-as-you-think",
    image: "/image/financing/resource_2.png",
    alt: "Why Interest Rates Are NOT as Important as You Think",
    title: "Why Interest Rates Are NOT as Important as You Think",
    description:
      "The length of the loan, loan type, buy-downs and interest-only features are several other factors...",
    link: "/financing/why-interest-rates-are-not-as-important-as-you-think",
    cta: "Watch Now",
  },
  {
    slug: "first-step-build-adu-budget-guide",
    image: "/image/financing/resource_3.png",
    alt: "First Step to Build an ADU: What's Your Budget?",
    title: "First Step to Build an ADU: What's Your Budget?",
    description:
      "There’s a reason why ADU pros typically send their client to us first: They need to know what budget they are designing to...",
    link: "/financing/first-step-build-adu-budget-guide",
    cta: "Watch Now",
  },
];

const DetailCards = ({ title = "Other Financing Resources" }) => {
  const { slug } = useParams();

  // remove current page card
  const filteredItems = FINANCING_RESOURCES.filter(
    (item) => item.slug !== slug,
  );

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mt-10">
          <h2 className="font-arial text-4xl md:text-[85px] text-green tracking-[-0.05em] mb-8 leading-tight">
            {title}
          </h2>

          <div className="grid justify-center gap-10 [grid-template-columns:repeat(auto-fit,minmax(360px,520px))]">
            {filteredItems.map((item) => (
              <div key={item.slug} className="w-full">
                <div className="h-full flex flex-col overflow-hidden rounded-lg">
                  <div className="text-[0px]">
                    <LazyLoadImage
                      src={item.image}
                      alt={item.alt || item.title}
                      className="w-full h-auto"
                      wrapperClassName="w-full"
                      effect="opacity"
                      threshold={100}
                    />
                  </div>

                  <div className="bg-khaki p-8 flex flex-col flex-1">
                    <h3 className="text-dark-green text-3xl font-helvetica-neue-bold tracking-[-0.02em]">
                      {item.title}
                    </h3>

                    <p className="mt-4 mb-7 text-dark-green/90">
                      {item.description}
                    </p>

                    <p className="mt-auto">
                      <Link
                        className="underline italic font-bold text-thinGray"
                        to={item.link}
                      >
                        {item.cta || "Watch Now"}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCards;
