import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Filters from "./Filters";

const Appliances = () => {
  return (
    <>
    <section className="appliances p-0">
      <div className="relative">
        <div className="image-wrapper">
          <LazyLoadImage
            src={`/image/appliances_tiny.png`}
            alt="top-view"
            wrapperClassName="w-full"
            className="mx-auto block"
            effect="opacity"
            threshold={100}
          />
          <div class="absolute inset-0 bg-black/20"></div>
          <h1 className="absolute bottom-20 right-40 text-white">Our Appliances</h1>
        </div>
      </div>
    </section>
    <Filters />
    </>
  );
};

export default Appliances;
