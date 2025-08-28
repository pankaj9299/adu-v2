function StepDots({ categories, currentStep }) {
  return (
    <div className="flex items-center gap-2 mt-3">
      {categories.map((cat, idx) => {
        const isActive = idx === currentStep; 
        const isCompleted = idx < currentStep;

        return (
          <span
            key={cat.id ?? idx}
            className={[
              "h-3 w-3 rounded-full transition-all duration-200",
              isActive
                ? "bg-lightYellow w-5" // active dot (highlighted & stretched)
                : isCompleted
                ? "bg-lightYellow"     // completed step
                : "bg-gray-300"     // upcoming step
            ].join(" ")}
          />
        );
      })}
    </div>
  );
}

export default StepDots;
