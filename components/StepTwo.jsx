import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { findImageByProduct } from '../utils/helpers';

import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../src/store/slices/configuratorSlice";

const StepTwo = ({ selectedProduct: propSelectedProduct, onBack }) => {
  let navigate = useNavigate();
  const location = useLocation();
  const selectedProduct =
    propSelectedProduct || location.state?.selectedProduct;

  const [floors, setFloors] = useState([]);
  const [selectedFloor, setSelectedFloor] = useState(null);

  const selectedProductState = useSelector(
    (state) => state.configurator.selectedProduct
  );
  const imageUrl = findImageByProduct(selectedProductState?.product_name);
  const dispatch = useDispatch();
  
  // Redirect if page was reloaded and no selected product exists
  useEffect(() => {
    if (!selectedProductState || !selectedProductState.product_id) {
      // Reset redux state
      dispatch(setProduct(null));
      
      navigate('/', { replace: true });
    }
  }, [selectedProductState, navigate]);

  // Fetch floors for the selected product
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_DOMAIN}/admin/api/products/${
          selectedProduct.id
        }/floors`
      )
      .then((res) => {
        setFloors(res.data);
        // Pre-select the first floor if available
        if (res.data.length > 0) {
          setSelectedFloor(res.data[0]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [selectedProduct.id]);

  // Handle floor selection
  const handleSelectFloor = (floor) => {
    setSelectedFloor(floor);
  };

  // Placeholder for choosing customizations (e.g., navigate to StepThree)
  const handleChooseCustomizations = () => {
    console.log(`Selected Floor: ${selectedFloor}`, selectedFloor);

    dispatch(
      setProduct({
        ...selectedProductState,
        floor_id: selectedFloor.id,
        floor_name: selectedFloor.name,
        floor_image: selectedFloor.image,
      })
    );
    // TODO: Implement navigation to StepThree or customization logic
    navigate("/configurator", { replace: true });
  };

  return (
    <section className="step-two pt-0">
      <div className="container px-0">
        <div className="intro text-center">
          <h3 className="text-dark-teal text-2xl mt-10 font-helvetica-neue-bold">
            Step 2
          </h3>
          <h2 className="text-[40px] inline-block text-marigold mb-2 max-sm:my-7 font-normal font-helvetica-neue-bold">
            Pick a Floor Plan
          </h2>
          <div className="title flex flex-col md:flex-row items-center justify-center gap-2">
            <h3 className="text-[25px] font-normal">You selected</h3>
            <img src={imageUrl} alt={imageUrl} width="290" height="38" />
          </div>
          {floors.length === 0 ? (
            <div className="text-center">Loading ...</div>
          ) : (
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="image-wrap w-full md:w-1/2">
                <LazyLoadImage
                  className="mx-auto block"
                  alt={selectedFloor.name}
                  effect="opacity"
                  threshold={100}
                  src={`${import.meta.env.VITE_API_DOMAIN}/${
                    selectedFloor.image
                  }`}
                />
              </div>
              <div className="description w-full md:w-1/2">
                <h4 className="text-xl text-left font-normal my-3">
                  {/* {floors.length} Floor Plan Options: */}
                  Floor Plan Options:
                </h4>
                <ul className="flex gap-4 mb-3">
                  {floors.map((floor) => (
                    <li
                      key={floor.id}
                      className={`flex items-center justify-center pt-[10px] aspect-square w-[55px] text-4xl font-bold rounded-full border-lightYellow cursor-pointer font-helvetica-neue-bold leading-none ${
                        selectedFloor?.id === floor.id
                          ? "text-white bg-lightYellow border-1"
                          : "text-lightYellow border-1"
                      }`}
                      onClick={() => handleSelectFloor(floor)}
                    >
                      {floor.label}
                    </li>
                  ))}
                </ul>

                {selectedFloor && (
                  <>
                    <div className="floor-plan">
                      {/* <div
                        className="description text-2xl font-normal mb-5"
                        dangerouslySetInnerHTML={{ __html: selectedFloor.description }}
                      />
                      <div
                        className="body text-xl font-normal mb-5"
                        dangerouslySetInnerHTML={{ __html: selectedFloor.body }}
                      />  */}
                      <div className="detail">
                        <div className="left">
                          <div className="heading">
                            <h3 className="text-[30px] text-left font-helvetica-neue-bold text-lightYellow">
                              Areas
                            </h3>
                          </div>
                          <div className="options flex gap-8 mt-4">
                            <div className="first">
                              {[
                                { number: "01", title: "Entrance" },
                                { number: "02", title: "Washer/Dryer" },
                                { number: "03", title: "Kitchen" },
                                { number: "04", title: "Living Room" },
                              ].map((item, index) => (
                                <div
                                  key={index}
                                  className="step-line flex gap-4 items-center border-b-2 border-lightYellow mb-4"
                                >
                                  <span className="step-number text-[24px] font-bold font-helvetica-neue-bold text-lightYellow">
                                    {item.number}
                                  </span>
                                  <h4 className="step-title text-[17px] font-normal font-arial">
                                    {item.title}
                                  </h4>
                                </div>
                              ))}
                            </div>
                            <div className="second">
                              {[
                                { number: "05", title: "Bathroom" },
                                { number: "06", title: "Shower or Bathtub" },
                                { number: "07", title: "Bedroom" },
                                { number: "08", title: "Closet" },
                              ].map((item, index) => (
                                <div
                                  key={index}
                                  className="step-line flex gap-4 items-center border-b-2 border-lightYellow mb-4"
                                >
                                  <span className="step-number font-bold font-helvetica-neue-bold text-[24px] text-lightYellow">
                                    {item.number}
                                  </span>
                                  <h4 className="step-title text-[17px] font-normal font-arial">
                                    {item.title}
                                  </h4>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="right mt-4">
                          <div className="heading">
                            <h3 className="text-[30px] text-left mb-4 font-helvetica-neue-bold font-bold text-dark-green">
                              Add-Ons
                            </h3>
                          </div>
                          <div className="options flex flex-wrap justify-between gap-5 max-w-sm">
                            {[
                              { number: "C1", title: "Dining Area" },
                              {
                                number: "C3",
                                title:
                                  "Bathtub or Bathtub <br>with Spa Feature",
                              },
                              { number: "C2", title: "Bathroom Closet" },
                            ].map((item, index) => (
                              <div
                                key={index}
                                className="step-line flex gap-4 items-center border-b-2 border-lightYellow"
                              >
                                <span className="step-number text-[24px] font-bold font-helvetica-neue-bold text-dark-green">
                                  {item.number}
                                </span>
                                <h4
                                  className="step-title text-[17px] font-normal font-arial max-w-3xs text-left"
                                  dangerouslySetInnerHTML={{
                                    __html: item.title,
                                  }}
                                ></h4>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="mt-10 flex gap-4">
                  {selectedFloor && (
                    <button
                      className="border-lightYellow text-white bg-lightYellow md:text-lg font-bold font-helvetica-neue-bold rounded-md pt-2 pb-1 px-5 hover:bg-green cursor-pointer"
                      onClick={handleChooseCustomizations}
                    >
                      Choose Your Customizations
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StepTwo;
