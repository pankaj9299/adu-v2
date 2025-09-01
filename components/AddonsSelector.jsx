import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../src/store/slices/configuratorSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function AddonsSelector({ addons, categoryId }) {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.configurator.selectedProduct) || {};

  // Get selected addons from Redux for this category
  const selectedAddons =
    selectedProduct.categories
      ?.find((cat) => cat.id === categoryId)
      ?.addons || [];

  const toggleAddon = (addon) => {
    const updatedCategories = selectedProduct.categories.map((cat) => {
      if (cat.id !== categoryId) return cat;

      const exists = selectedAddons.find((a) => a.id === parseInt(addon.id));
      let updatedAddons;

      if (exists) {
        updatedAddons = selectedAddons.filter((a) => a.id !== parseInt(addon.id));
      } else {
        updatedAddons = [
          ...selectedAddons,
          {
            id: parseInt(addon.id),
            name: addon.name,
            price: addon.price
          },
        ];
      }

      return {
        ...cat,
        addons: updatedAddons || [],
      };
    });

    dispatch(setProduct({
      ...selectedProduct,
      categories: updatedCategories,
    }));
  };

  return (
    <div className="third-option">
      <h3 className="text-[30px] inline-block w-1/2 text-dark-teal font-helvetica-neue-bold mb-5 md:mt-10">
        Add-Ons
      </h3>
      {/* <div className="buttons flex gap-6 flex-wrap">
        {addons.map((addon, idx) => {
          const isSelected = selectedAddons.some(
            (item) => item.id === parseInt(addon.id)
          );

          return (
            <div className="mt-2" key={idx}>
              <button
                type="button"
                onClick={() => toggleAddon(addon)}
                className={`border-lightYellow text-[19px] cursor-pointer font-bold font-helvetica-neue-bold px-6 h-12 flex items-center justify-center pt-[3px] ${
                  isSelected ? "bg-lightYellow text-white border-2" : "border-2"
                }`}
              >
                {addon.name} +
              </button>
            </div>
          );
        })}
      </div> */}
      <div className="multiple-options flex flex-wrap gap-x-0 sm:gap-6 mb-10">
        {addons.map((opt, idx) => {
          const isSelected = selectedAddons.some(
            (item) => item.id === parseInt(opt.id)
          );

          return (
            <div
              key={idx}
              className={`color-options w-1/2 [@media(max-width:370px)]:w-full sm:w-[150px] text-center cursor-pointer border-2 p-2 transition-all duration-150 ${
                isSelected ? "border-lightYellow" : "border-transparent"
              }`}
              onClick={() => toggleAddon(opt)}
            >
              <div className="image-wrap overflow-hidden w-full h-[130px]">
                <LazyLoadImage
                  src={`${import.meta.env.VITE_API_DOMAIN}/${opt.image}`}
                  alt={opt.name}
                  wrapperClassName="h-100"
                  className="w-full h-full object-cover"
                  effect="opacity"
                  threshold={100}
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
