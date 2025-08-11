import React, { useEffect } from "react";
import CostSummary from "./CostSummary";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../src/store/slices/configuratorSlice";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedProductState = useSelector(
    (state) => state.configurator.selectedProduct
  );
  // Redirect if page was reloaded and no selected product exists
  useEffect(() => {
    if (!selectedProductState || !selectedProductState.product_id) {
      // Reset redux state
      dispatch(setProduct(null));
      navigate("/", { replace: true });
    }
  }, [selectedProductState, navigate]);

  return (
    <>
      <section className="hero-banner">
        <div className="container">
          <div className="intro">
            <h1 className="md:text-[87px] font-normal text-secondary-green mb-10">
              Get Your Budget Proposal
            </h1>
            <h3 className="md:text-[30px] text-lightYellow mb-2">
              You created something beautiful. Now let’s make it yours.
            </h3>
            <h3 className="md:text-[30px] text-thinGray mb-10 max-sm:my-5">
              Request your full Budget Proposal below.
            </h3>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-[18px] font-normal text-thinGray"
              >
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder=""
                className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                style={{ boxShadow: "2px 6px 22.1px -3px rgba(0, 0, 0, 0.2)" }}
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-[18px] font-normal text-thinGray"
              >
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder=""
                className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                style={{ boxShadow: "2px 6px 22.1px -3px rgba(0, 0, 0, 0.2)" }}
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label
                htmlFor="email"
                className="block text-[18px] font-normal text-thinGray"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder=""
                className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                style={{ boxShadow: "2px 6px 22.1px -3px rgba(0, 0, 0, 0.2)" }}
              />
            </div>

            {/* Zip */}
            <div>
              <label
                htmlFor="zip"
                className="block text-[18px] font-normal text-thinGray"
              >
                Zip Code*
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                placeholder=""
                className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                style={{ boxShadow: "2px 6px 22.1px -3px rgba(0, 0, 0, 0.2)" }}
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-[18px] font-normal text-thinGray"
              >
                Phone Number*
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder=""
                className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                style={{ boxShadow: "2px 6px 22.1px -3px rgba(0, 0, 0, 0.2)" }}
              />
            </div>

            {/* Consent Note */}
            <div className="md:col-span-2">
              <p className="text-[15px] font-normal">
                By providing a telephone number and when scheduling your
                consultation you are consenting to be contacted by SMS text
                message. Message & data rates may apply. You can reply STOP to
                opt-out of further messaging.
              </p>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-1">
              <button
                type="submit"
                className="border-lightYellow border-1 text-lightYellow font-semibold py-2 px-6 text-[19px] font-bold hover:bg-blue-700 transition"
              >
                Get Budget Proposal
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Selection Summary */}
      <section className="step-two">
        <div className="container">
          <div className="intro">
            <h2 className="md:text-[87px] text-green font-normal md:mb-10">
              Your Selections
            </h2>
          </div>

          <div className="content-with-image flex flex-col md:flex-row gap-10 items-center md:mb-20">
            <div className="image-wrap w-full md:w-3/5 h-[350px] overflow-hidden">
              <img
                src={`${import.meta.env.VITE_API_DOMAIN}/${
                  selectedProductState?.product_image
                }`}
                alt="cutout"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-wrap w-full md:w-2/5">
              <h3
                className="font-normal inline-block text-center flex flex-col bg-darkRed rounded-[5px] rounded-l-none overflow-hidden py-1 px-2 text-white"
                style={{
                  clipPath:
                    "polygon(10% 0%, 99% 0%, 99% 100%, 0% 100%, 0% 30%)",
                }}
              >
                {selectedProductState?.product_name}
              </h3>
              <h4 className="max-sm:text-[20px] max-sm:my-2 md:text-[28px] text-green font-normal">
                {selectedProductState?.floor_name}
              </h4>
              <p className="md:text-[25px] mt-2 text-green font-normal">
                {selectedProductState?.product_subtitle}
              </p>
            </div>
          </div>

          <div className="image-wrap">
            <img
              src={`${import.meta.env.VITE_API_DOMAIN}/${
                selectedProductState?.floor_image
              }`}
              alt="top-view"
              className="mx-auto block"
            />
          </div>
        </div>
      </section>

      {/* Cost Summary */}
      {selectedProductState?.product_name && <CostSummary />}
    </>
  );
};

export default CheckoutForm;
