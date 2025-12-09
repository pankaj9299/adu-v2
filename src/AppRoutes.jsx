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
      })
    );

    navigate("/step-two", { state: { selectedProduct: product } });
  };

  return (
    <Routes>
      <Route
        path="/"
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
            onBack={() => navigate("/")}
            selectedProduct={location.state?.selectedProduct || null}
          />
        }
      />
      <Route path="/configurator" element={<Configurator />} />
      <Route path="/checkout" element={<CheckoutForm />} />
      <Route path="/appliances" element={<Appliances />} />
      <Route path="/financing" element={<Financing />} />
      <Route path="/test" element={<TestSlider />} />
    </Routes>
  );
}
