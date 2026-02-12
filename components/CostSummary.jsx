import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { approxMonthlyPayment, findImageByProduct } from "../utils/helpers";
import StepFooterNav from "./StepFooterNav";

const CostSummary = ({
  // existing props...
  showFooterNav = true,
  goBack,
  goNext,
  currentStep,
  isLastStep,
  nextCategory,
  categories,
} = {}) => {
  const location = useLocation();
  const selectedProductState = useSelector(
    (state) => state.configurator.selectedProduct
  );

  // Only show footer if explicitly allowed AND at least one handler exists
  const hasNavHandlers =
    typeof goBack === "function" || typeof goNext === "function";
  const shouldShowFooter = Boolean(showFooterNav && hasNavHandlers);

  const imageUrl = findImageByProduct(selectedProductState.product_name);

  const parsePrice = (priceStr) => Number(priceStr?.replace(/[^\d]/g, "")) || 0;

  // --- Microwave helpers ---
  const normalizeMicrowaves = (category) => {
    const m = category?.microwave;
    if (!m) return [];
    return Array.isArray(m) ? m : [m];
  };

  const microwavePrice = (m) => {
    const dp = Number(m?.discount_price ?? 0);
    const p = Number(m?.price ?? 0);
    return dp > 0 ? dp : p;
  };

  // --- Bathroom helpers ---
  const isBathroomName = (name) =>
    typeof name === "string" &&
    ["bathroom", "kitchen"].includes(name.trim().toLowerCase());
  const bathroomDisplayText = (selectedOption) =>
    (selectedOption?.subtitle && selectedOption.subtitle.trim()) ||
    selectedOption?.name ||
    "Not Selected";

  const calculateTotal = () => {
    const basePrice = parsePrice(selectedProductState.product_price);

    const categories = selectedProductState.categories || [];

    const categoryTotal = categories.reduce((catSum, category) => {
      // Handle subcategories (default)
      const subcatTotal =
        category.subcategories?.reduce((sum, sub) => {
          return sum + (sub.selectedOption?.price || 0);
        }, 0) || 0;

      // Handle tabbed subcategories (tabbed)
      const tabTotal =
        category.tab?.reduce((sum, tab) => {
          return sum + (tab.selectedOption?.price || 0);
        }, 0) || 0;

      // Handle addons
      const addonTotal =
        category.addons?.reduce((sum, addon) => {
          return sum + (addon.price || 0);
        }, 0) || 0;

      // Handle microwave (array or single; bundle collapses to one item)
      const microwaveTotal = normalizeMicrowaves(category).reduce(
        (sum, m) => sum + microwavePrice(m),
        0
      );

      return catSum + subcatTotal + tabTotal + addonTotal + microwaveTotal;
    }, 0);

    return (basePrice + categoryTotal + 20000).toLocaleString();
  };

  // Monthly calculations
  const principalRaw = calculateTotal();
  const monthly = approxMonthlyPayment(principalRaw, 6, 30);

  return (
    <>
      <section className="cost-summary">
        <div className="container mx-auto">
          <div className="intro">
            <h2 className="text-dark-green md:text-6xl mb-3">
              Project Cost Summary
            </h2>
            <h3 className="text-dark-teal font-helvetica-neue-bold-v2 tracking-[-0.02em] text-3xl inline-block w-full md:w-1/2 mb-5">
              Base + Floor Plan
            </h3>
            <div className="title flex flex-col md:flex-row gap-6 items-center">
              <img
                src={imageUrl}
                alt={selectedProductState?.product_name}
                width="436"
                height="38"
                className="h-[38px] w-auto"
              />
              <h3 className="font-normal font-arial text-dark-green shrink-0 tracking-[-0.05em]">
                {selectedProductState.floor_name.replace("Floor", "Floor Plan")}
              </h3>
              <span className="flex-1 border-b border-secondary-dark-gray text-dark-green font-arial mt-[14px]"></span>
              <p className="text-dark-green">
                {selectedProductState.product_price}
              </p>
            </div>
          </div>
          <div className="site-accessment">
            <div className="title flex flex-col md:flex-row gap-6 items-center">
              <h3 className="text-2xl text-dark-green font-arial my-5">
                Site Preparation & Permits
              </h3>
              <span className="flex-1 border-b border-secondary-dark-gray text-dark-green font-arial mt-[14px]"></span>
              <p className="text-dark-green">$20,000</p>
            </div>
            <p className="text-base text-dark-green">
              <strong>*Permits & Site Preparation Work:</strong> Must first get
              issued permits from City/County planning department before Site
              Work can begin. This usally includes grading the land and
              drainage, trench foundation, utility connections; water, sewer and
              electrical, and potential electrical panel upgrade to support ADU.
              All these steps are done in parallel while your ADU-Container is
              being manufactured.
            </p>
          </div>

          {/* Categories */}
          {selectedProductState.categories?.map((category) => {
            const hasContent =
              (category.subcategories?.length ?? 0) > 0 ||
              (category.tab?.length ?? 0) > 0 ||
              (category.addons?.length ?? 0) > 0 ||
              normalizeMicrowaves(category).length > 0;

            return (
              hasContent && (
                <div key={category.id} className="exterior-info mt-15">
                  <h3 className="text-dark-teal font-helvetica-neue-bold-v2 text-3xl  inline-block w-1/2 mb-5">
                    {category.name}
                  </h3>

                  <div className="description">
                    <div className="column flex flex-col divide-y divide-transparent">
                      {/* For default (subcategories) */}
                      {category.subcategories?.map((sub) => (
                        <div
                          key={sub.id}
                          className="flex justify-between border-b border-secondary-dark-gray"
                        >
                          <div className="left flex gap-4">
                            <div className="first w-[173px] text-left">
                              <p className="font-normal bg-yellow pl-5 text-dark-green py-2">
                                {sub.name}
                              </p>
                            </div>
                            <div className="second">
                              <p className="font-normal text-dark-green py-2">
                                {isBathroomName(category.name)
                                  ? bathroomDisplayText(sub.selectedOption)
                                  : sub.selectedOption?.name || "Not Selected"}
                              </p>
                            </div>
                          </div>
                          <div className="right">
                            <div className="third">
                              <p className="font-normal text-dark-green py-2">
                                $
                                {sub.selectedOption?.price?.toLocaleString() ||
                                  "0"}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* For tabbed (tab) */}
                      {category.tab?.map((tab) => (
                        <div
                          key={tab.id}
                          className="flex justify-between border-b border-secondary-dark-gray"
                        >
                          <div className="left flex gap-4">
                            <div className="first w-[173px] text-left">
                              <p className="font-normal text-dark-green pl-5 bg-yellow py-2">
                                {tab.name}
                              </p>
                            </div>
                            <div className="second">
                              <p className="font-normal py-2 text-dark-green">
                                {isBathroomName(category.name)
                                  ? bathroomDisplayText(tab.selectedOption)
                                  : tab.selectedOption?.name || "Not Selected"}
                              </p>
                            </div>
                          </div>
                          <div className="right">
                            <div className="third">
                              <p className="font-normal py-2 text-dark-green">
                                $
                                {tab.selectedOption?.price?.toLocaleString() ||
                                  "0"}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Microwave (supports bundle 67 or multiple items) */}
                      {normalizeMicrowaves(category).length > 0 &&
                        normalizeMicrowaves(category).map((m) => (
                          <div
                            key={`microwave-${m.microwave_id}`}
                            className="flex justify-between border-b border-secondary-dark-gray"
                          >
                            <div className="left flex gap-4">
                              <div className="first w-[173px] text-left">
                                <p className="font-normal bg-yellow py-2 pl-5 text-dark-green">
                                  Appliances
                                </p>
                              </div>
                              <div className="second">
                                <p className="font-normal py-2 text-dark-green">
                                  {m?.name ?? "Microwave"}
                                </p>
                              </div>
                            </div>
                            <div className="right">
                              <div className="third">
                                <p className="font-normal py-2 text-dark-green">
                                  ${microwavePrice(m).toLocaleString()}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}

                      {/* Addons */}
                      {category.addons?.map((addon) => (
                        <div
                          key={`addon-${addon.id}`}
                          className="flex justify-between border-b border-secondary-dark-gray"
                        >
                          <div className="left flex gap-4">
                            <div className="first w-[173px] text-left">
                              <p className="font-normal bg-yellow py-2 pl-5 text-dark-green">
                                Add-On
                              </p>
                            </div>
                            <div className="second">
                              <p className="font-normal py-2 text-dark-green">
                                {addon.name}
                              </p>
                            </div>
                          </div>
                          <div className="right">
                            <div className="third">
                              <p className="font-normal py-2 text-dark-green">
                                ${addon.price?.toLocaleString() || "0"}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            );
          })}

          {/* Total for all */}
          <div className="final-result mt-10">
            <div className="flex flex-row md:flex-col justify-end">
              <div className="flex w-full md:w-1/2 md:ml-auto justify-between border-b border-secondary-dark-gray items-center">
                <div className="text-right">
                  <h3 className="font-bold text-lightYellow py-2 md:text-3xl font-helvetica-neue-bold">
                    Current Total
                  </h3>
                </div>
                <div>
                  <p className="font-bold text-xl py-2 text-dark-green">
                    ${calculateTotal()}
                  </p>
                </div>
              </div>
              {/* Monthly Expenses */}
              {/* <div className="flex justify-end">
                <div className="w-full max-w-[715px] flex items-center justify-between gap-5 border-b border-gray pb-2 mt-5">
                  <h3 className="font-bold text-lightYellow py-2 md:text-3xl font-helvetica-neue-bold">
                    Approximate Monthly Payment
                  </h3>
                  <p className="text-[#263824] text-xl font-bold">
                    {monthly != null ? `$${monthly} /month` : "—"}
                  </p>
                </div>
              </div>

              <p className="text-[#263824] text-sm mt-3 text-right">
                *Based on a 30-year term at 6%. This is an estimate only. Actual
                financing terms may vary.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      {location.pathname === "/checkout" && (
        <section>
          <div className="bg-dark-green py-10 md:py-15">
            <div className="container">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                {/* Left */}
                <div className="md:max-w-3xl">
                  <h3 className="text-marigold font-arial text-3xl md:text-6xl mb-3 tracking-[-0.05em]">
                    Need financing?
                  </h3>

                  <p className="text-lg md:text-2xl text-white font-normal font-arial mb-4 md:mb-5">
                    Based on your selections, your monthly payment could be as
                    low as:
                  </p>

                  <p className="font-bold text-2xl md:text-3xl font-arial text-white">
                    {monthly != null ? `$${monthly} /month` : "—"}
                  </p>

                  <p className="text-white font-normal text-sm md:text-lg">
                    *Based on a 30-year term at 6%. This is an estimate only.
                    Actual financing terms may vary.
                  </p>
                </div>

                {/* Right */}
                <div className="md:shrink-0">
                  <Link
                    className="inline-flex w-full md:w-auto justify-center bg-lightYellow text-white tracking-[-0.02em]
            font-helvetica-neue-bold px-8 md:px-10 pt-[15px] pb-[12px] text-base md:text-lg
            hover:bg-green transition-colors"
                    to="/financing"
                    data-discover="true"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="back-button text-center mt-24 mb-15">
              <h3 className="md:text-[30px] text-thinGray mb-5 font-helvetica-neue-bold">
                Want to make a change?
              </h3>
              <div className="button">
                <Link
                  to="/models"
                  className="border-lightYellow border-1 text-lightYellow hover:bg-lightYellow hover:text-white font-semibold py-2 px-6 md:text-[19px] font-bold transition"
                >
                  Go Back to Customization
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
      {shouldShowFooter && (
        <StepFooterNav
          goBack={goBack}
          goNext={goNext}
          currentStep={currentStep}
          isLastStep={isLastStep}
          nextCategory={nextCategory}
          categories={categories}
          className="my-6"
        />
      )}
    </>
  );
};

export default CostSummary;
