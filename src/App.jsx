import { useState, useEffect, useRef } from "react";
import Header from "../components/common/Header";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Configurator from "../components/Configurator";

import { useDispatch } from 'react-redux';
import { setProduct } from './store/slices/configuratorSlice';

function App() {
  const stepTwoRef = useRef(null);
  const [apiProducts, setApiProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_DOMAIN}/admin/api/products`)
      .then((res) => setApiProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSelectProduct = (product) => {
    console.log('product: ', product);
    setSelectedProductId(product.id);
    dispatch(setProduct({
      product_id: product.id,
      product_name: product.name,
      product_price: `$${product.price.toLocaleString()}`
    }));
  };

  const handleBackToStepOne = () => {
    setSelectedProductId(null); // Reset to show StepOne again
  };

   // Automatically scroll to StepTwo when product is selected
   useEffect(() => {
    if (selectedProductId && stepTwoRef.current) {
      stepTwoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedProductId]);

  return (
    <Router>
      <Header />
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
    </Router>
  );
}

export default App;
