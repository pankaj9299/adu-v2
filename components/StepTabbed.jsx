import React, { useState } from "react";
import HeroBanner from "./HeroBanner";
import CostSummary from "./CostSummary";

export default function StepTabbed({ category }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null); // new state
  const currentTab = category.tabs[activeTab];

  const handleColorOptionClick = (subId) => {
    setSelectedSubcategoryId(subId);
  };

  const selectedSubcategory = currentTab.subcategories.find(
    (sub) => sub.id === selectedSubcategoryId
  );

  const handleOptionSelect = (subcategoryId, option) => {
    setSelectedOptions((prev) => {
      const filtered = prev.filter(
        (item) => item.subcategoryId !== subcategoryId
      ); // remove any previous selection for this subcategory

      return [
        ...filtered,
        {
          subcategoryId,
          optionId: option.id,
          optionName: option.name,
          image: option.image,
        },
      ];
    });
  };

  // console.log('selectedSubcategoryId', selectedSubcategory);
  console.log('selectedOptions', selectedOptions);


  return (
    <>
      <HeroBanner defaultImage={`/light_airy.png`} selectedOption={null} />
      <section className="tab-with-slider">
        <div className="container">
          {/* Heading */}
          <div className="heading">
            <h2 className="text-[68px] inline-block w-1/2 text-secondary-green mb-5">
              {category.name}
            </h2>
          </div>

          {/* Tabs */}
          <div className="tabs">
            <h3 className="text-[30px] inline-block text-thinGray mb-5">
              Pick a Style
            </h3>
            <div className="buttons flex gap-6">
              {category.tabs.map((tab, idx) => (
                <div key={tab.id} className="mt-2">
                  <button
                    onClick={() => {
                      setActiveTab(idx);
                      setSelectedSubcategoryId(null); // reset on tab change
                    }}
                    className={`border-1 border-lightYellow px-6 py-2 text-[19px] font-bold ${
                      activeTab === idx
                        ? "bg-lightYellow text-white"
                        : "text-lightYellow"
                    }`}
                  >
                    {tab.name}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Tab Subcategory Overview */}
          <div className="options">
            <h3 className="text-[25px] inline-block w-3/4 text-thinGray my-10">
              This style comes with the following finishes:
            </h3>
            <div className="multiple-options flex gap-5 flex-wrap">
              {currentTab.subcategories.map((sub) => {
                const firstOption = sub.options[0];
                const isActive = selectedSubcategoryId === sub.id;
                return (
                  <div
                    key={sub.id}
                    onClick={() => handleColorOptionClick(sub.id)}
                    className="w-[250px] cursor-pointer relative"
                  >
                    {/* Shadow layer */}
                    {isActive && (
                      <div className="absolute inset-0 z-0 shadow-lg rounded-lg bg-white scale-105 transition-all duration-200"></div>
                    )}

                    {/* Main content */}
                    <div className="relative z-10">
                      <div className="image-wrap overflow-hidden h-[220px] w-full rounded-md">
                        <img
                          src={firstOption?.image ? `${import.meta.env.VITE_API_DOMAIN}/${
                            firstOption?.image
                          }` : `https://placehold.co/250x250?text=ADU`}
                          alt={sub.label}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="details text-center mt-4 px-3 pb-4">
                        <h4 className="text-secondary-green text-xl font-bold">
                          {sub?.name}
                        </h4>
                        <h5 className="text-green text-[15px]">
                          {sub.label}
                        </h5>
                        <div className="button mt-2">
                          <button className="text-thinGray text-[15px]">
                            Change &gt;
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inner Options Selector - only shown if a subcategory is selected */}
          {selectedSubcategory && (
            <div className="inner-wrap p-15 [box-shadow:0px_0px_19.4px_0px_#00000033] mt-12">
              <div className="multiple-options flex gap-12 flex-wrap">
                {selectedSubcategory.options.map((opt, index) => {
                  const isSelected = selectedOptions.some(
                    (o) =>
                      o.subcategoryId === selectedSubcategory.id &&
                      o.optionId === opt.id
                  );

                  return (
                    <div
                      key={`${selectedSubcategory.id}-${opt.id}`}
                      className={`color-options w-[160px] text-center cursor-pointer border-2 p-2 ${
                        isSelected ? "border-lightYellow" : "border-transparent"
                      }`}
                      onClick={() =>
                        handleOptionSelect(selectedSubcategory.id, opt)
                      }
                    >
                      <div className="image-wrap overflow-hidden h-[120px]">
                        <img
                          src={opt.image ? `${import.meta.env.VITE_API_DOMAIN}/${
                            opt.image}` : `https://placehold.co/250x250?text=ADU`}
                          alt={opt.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="details">
                        <h4 className="text-secondary-green text-xl font-bold mt-5">
                          {opt.name}
                        </h4>
                        <h5 className="text-green text-[15px]">
                          {selectedSubcategory.label}
                        </h5>
                        {index === 0 && (
                          <div className="button mt-2">
                            <span className="bg-thinGray text-white text-[15px] px-1 py-0.5 rounded">
                              Default
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="button text-end mt-5">
                <button
                  className="border-1 border-lightYellow bg-lightYellow text-white text-[19px] font-bold px-6 py-2 cursor-pointer"
                  onClick={() => setSelectedSubcategoryId(null)}
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      <CostSummary />
    </>
  );
}
