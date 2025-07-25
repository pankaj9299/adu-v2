import { Routes, Route, useLocation } from "react-router-dom";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import Configurator from "../components/Configurator";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { setProduct } from "./store/slices/configuratorSlice";
import axios from "axios";

export default function AppRoutes() {
  const location = useLocation();
  const stepTwoRef = useRef(null);
  const dispatch = useDispatch();
  const [apiProducts, setApiProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_DOMAIN}/admin/api/products`)
      .then((res) => setApiProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedProductId(null);
    }
  }, [location.pathname]);

  const handleSelectProduct = (product) => {
    setSelectedProductId(product.id);
    dispatch(setProduct({
      product_id: product.id,
      product_name: product.name,
      product_price: `$${product.price.toLocaleString()}`
    }));
  };

  const handleBackToStepOne = () => {
    setSelectedProductId(null);
  };

  useEffect(() => {
    if (selectedProductId && stepTwoRef.current) {
      stepTwoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedProductId]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <StepOne
              products={apiProducts}
              onSelectProduct={handleSelectProduct}
            />
            <div ref={stepTwoRef}>
              {selectedProductId && (
                <StepTwo
                  selectedProduct={apiProducts.find(
                    (p) => p.id === selectedProductId
                  )}
                  onBack={handleBackToStepOne}
                />
              )}
            </div>
          </>
        }
      />
      <Route path="/configurator" element={<Configurator />} />
    </Routes>
  );
}
