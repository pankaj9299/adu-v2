import React from "react";

const StepOne = ({ products, onSelectProduct }) => {
  return (
    <section
      className="step-one pt-0 h-full flex items-center"
    >
      <div className="container">
        <div className="intro text-center">
          <h1 className="text-[55px] font-normal text-dark-green my-7">
            Make it Your Own
          </h1>
          <h3 className="text-dark-teal text-2xl font-helvetica-neue-bold">
            Step 1
          </h3>
          <h2 className="text-[40px] font-normal inline-block w-1/2 text-marigold mb-10 font-helvetica-neue-bold">
            Pick a Base
          </h2>
        </div>
        <div className="col-three-wrap">
          <div className="wrapper grid grid-cols-3 gap-x-7">
            {products.map((product, index) => (
              <div key={product.id} className="wrap text-center">
                <div className="heading mb-2">
                  <h3
                    className={`text-28 inline-block text-center flex flex-col rounded-[5px] rounded-l-none overflow-hidden py-2 px-3 text-white ${
                      index === 0
                        ? "bg-secondary-gold"
                        : index === 1
                        ? "bg-darkRed"
                        : "bg-purple"
                    }`}
                    style={{
                      clipPath:
                        "polygon(10% 0%, 99% 0%, 99% 100%, 0% 100%, 0% 30%)",
                    }}
                  >
                    {product.name}
                  </h3>
                </div>
                <div className="image-wrap h-72 w-full bg-gray-100 overflow-hidden">
                  <img
                    src={`${import.meta.env.VITE_API_DOMAIN}/${product.image}`}
                    alt={product.name}
                    className="h-[228px] w-full object-contain"
                  />
                </div>
                <div className="text-wrap mt-2">
                  <p className="text-xl font-normal font-arial text-dark-green">
                    {product.subtitle}
                  </p>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepOne;
