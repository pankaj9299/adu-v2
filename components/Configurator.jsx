// components/Configurator.js
import React, { useState, useEffect } from "react";
import StepDefault from "./StepDefault";
import StepTabbed from "./StepTabbed";
import axios from "axios";
import Button from "./Button";

export default function Configurator() {
  const [config, setConfig] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // fetch from your CodeIgniter backend
    axios
      .get(
        `${
          import.meta.env.VITE_API_DOMAIN
        }/admin/api/products/1/floors/4/presentation`
      )
      .then((res) => setConfig(res.data))
      .catch((err) => console.error(err));
  }, []);

  console.log("config", config);

  if (!config) return <div>Loading...</div>;

  const categories = config.categories;
  const currentCategory = categories[currentStep];

  const goNext = () => {
    if (currentStep < categories.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Configuration complete!");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {currentCategory.type === "default" ? (
        <StepDefault category={currentCategory} />
      ) : (
        <StepTabbed category={currentCategory} />
      )}
      <section className="button pb-10 pt-0">
        <div className="container">
          <Button onClick={goNext}>
            {currentStep === categories.length - 1 ? "Review >" : "Next >"}
          </Button>
        </div>
      </section>
    </div>
  );
}
