import React, { useState, useEffect } from "react";
import Button from "./Button";
import HeroBanner from "./HeroBanner";
import CostSummary from "./CostSummary";

import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../src/store/slices/configuratorSlice";

export default function StepTabbed({ category, goBack, goNext, currentStep, isLastStep }) {
  const [isTabActive, setIsTabActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null); // new state
  const [selectedImageOption, setSelectedImageOption] = useState(null);

  const currentTab = category.tabs[activeTab];
  
  const dispatch = useDispatch();
  const selectedStateProduct = useSelector((state) => state.configurator.selectedProduct);

  const selectedProduct = useSelector(
    (state) => state.configurator.selectedProduct
  );

  const handleColorOptionClick = (subId) => {
    setSelectedSubcategoryId(subId);
  };

  const selectedSubcategory = currentTab?.subcategories?.find(
    (sub) => sub.id === selectedSubcategoryId
  );  

  const handleOptionSelect = (subcategoryId, option) => {
    // 🔄 Update local UI state
    setSelectedOptions((prev) => {
      const filtered = prev.filter(
        (item) => item.subcategoryId !== subcategoryId
      );
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
  
    // ✅ Update Redux state for the selected option
    if (selectedStateProduct?.categories) {
      const updatedCategories = selectedStateProduct.categories.map((cat) => {
        if (cat.id !== category.id) return cat;
  
        return {
          ...cat,
          tab: cat.tab.map((sub) => {
            if (sub.id !== subcategoryId) return sub;
  
            return {
              ...sub,
              selectedOption: option,
            };
          }),
        };
      });
  
      dispatch(
        setProduct({
          ...selectedStateProduct,
          categories: updatedCategories,
        })
      );
    }
  };  

  const handleTab = (idx) => {
    setSelectedImageOption(category.tabs[idx]);
    setIsTabActive(true);
    setActiveTab(idx);
    setSelectedSubcategoryId(null); // reset on tab change

    console.log('idxidx: ', category.tabs[idx]);
    console.log('V2 idxidx: ', category);
    // State
    if (selectedStateProduct?.categories) {
      const updatedSubcategories = category.tabs[idx].subcategories.map(
        (sub) => {
          const firstOption = sub.options?.[0] || null;

          return {
            ...sub,
            selectedOption: firstOption, // keep only the first option
            options: sub?.options || [],
          };
        }
      );

      const updatedCategory = {
        id: category.id,
        name: category.name,
        type: category.type,
        tabNo: idx,
        image: category.tabs[idx].image,
        tab: updatedSubcategories,
      };

      // 🔁 Merge into existing categories
      const mergedCategories = selectedStateProduct.categories.map((cat) =>
        cat.id === updatedCategory.id ? updatedCategory : cat
      );

      // 🧪 Check if category is not found, push it
      const categoryExists = selectedStateProduct.categories.some(
        (cat) => cat.id === updatedCategory.id
      );
      const finalCategories = categoryExists
        ? mergedCategories
        : [...selectedStateProduct.categories, updatedCategory];

      dispatch(
        setProduct({
          ...selectedStateProduct,
          categories: finalCategories,
        })
      );
    }
  }

  useEffect(() => {
    if (!selectedStateProduct?.categories?.length) return;
  
    const currentCategoryFromRedux = selectedStateProduct.categories.find(
      (cat) => cat.id === category.id
    );
  
    // Having no redux state data
    if (!currentCategoryFromRedux || !currentCategoryFromRedux.tab?.length) {
      setSelectedImageOption(category);
      return;  
    } 
  
    const tabIndex = currentCategoryFromRedux.tabNo ?? 0;
  
    setActiveTab(tabIndex);
    setIsTabActive(true);
  
    setSelectedImageOption(currentCategoryFromRedux);
  }, [category]);  
  console.log("selectedStateProduct", selectedStateProduct);
  // console.log('selectedOptions', selectedOptions);

  return (
    <>
      <HeroBanner selectedOption={selectedImageOption} />
      <section className="tab-with-slider">
        <div className="container">
          {/* Heading */}
          <div className="heading">
            <h2 className="text-[68px] inline-block w-1/2 text-dark-green mb-5">
              {category.name}
            </h2>
          </div>

          {/* Tabs */}
          <div className="tabs">
            <h3 className="text-[30px] inline-block text-dark-teal mb-5">
              Pick a Style
            </h3>
            <div className="buttons flex gap-6">
              {category.tabs.map((tab, idx) => (
                <div key={tab.id} className="mt-2">
                  <button
                    onClick={() => handleTab(idx)}
                    className={`border-1 border-lightYellow px-6 py-2 text-[19px] font-bold ${
                      isTabActive && activeTab === idx
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

          {isTabActive && (
            <div className="options">
              {" "}
              {/* Selected Tab Subcategory Overview */}
              <h3 className="text-[25px] inline-block w-3/4 text-thinGray my-10">
                This style comes with the following finishes:
              </h3>
              <div className="multiple-options flex gap-5 flex-wrap">
                {currentTab?.subcategories?.map((sub) => {
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
                            src={
                              firstOption?.image
                                ? `${import.meta.env.VITE_API_DOMAIN}/${
                                    firstOption?.image
                                  }`
                                : `https://placehold.co/250x250?text=ADU`
                            }
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
          )}

          {selectedSubcategory && (
            <div className="inner-wrap p-15 [box-shadow:0px_0px_19.4px_0px_#00000033] mt-12">
              {" "}
              {/* Inner Options Selector - only shown if a subcategory is selected */}
              <div className="multiple-options flex gap-12 flex-wrap">
                {selectedSubcategory.options.map((opt, index) => {
                  const selectedForThisSub = selectedOptions.find(
                    (o) => o.subcategoryId === selectedSubcategory.id
                  );

                  const isSelected = selectedForThisSub
                    ? selectedForThisSub.optionId === opt.id
                    : index === 0;

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
                          src={
                            opt.image
                              ? `${import.meta.env.VITE_API_DOMAIN}/${
                                  opt.image
                                }`
                              : `https://placehold.co/250x250?text=ADU`
                          }
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
      {selectedProduct?.product_name && (
        <>
          <section className="button pb-10 pt-10">
            <div className="container flex gap-5">
              <Button onClick={goBack} disabled={currentStep === 0}>
                {"< Back"}
              </Button>
              <Button onClick={goNext}>
                {isLastStep ? "Review >" : "Next >"}
              </Button>
            </div>
          </section>
          <CostSummary />
        </>
      )}
    </>
  );
}
