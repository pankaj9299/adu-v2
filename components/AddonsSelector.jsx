import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../src/store/slices/configuratorSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function AddonsSelector({
  addons,
  categoryId,
  onSelectAddon,
  label = "",
}) {
  const dispatch = useDispatch();
  const selectedProduct =
    useSelector((state) => state.configurator.selectedProduct) || {};

  // Get selected addons from Redux for this category
  const selectedAddons =
    selectedProduct.categories?.find((cat) => cat.id === categoryId)?.addons ||
    [];

  const resolveImageUrl = (raw) =>
    raw ? `${import.meta.env.VITE_API_DOMAIN}/${raw}` : null;

  const toPayload = (addon) => ({
    id: parseInt(addon.id),
    name: addon.name,
    price: addon.price,
    image: resolveImageUrl(addon.image),
  });

  const toggleAddon = (addon) => {
    const clicked = toPayload(addon);
    const exists = selectedAddons.find((a) => a.id === clicked.id);

    const updatedCategories = selectedProduct.categories.map((cat) => {
      if (cat.id !== categoryId) return cat;

      let updatedAddons;
      if (exists) {
        updatedAddons = selectedAddons.filter((a) => a.id !== clicked.id);
      } else {
        // append to keep selection order (recency)
        updatedAddons = [
          ...selectedAddons,
          { id: clicked.id, name: clicked.name, price: clicked.price },
        ];
      }

      return {
        ...cat,
        addons: updatedAddons || [],
      };
    });

    dispatch(
      setProduct({
        ...selectedProduct,
        categories: updatedCategories,
      })
    );

    // ---- NEW: notify parent with updated list (including images) ----
    if (onSelectAddon) {
      const updatedListIds =
        updatedCategories.find((c) => c.id === categoryId)?.addons || [];

      // Enrich updated list with images for the banner
      const selectedList = updatedListIds.map((a) => {
        const full = addons.find((x) => parseInt(x.id) === a.id);
        return {
          id: a.id,
          name: a.name,
          price: a.price,
          image: resolveImageUrl(full?.image),
        };
      });

      onSelectAddon({
        isSelected: !exists, // true if now selected, false if removed
        clicked, // {id, name, price, image}
        selectedList, // updated list (ordered)
      });
    }
  };

  return (
    <div className="third-option">
      {label && (
        <h2 className="text-marigold text-3xl font-helvetica-neue-bold md:mt-10">
          {label}
        </h2>
      )}
      <h3
        className={`text-2xl inline-block w-1/2 text-dark-teal font-helvetica-neue-bold ${
          label ? "mb-5" : "mb-5 md:mt-10"
        }`}
      >
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
      <div className="multiple-options flex flex-wrap gap-x-0 sm:gap-6">
        {addons.map((opt, idx) => {
          const isSelected = selectedAddons.some(
            (item) => item.id === parseInt(opt.id)
          );

          return (
            <div
              key={idx}
              className={`color-options w-1/2 [@media(max-width:370px)]:w-full ${
                // label ? "sm:w-[250px]" : "sm:w-[200px]"
                label ? "sm:w-[250px]" : "sm:w-[250px]"
              } text-center cursor-pointer border-2 p-2 transition-all duration-150 ${
                isSelected ? "border-lightYellow" : "border-transparent"
              }`}
              onClick={() => toggleAddon(opt)}
            >
              <div
                className={`image-wrap overflow-hidden w-full h-[${
                  // label ? "230" : "170"
                  label ? "230" : "230"
                }px]`}
              >
                <LazyLoadImage
                  src={`${import.meta.env.VITE_API_DOMAIN}/${opt.image}`}
                  alt={opt.name}
                  wrapperClassName="h-full"
                  className="w-full h-full object-cover"
                  effect="opacity"
                  threshold={100}
                />
              </div>
              <h4 className="text-marigold text-[19px] font-helvetica-neue-bold font-bold tracking-[-2%] mt-3">
                + {opt.name}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
