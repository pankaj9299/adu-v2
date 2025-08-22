import React, { useState, useEffect } from "react";
import Button from "./Button";
import HeroBanner from "./HeroBanner";
import CostSummary from "./CostSummary";
import AddonsSelector from "./AddonsSelector";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Slider from "react-slick";

import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../src/store/slices/configuratorSlice";

function SampleNextArrow({ className, style, onClick }) {
  return (
    <div
      className={`${className} !block absolute top-1/2 -translate-y-1/2 right-0 z-20`}
      style={{
        ...style,
        color: "red",
        width: "30px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ className, style, onClick }) {
  return (
    <div
      className={`${className} !block absolute top-1/2 -translate-y-1/2 left-0 z-20`}
      style={{
        ...style,
        color: "green",
        width: "30px",
      }}
      onClick={onClick}
    />
  );
}

export default function StepTabbed({ category, goBack, goNext, errorMessage, currentStep, isLastStep }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTabActive, setIsTabActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null); // new state
  const [selectedImageOption, setSelectedImageOption] = useState(null); 

  const currentTab = category.tabs[activeTab];
  
  const dispatch = useDispatch();
  const selectedStateProduct = useSelector((state) => state.configurator.selectedProduct);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const selectedProduct = useSelector(
    (state) => state.configurator.selectedProduct
  );

  const handleColorOptionClick = (subId) => {
    setSelectedSubcategoryId(subId);
  };

  const selectedSubcategory = currentTab?.subcategories?.find(
    (sub) => sub.id === selectedSubcategoryId
  );  

  // Slick configurations
  const optionCount = selectedSubcategory?.options?.length || 0;
  const settings = {
    dots: false,
    infinite: optionCount > 6, // Only infinite if more than 6
    slidesToShow: optionCount > 6 ? 6 : 6,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: optionCount > 6 ? 4 : Math.min(optionCount, 2),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(optionCount, 1),
        },
      },
    ],
  };

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
    if (!selectedStateProduct?.categories?.length) {
      return;
    } 
  
    const currentCategoryFromRedux = selectedStateProduct.categories.find(
      (cat) => cat.id === category.id
    );
  
    // Having no redux state data
    if (!currentCategoryFromRedux || !currentCategoryFromRedux.tab?.length) {
      setSelectedImageOption(category);
      setActiveTab(0);
      setIsTabActive(false);
      return;  
    } 
  
    const tabIndex = currentCategoryFromRedux.tabNo ?? 0;
  
    setActiveTab(tabIndex);
    setIsTabActive(true);
  
    setSelectedImageOption(currentCategoryFromRedux);
  }, [category]);  
  // console.log('selectedOptions', selectedOptions);

  return (
    <>
      <HeroBanner selectedOption={selectedImageOption} />
      <section className="tab-with-slider p-0 relative md:-top-20">
        <div className={`container ${isTabActive && 'mb-1'}`}>
          {/* Heading */}
          <div className="heading">
            <h2 className="text-marigold text-5xl font-helvetica-neue-bold">
              {category.name}
            </h2>
          </div>

          {/* Tabs */}
          <div className="tabs">
            <h3 className="text-2xl font-hn-bold-tight inline-block w-full text-dark-teal mb-2">
              Pick a Style
            </h3>
            <div className="buttons flex flex-col md:flex-row gap-6">
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
              <h3 className="text-2xl font-hn-bold-tight inline-block w-3/4 text-thinGray mt-10 mb-5">
                This style comes with the following finishes:
              </h3>
              <div className="multiple-options flex flex-col md:flex-row gap-5">
                {currentTab?.subcategories?.map((sub) => {
                  const selectedForThisSub = selectedOptions.find(
                    (o) => o.subcategoryId === sub.id
                  );

                  const displayImage = selectedForThisSub?.image || sub.options[0]?.image;
                  //const firstOption = sub.options[0];
                  const isActive = selectedSubcategoryId === sub.id;
                  return (
                    <div
                      key={sub.id}
                      onClick={() => handleColorOptionClick(sub.id)}
                      className="md:flex-[1_1_20%] md:max-w-[20%] cursor-pointer relative"
                    >
                      {/* Shadow layer */}
                      {isActive && (
                        <div className="absolute inset-0 z-0 shadow-lg rounded-lg bg-white scale-105 transition-all duration-200"></div>
                      )}

                      {/* Main content */}
                      <div className="relative z-10">
                        <div className="image-wrap overflow-hidden h-[177px] w-full rounded-md">
                          <LazyLoadImage
                            src={
                              displayImage
                                ? `${import.meta.env.VITE_API_DOMAIN}/${displayImage}`
                                : `https://placehold.co/250x250?text=ADU`
                            }
                            alt={sub.label}
                            className="w-full h-full object-contain"
                            effect="opacity"
                            threshold={100}
                          />
                        </div>

                        <div className={`details text-left mt-4 ${isActive && 'px-3'} pb-4`}>
                          <h4 className="text-secondary-green text-xl font-hn-bold-tight">
                            {sub?.name}
                          </h4>
                          <h5 className="text-green text-[15px]">
                            {sub.subtitle}
                          </h5>
                          <div className="button mt-2">
                            <button className="text-thinGray text-[15px]">
                              Change &gt;
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Inner Wrap – directly under card */}
                      {isMobile && isActive && (
                        <div className="inner-wrap mt-5 p-4 shadow-lg bg-white rounded-lg">
                          <Slider {...settings}>
                            {sub.options.map((opt, index) => {
                              const selectedForThisSub = selectedOptions.find(
                                (o) => o.subcategoryId === sub.id
                              );
                              const isSelected = selectedForThisSub
                                ? selectedForThisSub.optionId === opt.id
                                : index === 0;

                              return (
                                <div
                                  key={`${sub.id}-${opt.id}`}
                                  className={`w-full px-2 text-center cursor-pointer border-2 p-2 ${
                                    isSelected
                                      ? "border-lightYellow"
                                      : "border-transparent"
                                  }`}
                                  onClick={() =>
                                    handleOptionSelect(sub.id, opt)
                                  }
                                >
                                  <div className="image-wrap overflow-hidden h-[120px]">
                                    <LazyLoadImage
                                      src={
                                        opt.image
                                          ? `${
                                              import.meta.env.VITE_API_DOMAIN
                                            }/${opt.image}`
                                          : `https://placehold.co/250x250?text=ADU`
                                      }
                                      alt={opt.name}
                                      className="h-full w-full object-contain"
                                      effect="opacity"
                                      threshold={100}
                                    />
                                  </div>
                                  <h4 className="text-secondary-green text-xl font-bold mt-5">
                                    {opt.name}
                                  </h4>
                                </div>
                              );
                            })}
                          </Slider>
                          <div className="button text-end mt-10 relative">
                            <button
                              className="border border-lightYellow bg-lightYellow text-white text-[19px] font-bold px-6 py-2"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedSubcategoryId(null); // close on "Done"
                              }}
                            >
                              Done
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {!isMobile && selectedSubcategory && (
            <div className="inner-wrap p-15 [box-shadow:0px_0px_19.4px_0px_#00000033] mt-12">
              {" "}
              {/* Inner Options Selector - only shown if a subcategory is selected */}
              <div className="slick-wrapper w-full overflow-hidden relative">
                <Slider {...settings}>
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
                        // className={`w-full max-w-[160px] text-center cursor-pointer border-2 p-2 mx-auto ${
                        //   isSelected ? "border-lightYellow" : "border-transparent"
                        // }`}
                        className={`w-full px-2 text-center cursor-pointer border-2 p-2 ${
                          isSelected
                            ? "border-lightYellow"
                            : "border-transparent"
                        }`}
                        onClick={() =>
                          handleOptionSelect(selectedSubcategory.id, opt)
                        }
                      >
                        <div className="image-wrap overflow-hidden h-[120px]">
                          <LazyLoadImage
                            src={
                              opt.image
                                ? `${import.meta.env.VITE_API_DOMAIN}/${
                                    opt.image
                                  }`
                                : `https://placehold.co/250x250?text=ADU`
                            }
                            alt={opt.name}
                            className="h-full w-full object-contain"
                            effect="opacity"
                            threshold={100}
                          />
                        </div>
                        <div className="details">
                          <h4 className="text-secondary-green text-xl font-bold mt-5">
                            {opt.name}
                          </h4>
                          <h5 className="text-green text-[15px]">
                            {opt.subtitle}
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
                </Slider>
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

          {(category.addons.length > 0 && isTabActive) && (
            <AddonsSelector
              addons={category.addons}
              categoryId={category.id}
              categoryName={category.name}
            />
          )}
          {errorMessage && !isTabActive && (
            <div className="error-message text-red-500 text-center pt-5">
              {errorMessage}
            </div>
          )}
        </div>
      </section>
      {selectedProduct?.product_name && (
        <>
          <section className="button p-0">
            <div className="container flex gap-5">
              <Button onClick={goBack} disabled={currentStep === 0}>
                {"< Back"}
              </Button>
              <Button onClick={() => goNext(isTabActive)}>
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
