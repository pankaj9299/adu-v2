import React, { useState, useEffect } from "react";
import Button from "./Button";
import HeroBanner from "./HeroBanner";
import CostSummary from "./CostSummary";
import AddonsSelector from "./AddonsSelector";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Slider from "react-slick";

import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../src/store/slices/configuratorSlice";
import StepDots from "./StepDots";
import StepFooterNav from "./StepFooterNav";

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

export default function StepTabbed({
  category,
  categories,
  nextCategory,
  goBack,
  goNext,
  errorMessage,
  currentStep,
  isLastStep,
}) {
    const isBathroom =
      typeof category?.name === "string" &&
      category.name.trim().toLowerCase() === "bathroom";

  const [isMobile, setIsMobile] = useState(false);
  const [isTabActive, setIsTabActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dynamicOptions, setDynamicOptions] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null); // new state
  const [selectedImageOption, setSelectedImageOption] = useState(null);

  const currentTab = category.tabs[activeTab];

  const dispatch = useDispatch();
  const selectedStateProduct = useSelector(
    (state) => state.configurator.selectedProduct
  );

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

  // Grab current category from Redux
  const getCat = () =>
    selectedStateProduct?.categories?.find((c) => c.id === category.id);

  // Grab subcategory from Redux by id
  const getReduxSub = (subId) =>
    getCat()?.tab?.find((s) => String(s.id) === String(subId));

  // const resolveDisplayForSub = (sub) => {
  //   const rSub = getReduxSub(sub.id) ?? sub;
  //   const dyn = rSub.dynamicOption; // sub (initial) or option (after click)
  //   const opts = rSub.options ?? sub.options ?? [];

  //   // Build a fast membership set for THIS subcategory's options
  //   const idSet = new Set(opts.map((o) => String(o.id)));

  //   // Is dynamicOption an option that belongs to THIS sub?
  //   const dynIsOption = !!dyn && idSet.has(String(dyn.id));

  //   // Pick the active option for display fallbacks
  //   const activeOpt = dynIsOption
  //     ? dyn
  //     : rSub.selectedOption && idSet.has(String(rSub.selectedOption.id))
  //     ? rSub.selectedOption
  //     : opts[0] ?? null; // hard default to first option

  //   // Display fields
  //   const displayImage =
  //     (dynIsOption ? dyn?.image : dyn?.image) ?? // if dyn is sub and has image, use it
  //     rSub.image ??
  //     activeOpt?.image ??
  //     opts[0]?.image ??
  //     "";

  //   const displayName =
  //     (dynIsOption ? dyn?.name : dyn?.name) ??
  //     rSub.name ??
  //     activeOpt?.name ??
  //     "";

  //   const displaySubtitle =
  //     (dynIsOption ? dyn?.subtitle : dyn?.subtitle) ??
  //     rSub.subtitle ??
  //     activeOpt?.subtitle ??
  //     "";

  //   // Selected id for the ring — ALWAYS ensure it belongs to current opts

  //   const selectedIdForRing = dynIsOption
  //     ? String(dyn.id)
  //     : rSub.selectedOption && idSet.has(String(rSub.selectedOption.id))
  //     ? String(rSub.selectedOption.id)
  //     : opts[0]?.id != null
  //     ? String(opts[0].id)
  //     : null;

  //   return { displayImage, displayName, displaySubtitle, selectedIdForRing };
  // };

  // Use dynamicOption normally (after handleTab), but for the ACTIVE sub
  // (after handleColorOptionClick) read from selectedOption instead.

  const resolveDisplayForSub = (sub) => {
    const rSub = getReduxSub(sub.id) ?? sub;
    const opts = rSub.options ?? sub.options ?? [];

    const isActive = String(sub.id) === String(selectedSubcategoryId);

    // Pick the source object:
    // - Active sub: use selectedOption (or first option)
    // - Inactive sub: use dynamicOption (as set on handleTab), else fallbacks
    const source = isActive
      ? rSub.selectedOption ?? opts[0] ?? null
      : rSub.dynamicOption ?? opts[0] ?? null; // 👈 fallback to first option for inactive

    // For inactive subs, if dynamicOption is the sub itself (your workflow),
    // we still want to show its own name/image/subtitle; if it's an option, show that.
    const isOptionLike =
      !!source && opts.some((o) => String(o.id) === String(source.id));

    const displayImage =
      (isOptionLike ? source?.image : source?.image) ?? // option or sub, use its image if present
      rSub.image ??
      sub.image ??
      opts[0]?.image ??
      "";

    // ✅ Bathroom-only: lock title to subcategory name; others unchanged
    const displayName = isBathroom
      ? sub.name ?? rSub.name ?? ""
      : (isOptionLike ? source?.name : source?.name) ??
        rSub.name ??
        sub.name ??
        opts[0]?.name ??
        "";

    const displaySubtitle =
      (isOptionLike ? source?.subtitle : source?.subtitle) ??
      rSub.subtitle ??
      sub.subtitle ??
      "";

    // For slider highlighting we always use the active sub's selectedOption (or first option)
    const selectedIdForRing = isActive
      ? String(rSub.selectedOption?.id ?? opts[0]?.id ?? "")
      : null;

    return {
      displayImage,
      displayName,
      displaySubtitle,
      selectedIdForRing,
      isActive,
    };
  };

  const getSelectedOptionIdForSub = (sub) => {
    const rSub = getReduxSub(sub.id) ?? sub;
    const opts = rSub.options ?? sub.options ?? [];
    const selId = rSub.selectedOption?.id ?? opts[0]?.id ?? null; // default to first
    return selId != null ? String(selId) : null;
  };

  const handleOptionSelect = (subcategoryId, option) => {
    // 🔄 Update local UI state

    // setSelectedOptions((prev) => {
    //   const filtered = prev.filter(
    //     (item) => (item.subcategoryId ?? item.id) !== subcategoryId
    //   );
    //   return [
    //     ...filtered,
    //     {
    //       subcategoryId,
    //       id: option.id,
    //       name: option.name,
    //       image: option.image,
    //       selectedOption: option,
    //       dynamicOption: option,
    //     },
    //   ];
    // });

    // setDynamicOptions((prev) => {
    //   const filtered = prev.filter(
    //     (item) => (item.subcategoryId ?? item.id) !== subcategoryId
    //   );
    //   return [
    //     ...filtered,
    //     {
    //       subcategoryId,
    //       id: option.id,
    //       name: option.name,
    //       image: option.image,
    //       selectedOption: option,
    //       dynamicOption: option,
    //     },
    //   ];
    // });

    setDynamicOptions((prev) => {
      const without = prev.filter((e) => e.subId !== subcategoryId);
      return [...without, { subId: subcategoryId, selectedOption: option }];
    });

    setSelectedOptions((prev) => {
      const without = prev.filter((e) => e.subId !== subcategoryId);
      return [...without, { subId: subcategoryId, selectedOption: option }];
    });

    // ✅ Update Redux state for the selected option
    if (selectedStateProduct?.categories) {
      const updatedCategories = selectedStateProduct.categories.map((cat) => {
        if (cat.id !== category.id) return cat;

        return {
          ...cat,
          tab: cat.tab.map((sub) =>
            sub.id !== subcategoryId
              ? sub
              : { ...sub, selectedOption: option, dynamicOption: option }
          ),
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
    // setSelectedOptions([]);
    // setDynamicOptions([]);

    // State
    if (selectedStateProduct?.categories) {
      const updatedSubcategories = category.tabs[idx].subcategories.map(
        (sub) => {
          const firstOption = sub.options?.[0] || null;

          return {
            ...sub,
            // ✅ Make the "default" be the first slick item
            selectedOption: firstOption,
            dynamicOption: firstOption,
            //selectedOption: firstOption, // keep only the first option
            //dynamicOption: sub,
            // dynamicOption:
            //   sub.selectedOption && sub.selectedOption.length
            //     ? sub.selectedOption
            //     : [],
            options: sub?.options || [],
          };
        }
      );

      // ✅ Preserve previous microwave selection (if any)
      const prevCategory = selectedStateProduct.categories.find(
        (c) => c.id === category.id
      );

      const updatedCategory = {
        id: category.id,
        name: category.name,
        type: category.type,
        tabNo: idx,
        image: category.tabs[idx].image,
        tab: updatedSubcategories,
        microwave: prevCategory?.microwave ?? null, // <-- keep it
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

      // ✅ Immediately reflect defaults in local UI state too
      const normalized = updatedSubcategories.map((sub) => ({
        subId: sub.id,
        selectedOption: sub.selectedOption ?? sub.options?.[0] ?? null,
      }));
      setSelectedOptions(normalized);
      setDynamicOptions(normalized);
    }
  };

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
    // setDynamicOptions(currentCategoryFromRedux.tab);

    // ✅ Normalize: one entry per subcategory
    const normalized = currentCategoryFromRedux.tab.map((sub) => {
      const sel = sub.selectedOption ?? sub.options?.[0] ?? null;
      return {
        subId: sub.id, // <-- stable key
        selectedOption: sel, // <-- the chosen option for this sub
      };
    });
    setSelectedOptions(normalized);
    setDynamicOptions(normalized);
  }, [category, selectedStateProduct]);

  // ✅ Helper: currently selected microwave ids for this category (from Redux)
  const selectedMicrowaveIds = new Set(
    (
      selectedStateProduct?.categories?.find((c) => c.id === category.id)
        ?.microwave ?? []
    ).map((m) => m.microwave_id)
  );

  // ✅ NEW: handle microwave select (one at a time, replaces previous)
  const handleMicrowaveSelect = (microwaveItem) => {
    if (!selectedStateProduct?.categories) return;

    const MASTER_ID = 67;
    const MULTI_IDS = [68, 69, 70, 71];

    const currentCat =
      selectedStateProduct.categories.find((c) => c.id === category.id) ?? null;

    // Normalize current state to an array
    let current = Array.isArray(currentCat?.microwave)
      ? [...currentCat.microwave]
      : currentCat?.microwave
      ? [currentCat.microwave]
      : [];

    const byId = (id) => category.microwaves.find((m) => m.microwave_id === id);
    const hasId = (arr, id) => arr.some((m) => m.microwave_id === id);
    const removeId = (arr, id) => arr.filter((m) => m.microwave_id !== id);

    // Rule #2: clicking master -> keep only master
    if (microwaveItem.microwave_id === MASTER_ID) {
      current = [byId(MASTER_ID) ?? microwaveItem];
    } else {
      // We're toggling one of the multi items
      // If master is present, remove it first (since we're going into granular mode)
      current = removeId(current, MASTER_ID);

      if (hasId(current, microwaveItem.microwave_id)) {
        // toggle off
        current = removeId(current, microwaveItem.microwave_id);
      } else {
        // toggle on
        current = [...current, microwaveItem];
      }

      // Rule #1: if ALL multi ids are now selected, collapse to master only
      const allMultiSelected = MULTI_IDS.every((id) => hasId(current, id));
      if (allMultiSelected) {
        current = [
          byId(MASTER_ID) ?? { microwave_id: MASTER_ID, name: "Bundle" },
        ];
      }
    }

    // Write back to Redux
    const updatedCategories = selectedStateProduct.categories.map((cat) => {
      if (cat.id !== category.id) return cat;
      return { ...cat, microwave: current };
    });

    dispatch(
      setProduct({
        ...selectedStateProduct,
        categories: updatedCategories,
      })
    );
  };


  return (
    <>
      <HeroBanner selectedOption={selectedImageOption} />
      <section className="tab-with-slider p-0 relative md:-top-20">
        <div className={`container ${isTabActive && "mb-1"}`}>
          {/* Heading */}
          <div className="heading">
            <h2 className="text-marigold text-3xl mb-3 font-helvetica-neue-bold">
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
              <div className="multiple-options flex flex-col md:flex-row gap-x-8">
                {currentTab?.subcategories?.map((sub) => {
                  //const isActive = selectedSubcategoryId === sub.id;

                  const {
                    displayImage,
                    displayName,
                    displaySubtitle,
                    isActive,
                  } = resolveDisplayForSub(sub);

                  return (
                    <div
                      key={sub.id}
                      onClick={() => handleColorOptionClick(sub.id)}
                      className="md:flex-[1_1_16.666%] md:max-w-[16.666%] cursor-pointer relative"
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
                                ? `${
                                    import.meta.env.VITE_API_DOMAIN
                                  }/${displayImage}`
                                : `https://placehold.co/250x250?text=ADU`
                            }
                            alt={sub.label}
                            wrapperClassName="h-full w-full"
                            className="w-full h-full object-contain"
                            effect="opacity"
                            threshold={100}
                          />
                        </div>

                        <div
                          className={`details text-left mt-4 ${
                            isActive && "px-3"
                          } pb-4`}
                        >
                          <h4 className="text-secondary-green text-xl font-hn-bold-tight">
                            {displayName}
                          </h4>
                          <h5 className="text-green text-[15px]">
                            {displaySubtitle}
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
                            {sub.options.map((opt) => {
                              // const selectedId = getSelectedOptionIdForSub(sub);
                              // const isSelected = selectedId
                              //   ? String(opt.id) === selectedId
                              //   : index === 0;
                              const rSub = getReduxSub(sub.id) ?? sub;
                              const opts = rSub.options ?? sub.options ?? [];
                              const selectedId = String(
                                rSub.selectedOption?.id ?? opts[0]?.id ?? ""
                              );
                              const isSelected = String(opt.id) === selectedId;

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
                                      wrapperClassName="h-full"
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
                    // const selectedId =
                    //   getSelectedOptionIdForSub(selectedSubcategory);
                    // const isSelected = selectedId
                    //   ? String(opt.id) === selectedId
                    //   : index === 0;
                    const rSub =
                      getReduxSub(selectedSubcategory.id) ??
                      selectedSubcategory;
                    const opts =
                      rSub.options ?? selectedSubcategory.options ?? [];
                    const selectedId = String(
                      rSub.selectedOption?.id ?? opts[0]?.id ?? ""
                    );
                    const isSelected = String(opt.id) === selectedId;

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
                            wrapperClassName="h-full"
                            className="h-full w-full object-contain"
                            effect="opacity"
                            threshold={100}
                          />
                        </div>
                        <div className="details">
                          {/* Bathroom: hide title; subtitle styled like title. Others: unchanged */}
                          {!isBathroom && (
                            <h4 className="text-secondary-green text-xl font-bold mt-5">
                              {opt.name}
                            </h4>
                          )}
                          <h5
                            className={
                              isBathroom
                                ? "text-secondary-green text-xl font-bold mt-5"
                                : "text-green text-[15px]"
                            }
                          >
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

          {category.addons.length > 0 && isTabActive && (
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
      {isTabActive && category.microwaves.length > 0 && (
        <section className="Appliance pt-0">
          <div className="container">
            <div className="top-text">
              <div
                className="infomation flex gap-6 mt-1 text-[15px]"
                dangerouslySetInnerHTML={{ __html: category.body }}
              ></div>
            </div>
            <div className="add-on">
              <div className="heading">
                <h3 className="text-[25px] font-hn-bold-tight inline-block w-3/4 text-thinGray mt-8 mb-5">
                  Appliance Add-ons
                </h3>
              </div>
              <div className="wrapper flex flex-col md:flex-row gap-5">
                {category.microwaves.map((item, index) => {
                  const isSelected = selectedMicrowaveIds.has(item.microwave_id);
                  return (
                    <div
                      key={item.microwave_id}
                      onClick={() => handleMicrowaveSelect(item, index)}
                      className={`wrap md:flex-[1_1_20%] md:max-w-[20%] cursor-pointer relative border-2 rounded-lg transition px-3 py-1
                        ${
                          isSelected
                            ? "border-lightYellow"
                            : "border-transparent"
                        }`}
                    >
                      <div className="image-wrap overflow-hidden h-[165px] w-full ">
                        <LazyLoadImage
                          src={
                            item.image
                              ? `${import.meta.env.VITE_API_DOMAIN}/${
                                  item.image
                                }`
                              : `https://placehold.co/250x250?text=ADU`
                          }
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="title text-left">
                        <h4
                          className={`font-bold ${
                            index === 0
                              ? "text-xl text-marigold"
                              : "text-[18px]"
                          }`}
                        >
                          {item.name}
                        </h4>
                        <h5 className="text-green text-[15px] mt-1">
                          {item.subtitle}
                        </h5>
                        {item?.discount_price > 0 && (
                          <div className="price flex gap-2 mt-2">
                            <h5 className="text-green text-[15px] line-through">
                              ${item.price}
                            </h5>
                            <h5 className="text-green text-[15px] font-bold">
                              ${item.discount_price}
                            </h5>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bottom-text mt-4">
              <div className="column flex gap-10">
                <div className="image-wrap overflow-hidden ">
                  <LazyLoadImage
                    src={
                      category.microwave_root_image
                        ? `${import.meta.env.VITE_API_DOMAIN}/${
                            category.microwave_root_image
                          }`
                        : `https://placehold.co/250x250?text=ADU`
                    }
                    alt={category.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div
                  className="content-wrap "
                  dangerouslySetInnerHTML={{
                    __html: category.microwave_root_description,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      )}
      {selectedProduct?.product_name && (
        <>
          <StepFooterNav
            goBack={goBack}
            goNext={() => goNext(isTabActive)} // preserve your goNext(isTabActive) behavior
            currentStep={currentStep}
            isLastStep={isLastStep}
            nextCategory={nextCategory}
            categories={categories}
          />

          {/* Keep CostSummary; showFooterNav=false so we don’t render the footer twice */}
          <CostSummary
            showFooterNav={true}
            goBack={goBack}
            goNext={() => goNext(isTabActive)}
            currentStep={currentStep}
            isLastStep={isLastStep}
            nextCategory={nextCategory}
            categories={categories}
          />
        </>
      )}
    </>
  );
}
