// components/Configurator.js
import React, { useState, useEffect, useRef } from "react";
import StepDefault from "./StepDefault";
import StepTabbed from "./StepTabbed";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../src/store/slices/configuratorSlice";

export default function Configurator() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [config, setConfig] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isCheckout, setIsCheckout] = useState(false);
  const containerRef = useRef(null);

  const selectedProduct = useSelector(
    (state) => state.configurator.selectedProduct
  );

  // Function to handle scrolling to top
  const scrollToTop = () => {
    // Try multiple methods to ensure scrolling works
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    // Also try smooth scrolling
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    // If containerRef exists, scroll that too
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Use effect to scroll when step changes - this ensures it happens after render
  useEffect(() => {
    if (currentStep > 0 || isCheckout) {
      // Don't scroll on initial load
      // Use requestAnimationFrame to wait for DOM updates, then add extra delay
      requestAnimationFrame(() => {
        setTimeout(() => {
          scrollToTop();
        }, 200); // Longer delay to ensure StepTabbed is fully rendered
      });
    }
  }, [currentStep, isCheckout]);

  // Redirect if page was reloaded and no selected product exists
  useEffect(() => {
    if (!selectedProduct || !selectedProduct.product_id) {
      // Reset redux state
      dispatch(setProduct(null));

      navigate("/", { replace: true });
    }
  }, [selectedProduct, navigate]);

  useEffect(() => {
    // fetch from your CodeIgniter backend
    if (selectedProduct) {
      axios
        .get(
          `${import.meta.env.VITE_API_DOMAIN}/admin/api/products/${
            selectedProduct.product_id
          }/floors/${selectedProduct.floor_id}/presentation`
        )
        .then((res) => setConfig(res.data))
        .catch((err) => console.error(err));
    }
  }, []);

  if (!config) return <div>Loading...</div>;

  const categories = config.categories;
  const currentCategory = categories[currentStep];
  let nextCategory = "";
  if (categories[currentStep + 1] != null) {
    nextCategory = categories[currentStep + 1].name;
  }

  const goNext = (isTabActive = true) => {
    if (!isTabActive) {
      setErrorMessage("Please select a style before proceeding."); // or set a state error
      return;
    }

    if (currentStep < categories.length - 1) {
      setCurrentStep(currentStep + 1);
      setErrorMessage("");
    } else {
      setIsCheckout(true);
      navigate("/checkout", { replace: true });
    }
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    if (currentStep > 0) {
      // Clone categories and remove the one at currentStep
      // const updatedCategories = [...selectedProduct.categories];
      // updatedCategories.splice(currentStep, 1); // remove the category at currentStep

      // const updatedProduct = {
      //   ...selectedProduct,
      //   categories: updatedCategories,
      // };
      // dispatch(setProduct(updatedProduct)); // update Redux state

      setCurrentStep((prev) => prev - 1);
      // window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Reset redux state
      dispatch(setProduct(null));

      navigate("/", { replace: true });
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {currentCategory.type === "default" ? (
        <StepDefault
          category={currentCategory}
          categories={categories}
          nextCategory={nextCategory}
          goBack={goBack}
          goNext={goNext}
          currentStep={currentStep}
          isLastStep={currentStep === categories.length - 1}
        />
      ) : (
        <StepTabbed
          category={currentCategory}
          categories={categories}
          nextCategory={nextCategory}
          goBack={goBack}
          goNext={goNext}
          errorMessage={errorMessage}
          currentStep={currentStep}
          isLastStep={currentStep === categories.length - 1}
        />
      )}
      {/* <section className="button pb-10 pt-0">
        <div className="container flex justify-between">
          <Button onClick={goBack} disabled={currentStep === 0}>
            {"< Back"}
          </Button>
          <Button onClick={goNext}>
            {currentStep === categories.length - 1 ? "Review >" : "Next >"}
          </Button>
        </div>
      </section> */}
    </div>
  );
}
