// components/Configurator.js
import React, { useState, useEffect } from "react";
import StepDefault from "./StepDefault";
import StepTabbed from "./StepTabbed";
import axios from "axios";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../src/store/slices/configuratorSlice";

export default function Configurator() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [config, setConfig] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const selectedProduct = useSelector((state) => state.configurator.selectedProduct);

  // Redirect if page was reloaded and no selected product exists
  useEffect(() => {
    if (!selectedProduct || !selectedProduct.product_id) {
      // Reset redux state
      dispatch(setProduct(null));
      
      navigate('/', { replace: true });
    }
  }, [selectedProduct, navigate]);

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

  const goBack = () => {
    if (currentStep > 0) {
      console.log('currentStep', currentStep);

      // Clone categories and remove the one at currentStep
      // const updatedCategories = [...selectedProduct.categories];
      // updatedCategories.splice(currentStep, 1); // remove the category at currentStep

      // const updatedProduct = {
      //   ...selectedProduct,
      //   categories: updatedCategories,
      // };
      // dispatch(setProduct(updatedProduct)); // update Redux state
      
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Reset redux state
      dispatch(setProduct(null));

      navigate('/', { replace: true });
    }
  };

  return (
    <div>
      {currentCategory.type === "default" ? (
        <StepDefault category={currentCategory} />
      ) : (
        <StepTabbed category={currentCategory} />
      )}
      <section className="button pb-10 pt-0">
        <div className="container flex justify-between">
          <Button onClick={goBack} disabled={currentStep === 0}>
            {"< Back"}
          </Button>
          <Button onClick={goNext}>
            {currentStep === categories.length - 1 ? "Review >" : "Next >"}
          </Button>
        </div>
      </section>
    </div>
  );
}
