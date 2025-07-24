import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../src/store/slices/configuratorSlice";

export default function AddonsSelector({ addons, categoryId }) {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.configurator.selectedProduct);

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
      <h3 className="text-[30px] inline-block w-1/2 text-secondary-green mb-5 mt-10">
        Add-Ons
      </h3>
      <div className="buttons flex gap-6 flex-wrap">
        {addons.map((addon, idx) => {
          const isSelected = selectedAddons.some(
            (item) => item.id === parseInt(addon.id)
          );

          return (
            <div className="mt-2" key={idx}>
              <button
                type="button"
                onClick={() => toggleAddon(addon)}
                className={`border-lightYellow text-[19px] cursor-pointer font-bold px-6 py-2 ${
                  isSelected ? "bg-lightYellow text-white border-2" : "border-2"
                }`}
              >
                {addon.name} +
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
