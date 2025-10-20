// components/StepDefault.js
import React, { useState, useEffect } from "react";
import SubcategorySelector from "./SubcategorySelector";
import AddonsSelector from "./AddonsSelector";
import HeroBanner from "./HeroBanner";
import Intro from "./Intro";
//import Button from "./Button";
import CostSummary from "./CostSummary";

import { setProduct } from "../src/store/slices/configuratorSlice";
import { useDispatch, useSelector } from "react-redux";
import StepDots from "./StepDots";
import StepFooterNav from "./StepFooterNav";
import { approxMonthlyPayment } from "../utils/helpers";
// import { mergeCategoryWithSubcategory } from "../utils/mergeCategory";

export default function StepDefault({
  category,
  categories,
  nextCategory,
  goBack,
  goNext,
  currentStep,
  isLastStep,
}) {
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state) => state.configurator.selectedProduct
  );

  const [selectedImageOption, setSelectedImageOption] = useState(null);

  const handleFirstSubcategoryChange = (selectedOption) => {
    // You can customize what "selectedOption" is (image URL, id, etc.)
    setSelectedImageOption(selectedOption);
  };

  // useEffect(() => {
  //   if (!selectedProduct?.categories?.length) {
  //     const updatedSubcategories = category.subcategories.map((sub) => {
  //       const firstOption = sub.options?.[0] || null;

  //       return {
  //         ...sub,
  //         selectedOption: firstOption, // keep only the first option
  //         options: sub?.options || [],
  //       };
  //     });

  //     const updatedCategory = {
  //       ...category,
  //       subcategories: updatedSubcategories,
  //       addons: [],
  //     };

  //     dispatch(
  //       setProduct({
  //         ...selectedProduct,
  //         categories: [updatedCategory],
  //       })
  //     );
  //   }
  // }, [category, dispatch, selectedProduct]);

  useEffect(() => {
    const existing = selectedProduct?.categories?.find(
      (cat) => cat.id === category.id
    );
    const hasFirstSubcategory = existing?.subcategories?.length > 0;
    const firstSelectedOption = existing?.subcategories?.[0]?.selectedOption;
    if (hasFirstSubcategory) {
      setSelectedImageOption(firstSelectedOption);
    } else {
      setSelectedImageOption(category);
    }
  }, [category]);

  useEffect(() => {
    if (!category || !category.id) return;

    const existingCategories = selectedProduct?.categories || [];

    const categoryExists = existingCategories.some(
      (cat) => cat.id === category.id
    );

    if (!categoryExists) {
      const updatedSubcategories = category.subcategories.map((sub) => {
        const firstOption = sub.options?.[0] || null;

        return {
          ...sub,
          selectedOption: firstOption,
          options: sub.options || [],
        };
      });

      const newCategory = {
        ...category,
        subcategories: updatedSubcategories,
        addons: [],
      };

      const updatedProduct = {
        ...selectedProduct,
        categories: [...existingCategories, newCategory],
      };

      dispatch(setProduct(updatedProduct));
    }
  }, [category, dispatch, selectedProduct]);

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

  const calculateTotal = () => {
    const basePrice = parsePrice(selectedProduct.product_price);

    const categories = selectedProduct.categories || [];

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

    return (basePrice + categoryTotal).toLocaleString();
  };

  // Monthly calculations
  const principalRaw = calculateTotal();
  const monthly = approxMonthlyPayment(principalRaw, 6, 30);

  // helper to normalize an addon object to what HeroBanner expects
  const toBannerOptionFromAddon = (addon) => {
    // Try common fields; keep the whole object so HeroBanner can pick what it needs.
    const image =
      addon?.image ||
      addon?.img ||
      addon?.image_url ||
      addon?.photo ||
      addon?.thumbnail ||
      addon?.url ||
      addon?.src ||
      null;

    return { ...addon, image };
  };

  // Only-addons mode (no subcategories present)
  const onlyAddonsMode =
    (category?.subcategories?.length || 0) === 0 &&
    (category?.addons?.length || 0) > 0;

  // When user clicks an addon and we're in only-addons mode, update banner
  const handleAddonClickForBanner = (addon) => {
    if (!onlyAddonsMode) return; // guard (extra safety)
    setSelectedImageOption(toBannerOptionFromAddon(addon));
  };

  return (
    <div>
      <HeroBanner selectedOption={selectedImageOption} />
      <Intro name={category.name} />
      {category.subcategories.length === 0 && category.addons.length === 0 ? (
        <section className="multiple-color py-20">
          <div className="container">
            <h3 className="text-center">
              No selections to be made here. Please proceed.
            </h3>
          </div>
        </section>
      ) : (
        <section className="multiple-color p-0 relative md:-top-15">
          <div className="container">
            {category.subcategories.map((sub, index) => (
              <SubcategorySelector
                key={sub.id}
                subcategory={sub}
                category={category}
                onSelectOption={
                  index === 0 ? handleFirstSubcategoryChange : null
                }
              />
            ))}
            {category.addons.length > 0 && (
              <AddonsSelector
                addons={category.addons}
                categoryId={category.id}
                categoryName={category.name}
                // pass the click handler ONLY when there are no subcategories
                onSelectAddon={
                  onlyAddonsMode ? handleAddonClickForBanner : undefined
                }
              />
            )}
            {/* Monthly Expenses */}
            <div className="max-w-[700px] flex items-center justify-between border-b border-gray pb-2 mt-10">
              <h3 className="text-2xl text-dark-teal font-helvetica-neue-bold mb-0">
                Approximate Monthly Payment
              </h3>
              <p className="text-[#263824] text-xl font-bold">
                {monthly != null ? `$${monthly} /month` : "—"}
              </p>
            </div>
            <p className="text-[#263824] text-sm mt-3">
              *Based on a 30-year term at 6%. This is an estimate only. Actual
              financing terms may vary.
            </p>
          </div>
        </section>
      )}
      {/* {selectedProduct?.product_name && <CostSummary />} */}
      {selectedProduct?.product_name && (
        <>
          {/* <section className="button py-0">
            <div className="container">
              <div className="flex gap-3">
                <Button 
                  className="border-lightYellow text-white bg-lightYellow md:text-lg font-bold font-helvetica-neue-bold rounded-md pt-2 pb-1 px-5 hover:bg-green cursor-pointer"
                  onClick={goBack} disabled={currentStep === 0}>
                  {"< Back"}
                </Button>
                <Button 
                  className="border-lightYellow text-white bg-lightYellow md:text-lg font-bold font-helvetica-neue-bold rounded-md pt-2 pb-1 px-5 hover:bg-green cursor-pointer"
                  onClick={goNext}>
                  {isLastStep ? "Review >" : `${nextCategory} >`}
                </Button>
              </div>
              <StepDots categories={categories} currentStep={currentStep} />
            </div>
          </section> */}
          <StepFooterNav
            goBack={goBack}
            goNext={goNext}
            currentStep={currentStep}
            isLastStep={isLastStep}
            nextCategory={nextCategory}
            categories={categories}
          />
          <CostSummary
            // pass through if you want CostSummary to also show the same footer,
            // set to false if you ONLY want the footer here:
            showFooterNav={true}
            goBack={goBack}
            goNext={goNext}
            currentStep={currentStep}
            isLastStep={isLastStep}
            nextCategory={nextCategory}
            categories={categories}
          />
        </>
      )}
    </div>
  );
}
