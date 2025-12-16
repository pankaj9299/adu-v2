import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import { findImageByProduct } from "../../utils/helpers";

const ColThree = () => {
    const [apiProducts, setApiProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_DOMAIN}/admin/api/products`)
      .then((res) => setApiProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="step-one pt-0 h-full flex items-center">
      <div className="container">
        <div className="intro text-center mb-10">
          <h1 className="md:text-[87px] font-normal text-dark-green mb-0 tracking-[-5%]">
            Built Around Your<span className="[clip-path:polygon(40px_0,100%_0,100%_100%,0_100%,0_40px)] bg-khaki px-6 py-3 inline-block w-[300px]">Vision</span>
          </h1>
        </div>
        <div className="col-three-wrap">
          <div className="wrapper grid grid-cols-1 md:grid-cols-3 gap-x-25">
            {apiProducts.map((product, index) => {
              const imageUrl = findImageByProduct(product.name);
              return (
                <div key={product.id} className="wrap text-center">
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
                  <div className="heading mb-2 h-[45px] flex items-center justify-center max-h-[38px]">
                    <img
                      src={imageUrl}
                      alt={product.name}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div className="text-wrap mt-2">
                    {product.name === "Single Container" ? (
                      <>
                        <p className="text-lg font-bold text-green mt-5">
                          Studio - 1 Bedroom <br />1 Bathroom
                        </p>
                        <hr className="border-b-1 border-marigold mt-5 max-w-64 m-auto" />
                        <p className="mt-3 text-lg text-green">Ideal For</p>
                        <ul class="space-y-3 ps-13 mt-5">
                          <li class="flex items-start gap-3 before:content-[''] before:w-5 before:h-5 before:bg-[url('/image/homepage/check.png')] before:bg-contain before:bg-no-repeat before:mt-1">
                            Office / work space
                          </li>
                          <li class="flex items-start gap-3 before:content-[''] before:w-5 before:h-5 before:bg-[url('/image/homepage/check.png')] before:bg-contain before:bg-no-repeat before:mt-1">
                            Single occupants
                          </li>
                          <li class="flex items-start gap-3 before:content-[''] before:w-5 before:h-5 before:bg-[url('/image/homepage/check.png')] before:bg-contain before:bg-no-repeat before:mt-1">
                            Short-term rentals
                          </li>
                        </ul>
                      </>
                    ) : product.name === "Side-by-Side Container" ? (
                      <>
                        <p className="text-lg font-bold text-green mt-5">
                          1 - 2 Bedrooms <br />1 Bathroom
                        </p>
                        <hr className="border-b-1 border-marigold mt-5 max-w-64 m-auto" />
                        <p className="mt-3 text-lg text-green">Ideal For</p>
                        <ul class="space-y-3 ps-13 mt-5">
                          <li class="flex items-start gap-3 before:content-[''] before:w-5 before:h-5 before:bg-[url('/image/homepage/check.png')] before:bg-contain before:bg-no-repeat before:mt-1">
                            Single occupants or couples
                          </li>
                          <li class="flex items-start gap-3 before:content-[''] before:w-5 before:h-5 before:bg-[url('/image/homepage/check.png')] before:bg-contain before:bg-no-repeat before:mt-1">
                            College age kids
                          </li>
                          <li class="flex items-start gap-3 before:content-[''] before:w-5 before:h-5 before:bg-[url('/image/homepage/check.png')] before:bg-contain before:bg-no-repeat before:mt-1">
                            Elderly parents
                          </li>
                        </ul>
                      </>
                    ) : product.name === "Two-Story Container" ? (
                        <>
                        <p className="text-lg font-bold text-green mt-5">
                          2 - 3 Bedrooms <br />2 Bathroom
                        </p>
                        <hr className="border-b-1 border-marigold mt-5 max-w-64 m-auto" />
                        <p className="mt-3 text-lg text-green">Ideal For</p>
                        <ul class="space-y-3 ps-13 mt-5">
                          <li class="flex items-start gap-3 before:content-[''] before:w-5 before:h-5 before:bg-[url('/image/homepage/check.png')] before:bg-contain before:bg-no-repeat before:mt-1">
                            Growing families
                          </li>
                          <li class="flex items-start gap-3 before:content-[''] before:w-5 before:h-5 before:bg-[url('/image/homepage/check.png')] before:bg-contain before:bg-no-repeat before:mt-1">
                            Long-term rentals
                          </li>
                          <li class="flex items-start gap-3 before:content-[''] before:w-5 before:h-5 before:bg-[url('/image/homepage/check.png')] before:bg-contain before:bg-no-repeat before:mt-1">
                            Multi-generational housing
                          </li>
                        </ul>
                      </>
                    ) : (
                        <p className="text-lg font-bold text-green mt-5">
                          Studio - 1 Bedroom <br />1 Bathroom
                        </p>
                    )}
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

export default ColThree;
