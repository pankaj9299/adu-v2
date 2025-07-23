import { useState, useEffect, useRef } from "react";
import Header from "../components/common/Header";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Configurator from "../components/Configurator";

function App() {
  const stepTwoRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_DOMAIN}/admin/api/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSelectProduct = (productId) => {
    setSelectedProductId(productId);
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
                products={products}
                onSelectProduct={handleSelectProduct}
              />
              <div ref={stepTwoRef}>
                {selectedProductId && (
                  <StepTwo
                    selectedProduct={products.find(
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
