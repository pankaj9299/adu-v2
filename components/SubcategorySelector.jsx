import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "../src/store/slices/configuratorSlice";

export default function SubcategorySelector({
  subcategory,
  category,
  onSelectOption, // optional callback
}) {
  // const [selectedOption, setSelectedOption] = useState({});
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.configurator.selectedProduct) || {};

  // Get the selected option for this subcategory from Redux
  const selectedOption =
    selectedProduct.categories
      ?.find((cat) => cat.id === category.id)
      ?.subcategories?.find((sub) => sub.id === subcategory.id)
      ?.selectedOption;

  const handleSelect = (opt, subCategory) => {
    const updatedCategories = selectedProduct.categories.map((cat) => {
      if (cat.id !== category.id) return cat;

      const updatedSubcategories = cat.subcategories.map((sub) => {
        if (sub.id !== subCategory.id) return sub;

        return {
          ...sub,
          selectedOption: opt,
          options: [opt], // update with only selected
        };
      });

      return {
        ...cat,
        subcategories: updatedSubcategories,
      };
    });

    dispatch(setProduct({
      ...selectedProduct,
      categories: updatedCategories,
    }));

    if (onSelectOption) {
      onSelectOption(opt); // trigger callback only for first subcategory
    }
  };

  return (
    <div className="subcategory">
      <h3 className="text-2xl font-helvetica-neue-bold inline-block w-full text-dark-teal mb-5">
        {subcategory.label}
      </h3>
      <div className="multiple-options flex flex-wrap gap-6 mb-10">
        {subcategory.options.map((opt, idx) => {
          const isSelected = selectedOption?.id === opt.id;

          return (
            <div
              key={idx}
              className={`color-options w-[150px] text-center cursor-pointer border-2 p-2 transition-all duration-150 w-[112px] ${
                isSelected ? "border-lightYellow" : "border-transparent"
              }`}
              onClick={() => handleSelect(opt, subcategory)}
            >
              <div className="image-wrap overflow-hidden w-full h-[130px]">
                <img
                  src={`${import.meta.env.VITE_API_DOMAIN}/${opt.image}`}
                  alt={opt.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-dark-green text-[19px] font-helvetica-neue-bold font-bold mt-3">
                {opt.name}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
