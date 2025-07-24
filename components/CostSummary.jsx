import React from "react";

import { useSelector } from "react-redux";

const CostSummary = () => {
  const selectedProductState = useSelector(
    (state) => state.configurator.selectedProduct
  );
  console.log("cost summary selectedProductState", selectedProductState);
  return (
    <section className="cost-summary">
      <div className="container mx-auto">
        <div className="intro">
          <h2 className="text-secondary-gold text-6xl mb-3">
            Project Cost Summary
          </h2>
          <h3 className="text-secondary-green text-3xl inline-block w-1/2 mb-10">
            Base + Floor Plan
          </h3>
          <div className="title flex gap-6 items-center">
            <h3
              className="font-normal text-center flex flex-col bg-darkRed rounded-r-[5px] overflow-hidden py-2 px-2 text-white"
              style={{
                clipPath: "polygon(10% 0%, 99% 0%, 99% 100%, 0% 100%, 0% 30%)",
              }}
            >
              {selectedProductState.product_name}
            </h3>
            <h3 className="font-normal">
              Floor Plan {selectedProductState.floor_name}
            </h3>
            <span className="w-[436px] border-b border-secondary-dark-gray mt-[14px]"></span>
            <p>{selectedProductState.product_price}</p>
          </div>
        </div>

        {selectedProductState.categories?.map((category) => (
          <div key={category.id} className="exterior-info mt-15">
            <h3 className="text-secondary-green text-3xl inline-block w-1/2 mb-10">
              {category.name}
            </h3>

            <div className="discription">
              <div className="column flex flex-col divide-y divide-transparent">
                {/* Render Subcategories */}
                {category.subcategories?.map((sub) => (
                  <div
                    key={sub.id}
                    className="flex justify-between border-b border-secondary-dark-gray"
                  >
                    <div className="left flex gap-4">
                      <div className="first w-[173px] text-center">
                        <p className="font-normal bg-yellow py-2">{sub.name}</p>
                      </div>
                      <div className="second">
                        <p className="font-normal py-2">
                          {sub.selectedOption?.name || "Not Selected"}
                        </p>
                      </div>
                    </div>
                    <div className="right">
                      <div className="third">
                        <p className="font-normal py-2">
                          ${sub.selectedOption?.price?.toLocaleString() || "0"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Render Addons */}
                {category.addons?.map((addon) => (
                  <div
                    key={`addon-${addon.addonId}`}
                    className="flex justify-between border-b border-secondary-dark-gray"
                  >
                    <div className="left flex gap-4">
                      <div className="first w-[173px] text-center">
                        <p className="font-normal bg-yellow py-2">Add-On</p>
                      </div>
                      <div className="second">
                        <p className="font-normal py-2">{addon.name}</p>
                      </div>
                    </div>
                    <div className="right">
                      <div className="third">
                        <p className="font-normal py-2">
                          ${addon.price?.toLocaleString() || "0"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Total */}
            <div className="final-result mt-10">
              <div className="flex justify-end">
                <div className="flex w-1/2 justify-between border-b border-secondary-dark-gray items-center">
                  <div className="text-right">
                    <h3 className="font-bold text-lightYellow py-2">
                      Current Total
                    </h3>
                  </div>
                  <div>
                    <p className="font-bold py-2">
                      $
                      {// Parse the product base price from "$40,000" to number
                      (
                        Number(
                          selectedProductState.product_price.replace(
                            /[^\d]/g,
                            ""
                          )
                        ) +
                        // Sum of all subcategory selected option prices
                        selectedProductState.categories?.reduce(
                          (catSum, category) => {
                            const subcatTotal = category.subcategories?.reduce(
                              (sum, sub) =>
                                sum + (sub.selectedOption?.price || 0),
                              0
                            );
                            const addonTotal = category.addons?.reduce(
                              (sum, addon) => sum + (addon.price || 0),
                              0
                            );
                            return catSum + subcatTotal + addonTotal;
                          },
                          0
                        )
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CostSummary;
