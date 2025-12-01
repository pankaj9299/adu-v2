import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Filters from "./Filters";
import AppliancesItems from "./AppliancesItems";

const appliances = [
  {
    model: "Single Container",
    room: ["Kitchenette"],
    image: "/image/appliances/single_container.svg",
    items: [
      {
        image: "/image/appliances/cooktop.svg",
        title: "Summit 12\" Wide 230V 2-Burner Radiant Cooktop",
        blurb: 
          `<p>Two-burner 3000W electric cooktop with 230V operation</p>
          <p>Intuitive touch controls for smarter cooking</p>
          <p>Smooth ceramic glass surface made with Jet Black Schott Glass offers a modern look that's easy to clean</p>
          <p>Rear 7" burner offers 1800W for faster heating of larger cooking vessels</p>
          <p><a href="#">Download Appliances Packet ></a></p>`,
      },
      {
        image: "/image/appliances/cooktop.svg",
        title: "Summit 12\" Wide 230V 2-Burner Radiant Cooktop",
        blurb: 
          `<p>Two-burner 3000W electric cooktop with 230V operation</p>
          <p>Intuitive touch controls for smarter cooking</p>
          <p>Smooth ceramic glass surface made with Jet Black Schott Glass offers a modern look that's easy to clean</p>
          <p>Rear 7" burner offers 1800W for faster heating of larger cooking vessels</p>
          <p><a href="#">Download Appliances Packet ></a></p>`,
      },
    ],
  },
  {
    model: "Side-by-Side Container",
    room: ["Kitchenette"],
    image: "/image/appliances/side_by_side.svg",
    items: [
      {
        image: "/image/appliances/washer.svg",
        title: "Samsung 4.5 cu. ft. Front Load Washer w/ Vibration Reduction Technology+",
        blurb: 
          `<p>Two-burner 3000W electric cooktop with 230V operation</p>
          <p>Intuitive touch controls for smarter cooking</p>
          <p>Smooth ceramic glass surface made with Jet Black Schott Glass offers a modern look that's easy to clean</p>
          <p>Rear 7" burner offers 1800W for faster heating of larger cooking vessels</p>
          <p><a href="#">Download Appliances Packet ></a></p>`,
      },
      {
        image: "/image/appliances/cooktop.svg",
        title: "Summit 12\" Wide 230V 2-Burner Radiant Cooktop",
        blurb: 
          `<p>Two-burner 3000W electric cooktop with 230V operation</p>
          <p>Intuitive touch controls for smarter cooking</p>
          <p>Smooth ceramic glass surface made with Jet Black Schott Glass offers a modern look that's easy to clean</p>
          <p>Rear 7" burner offers 1800W for faster heating of larger cooking vessels</p>
          <p><a href="#">Download Appliances Packet ></a></p>`,
      },
    ],
  },
  {
    model: "Two-Story Container",
    room: ["Kitchenette", "Laundry"],
    image: "/image/appliances/two_story.svg",
    items: [
      {
        image: "/image/appliances/fridge.svg",
        title: "15.6 cu. ft. Top Freezer Refrigerator in Stainless Steel",
        blurb: 
          `<p>Two-burner 3000W electric cooktop with 230V operation</p>
          <p>Intuitive touch controls for smarter cooking</p>
          <p>Smooth ceramic glass surface made with Jet Black Schott Glass offers a modern look that's easy to clean</p>
          <p>Rear 7" burner offers 1800W for faster heating of larger cooking vessels</p>
          <p><a href="#">Download Appliances Packet ></a></p>`,
      },
      {
        image: "/image/appliances/cooktop.svg",
        title: "Summit 12\" Wide 230V 2-Burner Radiant Cooktop",
        blurb: 
          `<p>Two-burner 3000W electric cooktop with 230V operation</p>
          <p>Intuitive touch controls for smarter cooking</p>
          <p>Smooth ceramic glass surface made with Jet Black Schott Glass offers a modern look that's easy to clean</p>
          <p>Rear 7" burner offers 1800W for faster heating of larger cooking vessels</p>
          <p><a href="#">Download Appliances Packet ></a></p>`,
      },
    ],
  },
];

const Appliances = () => {
  const initialRoom = appliances.filter(
    (item) => item.model === "Single Container"
  );
  const [items, setItems] = useState(initialRoom[0]);

  const handleItems = (obj) => {
    setItems(obj);
  };

  console.log('appliances[0]', items);
  
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
      <AppliancesItems appliance={items} />
    </>
  );
};

export default Appliances;
