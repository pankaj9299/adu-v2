import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { findImageByProduct } from '../utils/helpers';

const StepOne = ({ products, onSelectProduct }) => {
  
  return (
    <section className="step-one pt-0 h-full flex items-center">
      <div className="container">
        <div className="intro text-center">
          <h1 className="md:text-[87px] font-normal text-dark-green my-7">
            Make it Your Own
          </h1>
          <h3 className="text-dark-teal text-2xl font-helvetica-neue-bold">
            Step 1
          </h3>
          <h2 className="text-[40px] font-normal inline-block md:w-1/2 text-marigold mb-10 font-helvetica-neue-bold">
            Pick a Base
          </h2>
        </div>
        <div className="col-three-wrap">
          <div className="wrapper grid grid-cols-1 md:grid-cols-3 gap-x-7">
            {products.map((product, index) => {
              const imageUrl = findImageByProduct(product.name);
              return (
                <div key={product.id} className="wrap text-center">
                  <div className="heading mb-2">
                    <img
                      src={imageUrl}
                      alt={product.name}
                      width="385"
                      height="58"
                    />
                  </div>
                  <div className="image-wrap h-72 w-full bg-white overflow-hidden">
                    <LazyLoadImage
                      src={`${import.meta.env.VITE_API_DOMAIN}/${
                        product.image
                      }`}
                      alt={product.name}
                      className="h-[228px] w-full object-contain"
                      effect="opacity"
                      threshold={100}
                    />
                  </div>
                  <div className="text-wrap mt-2">
                    <p
                      className="text-xl font-normal font-arial text-dark-green"
                      dangerouslySetInnerHTML={{ __html: product.subtitle }}
                    ></p>
                    <p className="text-xl font-normal font-arial text-dark-green my-2">
                      Starts at <br /> ${product.price.toLocaleString()}
                    </p>
                    <div className="button">
                      <button
                        className="text-yellow-600 hover:text-black underline underline-offset-6 decoration-2 text-2xl cursor-pointer font-helvetica-neue-bold font-bold"
                        onClick={() => {
                          onSelectProduct(product);
                        }}
                      >
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepOne;
