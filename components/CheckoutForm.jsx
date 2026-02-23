import React, { useEffect, useState } from "react";
import CostSummary from "./CostSummary";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../src/store/slices/configuratorSlice";
import { useNavigate } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import { findImageByProduct } from "../utils/helpers";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formError, setFormError] = useState("");

  const selectedProductState = useSelector(
    (state) => state.configurator.selectedProduct,
  );
  const productHeadImageUrl = findImageByProduct(
    selectedProductState?.product_name,
  );

  console.log("VRRR", selectedProductState);

  const [filePath, setFilePath] = useState(null);
  const [loading, setLoading] = useState(false);

  // Redirect if page was reloaded and no selected product exists
  useEffect(() => {
    if (!selectedProductState || !selectedProductState.product_id) {
      // Reset redux state
      dispatch(setProduct(null));
      navigate("/models", { replace: true });
    }
  }, [selectedProductState, navigate]);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
    phone: "",
    consent: false,
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user interacts
    if (formError) setFormError("");
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error
    setFormError("");
    if (formData.phone.trim() && !formData.consent) {
      setFormError("consent_required");
      return;
    }

    setLoading(true); // disable form + show loading
    try {
      const payload = {
        ...formData,
        selectedProduct: selectedProductState,
      };

      console.log("payload", payload);

      const response = await axios.post(
        `${import.meta.env.VITE_API_DOMAIN}/pdfgenerator-save-and-email`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false, // set true only if using cookies/sessions
        },
      );

      if (response.status === 200 && response.data?.filePath) {
        setFilePath(response.data.filePath); // store link
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false); // only re-enable if still showing form
    }
  };

  return (
    <>
      <section className="hero-banner">
        <div className="container">
          <div className="intro">
            <h1 className="md:text-[87px] tracking-[-0.05em] font-normal text-secondary-green mb-10">
              Get Your Budgetary Proposal
            </h1>
            <h3 className="md:text-[30px] text-lightYellow font-helvetica-neue-bold tracking-[-0.02em] mb-4">
              You created something beautiful. Now let’s make it yours.
            </h3>
            <h3 className="md:text-[30px] text-thinGray font-helvetica-neue-bold tracking-[-0.02em] mb-10 max-sm:my-5">
              Request your full Budget Proposal below.
            </h3>
          </div>
          {!filePath ? (
            <>
              {formError === "consent_required" && (
                <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-300">
                  <p className="text-red-600 text-sm font-medium">
                    You must agree to the{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-semibold hover:text-red-800"
                    >
                      Privacy Policy
                    </a>{" "}
                    and consent to being contacted before submitting this form.
                  </p>
                </div>
              )}
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                onSubmit={handleSubmit}
              >
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
                    value={formData.firstName}
                    disabled={loading}
                    onChange={handleChange}
                    placeholder=""
                    className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                    style={{
                      boxShadow: "2px 6px 22.1px -3px rgba(0, 0, 0, 0.2)",
                    }}
                    required
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
                    value={formData.lastName}
                    disabled={loading}
                    onChange={handleChange}
                    required
                    placeholder=""
                    className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                    style={{
                      boxShadow: "2px 6px 22.1px -3px rgba(0, 0, 0, 0.2)",
                    }}
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
                    value={formData.email}
                    disabled={loading}
                    onChange={handleChange}
                    required
                    placeholder=""
                    className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                    style={{
                      boxShadow: "2px 6px 22.1px -3px rgba(0, 0, 0, 0.2)",
                    }}
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
                    value={formData.zip}
                    disabled={loading}
                    onChange={handleChange}
                    required
                    placeholder=""
                    className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                    style={{
                      boxShadow: "2px 6px 22.1px -3px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[18px] font-normal text-thinGray"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    disabled={loading}
                    onChange={handleChange}
                    placeholder=""
                    className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                    style={{
                      boxShadow: "2px 6px 22.1px -3px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>

                {/* Consent Note */}
                <div className="md:col-span-2">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      disabled={loading}
                      className="mt-1"
                    />

                    <p className="text-[15px] font-normal">
                      By submitting this form, you agree to our <Link className="underline font-semibold hover:text-red-800" to="/privacy-policy">Privacy Policy</Link>
                       and consent to being contacted regarding your inquiry.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 mt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`border-lightYellow hover:bg-lightYellow hover:text-white cursor-pointer border-1 font-semibold py-2 px-6 text-[19px] font-bold transition ${
                      loading
                        ? "bg-lightYellow text-white cursor-not-allowed"
                        : "text-lightYellow hover:bg-blue-700"
                    }`}
                  >
                    {loading
                      ? "Creating Proposal ..."
                      : "Get Budgetary Proposal"}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="success-message mt-6">
              <p className="text-green text-3xl font-helvetica-neue-bold tracking-[-0.02em]">
                Success! Your Budgetary Proposal is on its way to your email
                inbox.
              </p>
              <p className="text-2xl text-black font-arial">
                Or you can click below to download it now.
              </p>
              <div className="mt-10">
                <a
                  href={`${filePath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-lightYellow border-1 text-lightYellow font-semibold py-2 px-6 md:text-[19px] font-bold transition"
                >
                  Download Now
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Selection Summary */}
      <section className="step-two">
        <div className="container">
          <div className="intro">
            <h2 className="md:text-[87px] text-green font-normal md:mb-10 tracking-[-0.05em]">
              Your Selections
            </h2>
          </div>

          <div className="content-with-image flex flex-col md:flex-row gap-10 items-center md:mb-20">
            <div className="image-wrap w-full md:w-3/5">
              <LazyLoadImage
                src={`${import.meta.env.VITE_API_DOMAIN}/${
                  selectedProductState?.product_image
                }`}
                alt="cutout"
                className="w-full h-full object-contain"
                effect="opacity"
                threshold={100}
              />
            </div>
            <div className="text-wrap w-full md:w-2/5">
              <img
                src={productHeadImageUrl}
                alt={selectedProductState?.product_name}
                width="290"
                height="38"
              />
              <h4 className="max-sm:text-[20px] max-sm:my-2 md:text-[28px] text-green font-normal font-arial tracking-[-0.05em] mt-3 mb-4">
                {selectedProductState?.floor_name.replace(
                  "Floor",
                  "Floor Plan",
                )}
              </h4>
              <p
                className="md:text-[25px] text-green font-normal tracking-[-0.05em]"
                dangerouslySetInnerHTML={{
                  __html: selectedProductState?.floor_subtitle,
                }}
              ></p>
            </div>
          </div>

          {["Floor 5", "Floor 6"].includes(selectedProductState?.floor_name) ? (
            <div className="grid grid-cols-2 gap-5">
              <div className="image-wrap">
                <h4 className="text-marigold text-4xl font-helvetica-neue-bold font-bold tracking-[-0.02em]">
                  First Floor
                </h4>
                <LazyLoadImage
                  src={`${import.meta.env.VITE_API_DOMAIN}/${
                    selectedProductState?.floor_image_two
                  }`}
                  alt="top-view"
                  wrapperClassName="w-full"
                  className="mx-auto block"
                  effect="opacity"
                  threshold={100}
                />
              </div>
              <div className="image-wrap">
                <h4 className="text-marigold text-4xl font-helvetica-neue-bold font-bold tracking-[-0.02em]">
                  Second Floor
                </h4>
                <LazyLoadImage
                  src={`${import.meta.env.VITE_API_DOMAIN}/${
                    selectedProductState?.floor_image_four
                  }`}
                  alt="top-view"
                  wrapperClassName="w-full"
                  className="mx-auto block"
                  effect="opacity"
                  threshold={100}
                />
              </div>
            </div>
          ) : (
            <div className="image-wrap">
              <LazyLoadImage
                src={`${import.meta.env.VITE_API_DOMAIN}/${
                  selectedProductState?.floor_image
                }`}
                alt="top-view"
                wrapperClassName="w-full"
                className="mx-auto block"
                effect="opacity"
                threshold={100}
              />
            </div>
          )}
        </div>
      </section>

      {/* Cost Summary */}
      {selectedProductState?.product_name && <CostSummary />}
    </>
  );
};

export default CheckoutForm;
