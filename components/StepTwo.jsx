import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from "../src/store/slices/configuratorSlice";

const StepTwo = ({ selectedProduct }) => {
  let navigate = useNavigate();
  const [floors, setFloors] = useState([]);
  const [selectedFloor, setSelectedFloor] = useState(null);

  const selectedProductState = useSelector((state) => state.configurator.selectedProduct);
  const dispatch = useDispatch();
  
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

    dispatch(setProduct({...selectedProductState,
      floor_id: selectedFloor.id,
      floor_name: selectedFloor.name,
      floor_image: selectedFloor.image      
    }));
    // TODO: Implement navigation to StepThree or customization logic
    navigate('/configurator', { replace: true });
  };

  return (
    <section className="step-two pt-0">
      <div className="container">
        <div className="image-wrap my-30">
          <img
            src="/image/Line 18.png"
            alt="big-arrow"
            className="mx-auto block"
          />
        </div>
        <div className="intro text-center">
          <h3 className="text-dark-teal text-3xl mb-3 font-helvetica-neue-bold">Step 2</h3>
          <h2 className="text-[87px] inline-block text-secondary-green border-b-4 border-yellow mb-15 font-normal font-arial">
            Pick a Floor Plan
          </h2>
          <div className="title flex items-center justify-center gap-2">
            <h3 className="text-[25px] font-normal">You selected</h3>
            <span
              className="font-normal font-arial text-[28px] inline-block text-center flex flex-col bg-darkRed rounded-[5px] rounded-l-none overflow-hidden py-2 px-2 text-white"
              style={{
                clipPath: "polygon(10% 0%, 99% 0%, 99% 100%, 0% 100%, 0% 30%)",
              }}
            >
              {selectedProductState?.product_name}
            </span>
          </div>
          {floors.length === 0 ? (
            <div className="text-center">No floor plans available.</div>
          ) : (
            <div className="description">
              <h4 className="text-2xl font-normal mt-10 mb-5">
                {/* {floors.length} Floor Plan Options: */}
                Floor Plan Options:
              </h4>
              <ul className="flex justify-center gap-4 mb-5">
                {floors.map((floor) => (
                  <li
                  key={floor.id}
                  className={`flex items-center justify-center pt-[10px] aspect-square w-[68px] text-[48px] font-bold rounded-full border-lightYellow cursor-pointer font-helvetica-neue-bold leading-none ${
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
            </div>
          )}
        </div>

        {selectedFloor && (
          <>
            <div className="image-wrap">
              <img
                src={`${import.meta.env.VITE_API_DOMAIN}/${selectedFloor.image}`}
                alt={selectedFloor.name}
                className="mx-auto block"
              />
            </div>

            <div className="floor-plan">
              <h2 className="text-[64px] font-normal font-arial text-dark-green mt-4 mb-4">
                {selectedFloor.name}
              </h2>
              {/* <div
                className="description text-2xl font-normal mb-5"
                dangerouslySetInnerHTML={{ __html: selectedFloor.description }}
              />
              <div
                className="body text-xl font-normal mb-5"
                dangerouslySetInnerHTML={{ __html: selectedFloor.body }}
              />  */}
              <div className="detail flex gap-12">
                <div className="left w-1/2">
                  <div className="heading">
                    <h3 className="text-[43px] font-helvetica-neue-bold text-lightYellow">
                      Areas
                    </h3>
                  </div>
                  <div className="options flex gap-8 mt-7">
                    <div className="first">
                      {[
                        { number: "01", title: "Entrance" },
                        { number: "02", title: "Washer/Dryer" },
                        { number: "03", title: "Kitchen" },
                        { number: "04", title: "Living Room" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="step-line flex gap-4 items-center border-b-2 border-lightYellow mb-7"
                        >
                          <span className="step-number text-[34px] font-bold font-helvetica-neue-bold text-lightYellow">
                            {item.number}
                          </span>
                          <h4 className="step-title text-[26px] font-normal font-arial">
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
                          className="step-line flex gap-4 items-center border-b-2 border-lightYellow mb-7"
                        >
                          <span className="step-number font-bold font-helvetica-neue-bold text-[34px] text-lightYellow">
                            {item.number}
                          </span>
                          <h4 className="step-title text-[26px] font-normal font-arial">
                            {item.title}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="right w-1/2">
                  <div className="heading">
                    <h3 className="text-[42px] mb-4 font-helvetica-neue-bold font-bold text-dark-green">Customizations & Add-Ons</h3>
                  </div>
                  <div className="options">
                    {[
                      { number: "C1", title: "Dining Area" },
                      { number: "C2", title: "Bathroom Closet" },
                      {
                        number: "C3",
                        title: "Bathtub or Bathtub with Spa Feature",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="step-line flex gap-4 items-center border-b-2 border-lightYellow mb-7"
                      >
                        <span className="step-number text-[34px] font-bold font-helvetica-neue-bold text-dark-green">
                          {item.number}
                        </span>
                        <h4 className="step-title text-[27px] font-normal font-arial">
                          {item.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="mt-10 flex justify-center gap-4">
          {selectedFloor && (
            <button
              className="border-lightYellow text-white bg-lightYellow text-[25px] font-bold font-helvetica-neue-bold rounded-md py-2 px-8"
              onClick={handleChooseCustomizations}
            >
              Choose Your Customizations
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default StepTwo;