import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import Configurator from "../components/Configurator";
import CheckoutForm from "../components/CheckoutForm";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setProduct } from "./store/slices/configuratorSlice";
import axios from "axios";
import TestSlider from "../components/TestSlider";
import Appliances from "../components/Appliances";
import Financing from "../components/Financing";
import HomePage from "../components/HomePage";
import HowItWorks from "../components/HowItWorks";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import TermsAndCondition from "../components/TermsAndCondition";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Gallery from "../components/Gallery";

export default function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [apiProducts, setApiProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_DOMAIN}/admin/api/products`)
      .then((res) => setApiProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(setProduct(null)); // Reset redux state
    }
  }, [location.pathname]);

  const handleSelectProduct = (product) => {
    dispatch(
      setProduct({
        product_id: product.id,
        product_name: product.name,
        product_subtitle: product.subtitle,
        product_price: `$${product.price.toLocaleString()}`,
        product_image: product.image,
      }),
    );

    navigate("/step-two", { state: { selectedProduct: product } });
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/models"
        element={
          <StepOne
            products={apiProducts}
            onSelectProduct={handleSelectProduct}
          />
        }
      />
      <Route
        path="/step-two"
        element={
          <StepTwo
            onBack={() => navigate("/models")}
            selectedProduct={location.state?.selectedProduct || null}
          />
        }
      />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/configurator" element={<Configurator />} />
      <Route path="/checkout" element={<CheckoutForm />} />
      <Route path="/appliances" element={<Appliances />} />
      <Route path="/financing" element={<Financing />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/terms-and-condition" element={<TermsAndCondition />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/test" element={<TestSlider />} />
    </Routes>
  );
}
