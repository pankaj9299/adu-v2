import React from "react";

const StepOne = ({ products, onSelectProduct }) => {
  return (
    <section className="step-one">
      <div className="container">
        <div className="intro text-center">
          <h1 className="text-[87px] font-normal text-secondary-green mb-25">
            Lorem ipsum dolor sit
          </h1>
          <h3 className="text-secondary-gold text-3xl mb-3">Step 1</h3>
          <h2 className="text-[87px] inline-block w-1/2 text-secondary-green border-b-4 border-yellow mb-15">
            Pick a Base
          </h2>
        </div>
        <div className="col-three-wrap">
          <div className="wrapper grid grid-cols-3 gap-x-7">
            {products.map((product, index) => (
              <div key={product.id} className="wrap text-center">
                <div className="heading mb-5">
                  <h3
                    className={`font-normal inline-block text-center flex flex-col rounded-[5px] rounded-l-none overflow-hidden py-2 px-2 text-white ${
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
                    className="h-72 w-full object-cover"
                  />
                </div>
                <div className="text-wrap mt-5">
                  <p className="text-2xl font-normal">{product.subtitle}</p>
                  <p className="text-2xl font-normal my-9">
                    Starts at <br /> ${product.price.toLocaleString()}
                  </p>
                  <div className="button">
                    <button
                      className="text-yellow-600 hover:text-black underline underline-offset-6 decoration-2 text-3xl cursor-pointer"
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
