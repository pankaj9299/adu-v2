// components/StepDefault.js
import React, { useState, useEffect } from "react";
import SubcategorySelector from "./SubcategorySelector";
import AddonsSelector from "./AddonsSelector";
import HeroBanner from "./HeroBanner";
import Intro from "./Intro";
import CostSummary from "./CostSummary";

import { setProduct } from "../src/store/slices/configuratorSlice";
import { useDispatch, useSelector } from "react-redux";
// import { mergeCategoryWithSubcategory } from "../utils/mergeCategory";

export default function StepDefault({ category }) {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.configurator.selectedProduct);

  const [selectedImageOption, setSelectedImageOption] = useState(null);

  const handleFirstSubcategoryChange = (selectedOption) => {
    // You can customize what "selectedOption" is (image URL, id, etc.)
    setSelectedImageOption(selectedOption);
  };

  useEffect(() => {
    if (!selectedProduct?.categories?.length) {
      const updatedSubcategories = category.subcategories.map((sub) => {
        const firstOption = sub.options?.[0] || null;
  
        return {
          ...sub,
          selectedOption: firstOption, // keep only the first option
          options: sub?.options || [], 
        };
      });
  
      const updatedCategory = {
        ...category,
        subcategories: updatedSubcategories,
        addons: [],
      };
  
      dispatch(
        setProduct({
          ...selectedProduct,
          categories: [updatedCategory],
        })
      );
    }
  }, [category, dispatch, selectedProduct]);  
  

  return (
    <div>
      <HeroBanner selectedOption={selectedImageOption} />
      <Intro name={category.name} />
      <section className="multiple-color pt-0">
        <div className="container">
          {category.subcategories.map((sub, index) => (
            <SubcategorySelector
              key={sub.id}
              subcategory={sub}
              category={category}
              onSelectOption={index === 0 ? handleFirstSubcategoryChange : null}
            />
          ))}
          <AddonsSelector
            addons={category.addons}
            categoryId={category.id}
            categoryName={category.name}
          />
        </div>
      </section>
      {selectedProduct?.product_name && <CostSummary />}
    </div>
  );
}
