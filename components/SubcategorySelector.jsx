import React, { useState } from "react";

export default function SubcategorySelector({
  subcategory,
  categoryId,
  categoryName,
  onSelectOption, // optional callback
}) {
  const [selectedOption, setSelectedOption] = useState({});

  const handleSelect = (opt, subCategory) => {
    const isExisted = selectedOption.subCategoryOptionId === parseInt(opt.id);

    if (!isExisted) {
      setSelectedOption({
        categoryId,
        categoryName,
        subCategoryId: parseInt(subCategory.id),
        subCategoryName: subCategory.name,
        subCategoryOptionId: parseInt(opt.id),
        subCategoryOptionName: opt.name,
        subCategoryOptionPrice: opt.price,
      });
    }

    if (onSelectOption) {
      onSelectOption(opt); // trigger callback only for first subcategory
    }
  };

  console.log("selectedOption", selectedOption);

  return (
    <div className="subcategory mt-10">
      <h3 className="text-[30px] inline-block w-full text-secondary-green mb-10">
        {subcategory.label}
      </h3>
      <div className="multiple-options flex flex-wrap gap-6">
        {subcategory.options.map((opt, idx) => {
          const selectedSub = selectedOption.subCategoryOptionId === parseInt(opt.id);

          return (
            <div
              key={idx}
              className={`color-options w-[150px] text-center cursor-pointer border-2 p-2 transition-all duration-150 w-[120px] ${
                selectedSub ? "border-lightYellow" : "border-transparent"
              }`}
              onClick={() => handleSelect(opt, subcategory)}
            >
              <div className="image-wrap overflow-hidden w-full h-[120px]">
                <img
                  src={`${import.meta.env.VITE_API_DOMAIN}/${opt.image}`}
                  alt={opt.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-secondary-green text-sm font-bold mt-3">
                {opt.name}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
