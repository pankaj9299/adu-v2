// components/StepFooterNav.jsx
import React from "react";
import Button from "./Button";
import StepDots from "./StepDots";

export default function StepFooterNav({
  goBack,
  goNext,
  currentStep,
  isLastStep,
  nextCategory,
  categories,
  className = "",
}) {
  return (
    <section className={`button py-0 ${className}`}>
      <div className="container">
        <div className="flex gap-3">
          <Button
            className="border-lightYellow text-white bg-lightYellow md:text-lg font-bold font-helvetica-neue-bold rounded-md pt-2 pb-1 px-5 hover:bg-green cursor-pointer"
            onClick={goBack}
            disabled={currentStep === 0}
          >
            {"< Back"}
          </Button>
          <Button
            className="border-lightYellow text-white bg-lightYellow md:text-lg font-bold font-helvetica-neue-bold rounded-md pt-2 pb-1 px-5 hover:bg-green cursor-pointer"
            onClick={goNext}
          >
            {isLastStep ? "Review >" : `${nextCategory.replace('Bathrooms (Downstairs & Upstairs)', 'Bathrooms').replace('Bedroom (Downstairs)', 'Bedrooms').replace('Bathrooms (Upstairs & Downstairs)', 'Bathrooms').replace('Entertainment Area (Upstairs)', 'Entertainment Area')} >`}
          </Button>
        </div>

        {Array.isArray(categories) && categories.length > 0 && (
          <StepDots categories={categories} currentStep={currentStep} />
        )}
      </div>
    </section>
  );
}
