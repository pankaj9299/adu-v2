import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Filters from "./Filters";
import AppliancesItems from "./AppliancesItems";

const appliances = [
  {
    model: "Single Container",
    room: ["Kitchenette"],
    image: "",
    items: [
      {
        image: "",
        title: "",
        blurb: "",
      },
    ],
  },
  {
    model: "Side-by-Side Container",
    room: ["Kitchenette"],
    image: "",
    items: [
      {
        image: "",
        title: "",
        blurb: "",
      },
    ],
  },
  {
    model: "Two-Story Container",
    room: ["Kitchenette", "Laundry"],
    image: "",
    items: [
      {
        image: "",
        title: "",
        blurb: "",
      },
    ],
  },
];

const Appliances = () => {
  const [items, setItems] = useState({});
  const initialRoom = appliances.filter(
    (item) => item.model === "Single Container"
  );

  const handleItems = (obj) => {
    setItems(obj);
  };

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
            <div className="absolute inset-0 bg-black/20"></div>
            <h1 className="absolute bottom-20 right-40 text-white">
              Our Appliances
            </h1>
          </div>
        </div>
      </section>
      <Filters
        initialRoom={initialRoom}
        appliances={appliances}
        handleItems={handleItems}
      />
      <AppliancesItems items={items} />
    </>
  );
};

export default Appliances;
