import React, { useState } from "react";

export default function AddonsSelector({ addons, categoryId, categoryName }) {
  const [selectedAddons, setSelectedAddons] = useState([]);

  const toggleAddon = (addon) => {
    setSelectedAddons((prev) => {
      const exists = prev.find((a) => a.addonId === parseInt(addon.id));
      if (exists) {
        return prev.filter((a) => a.addonId !== parseInt(addon.id));
      } else {
        return [...prev, { 
          addonName: addon.name, 
          addonId: parseInt(addon.id),
          categoryId,
          categoryName 
        }];
      }
    });
  };

  console.log("selectedAddons", selectedAddons);

  return (
    <div className="third-option">
      <h3 className="text-[30px] inline-block w-1/2 text-secondary-green mb-5 mt-10">
        Add-Ons
      </h3>
      <div className="buttons flex gap-6 flex-wrap">
        {addons.map((addon, idx) => {
          const isSelected = selectedAddons.some(item => item.addonId === parseInt(addon.id));
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
