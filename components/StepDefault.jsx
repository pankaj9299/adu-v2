// components/StepDefault.js
import React, { useState } from "react";
import SubcategorySelector from "./SubcategorySelector";
import AddonsSelector from "./AddonsSelector";
import HeroBanner from "./HeroBanner";
import Intro from "./Intro";
import CostSummary from "./CostSummary";

export default function StepDefault({ category }) {
  const [selectedImageOption, setSelectedImageOption] = useState(null);

  const handleFirstSubcategoryChange = (selectedOption) => {
    // You can customize what "selectedOption" is (image URL, id, etc.)
    setSelectedImageOption(selectedOption);
  };

  return (
    <div>
      <HeroBanner selectedOption={selectedImageOption} />
      <Intro name={category.name} />
      <section class="multiple-color pt-0">
        <div class="container">
          {category.subcategories.map((sub, index) => (
            <SubcategorySelector
              key={sub.id}
              subcategory={sub}
              categoryId={category.id}
              categoryName={category.name}
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
      <CostSummary />
    </div>
  );
}
