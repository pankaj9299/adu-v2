import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Filters from "./Filters";
import AppliancesItems from "./AppliancesItems";

const appliances = [
  {
    model: "Single Container",
    image: "/image/appliances/single_container.webp",
    room: ["Kitchenette"],
    rooms: [
      {
        name: "Kitchenette",
        image: "/image/appliances/single_container.webp",
        items: [
          {
            image: "/image/appliances/cooktop.webp",
            title: 'Summit 12" Wide 230V 2-Burner Radiant Cooktop',
            blurb: `<p>Two-burner 3000W electric cooktop with 230V operation</p>
              <p>Intuitive touch controls for smarter cooking</p>
              <p>Smooth ceramic glass surface made with Jet Black Schott Glass offers a modern look that's easy to clean</p>
              <p>Rear 7" burner offers 1800W for faster heating of larger cooking vessels</p>
              <p><a href="/image/appliances/pdfs/Summit.pdf" target="_blank">Download Appliances Packet ></a></p>`,
          },
          {
            image: "/image/appliances/fridge_1.webp",
            title: "Frigidaire 4.5 Cu. Ft. Compact Refrigerator",
            blurb: `<p>In-door gallon storage bin provides convenient space for gallon containers and tall bottles</p>
              <p>Easily adjust shelves up and down to create more space for taller items.</p>
              <p>True full-width freezer cools to -8 F.</p>
              <p>Bright interior lighting makes it easy to see what’s inside</p>
              <p><a target="_blank" href="/image/appliances/pdfs/Frigidaire.pdf">Download Appliances Packet ></a></p>`,
          },
          {
            image: "/image/appliances/microwave.png",
            title: "Haier 1.4 Cubic Foot OTR Microwave",
            blurb: `<p>Sensor cooking adjusts cooking time and power level automatically</p>
              <p>Hidden vent streamlines the exterior while making it simpler to clean</p>
              <p>300 CFM ventilation Quickly moves smoke and steam up from the cooktop surface</p>
              <p>LED surface light distributes bright, clear light across the cooking surface</p>
              <p><a target="_blank" href="/image/appliances/pdfs/Haier.pdf">Download Appliances Packet ></a></p>`,
          },
        ],
      },
    ],
  },
  {
    model: "Side-by-Side Container",
    image: "/image/appliances/side_by_side.webp",
    room: ["Kitchen"],
    rooms: [
      {
        name: "Kitchen",
        image: "/image/appliances/side_by_side.webp",
        items: [
          {
            image: "/image/appliances/washer.webp",
            title:
              "Samsung 4.5 cu. ft. Front Load Washer w/ Vibration Reduction Technology+",
            blurb: `<p>Reduces noise and vibration for extra quiet washing</p>
              <p>Self Clean+ eliminates 99% of bacteria in the drum.</p>
              <p>10 preset washing cycles & 6 additional washing options</p>
              <p>1200 RPM maximum spin speed</p>
              <p><a target="_blank" href="/image/appliances/pdfs/Samsung4.5.pdf">Download Appliances Packet ></a></p>`,
          },
          {
            image: "/image/appliances/dryer.webp",
            title: "Samsung 7.5 cu. ft. Electric Dryer w/ Sensor Dry in White",
            blurb: `<p>Sensor dry helps prevent over drying for optimal fabric care</p>
            <p>10 preset drying cycles cover almost every drying need</p>
            <p>7.5 cu. ft. large capacity for fewer loads and less time in the laundry room</p>
            <p>9 additional drying options with 5 temperature levels</p>
            <p><a target="_blank" href="/image/appliances/pdfs/Samsung7.5.pdf">Download Appliances Packet ></a></p>`,
          },
          {
            image: "/image/appliances/fridge_2.webp",
            title: "15.6 cu. ft. Top Freezer Refrigerator in Stainless Steel",
            blurb: `<p>Multi-vent technology keeps items evenly cooled on every shelf.</p>
            <p>Minimalist exterior with signature flat door design and recessed handles</p>
            <p>Space for gallon beverages provides more shelf space inside the fridge</p>
            <p>Interior LED lighting</p>
            <p><a target="_blank" href="/image/appliances/pdfs/Samsung15.6.pdf">Download Appliances Packet ></a></p>`,
          },
          {
            image: "/image/appliances/Dishwasher.webp",
            title: "Smart Dishwasher with StormWash™ in Stainless Steel",
            blurb: `<p>StormWash™ rotating jets let you skip pre-rinse, delivering heavy duty cleaning from every angle</p>
            <p>AutoRelease™ door automatically opens at end-of-cycle to circulate air for better drying performance</p>
            <p>Height-adjustable upper rack makes it easy to accommodate various dishware shapes and sizes.</p>
            <p><a href="#">Download Appliances Packet ></a></p>`,
          },
          {
            image: "/image/appliances/Stove.webp",
            title:
              "Bespoke 6.3 cu. ft. Smart Slide-In Electric Range in Stainless Steel",
            blurb: `<p>Precision knobs & glass touch controls</p>
            <p>Powerful self-cleaning and fingerprint resistant finish</p>
            <p>6.3 cu. ft. oven capacity accommodates large dishes and roasting pans</p>
            <p>Cook fast and evenly with the powerful heat of the 17K BTU Power Burner</p>
            <p><a target="_blank" href="/image/appliances/pdfs/Bespoke6.3.pdf">Download Appliances Packet ></a></p>`,
          },
          {
            image: "/image/appliances/Microwave_1.webp",
            title:
              "Bespoke 2.1 cu. ft. Over-the-Range Microwave in Matte Black Steel",
            blurb: `<p>Sensor Cook automatically adjusts cooking time for optimal results</p>
            <p>Extra power ventilation refreshes air quickly to remove steam and odors</p>
            <p>Eco Mode button conserves power by turning off the display when not in use</p>
            <p>Beautiful ceramic blue enamel interior is scratch resistant and easy to clean</p>
            <p><a target="_blank" href="/image/appliances/pdfs/Bespoke2.1.pdf">Download Appliances Packet ></a></p>`,
          },
        ],
      },
    ],
  },
  {
    model: "Two-Story Container",
    image: "/image/appliances/two_story.webp",
    room: ["Kitchen", "Laundry"],
    rooms: [
      {
        name: "Kitchen",
        image: "/image/appliances/two_story.webp",
        items: [
          {
            image: "/image/appliances/fridge_2.webp",
            title: "15.6 cu. ft. Top Freezer Refrigerator in Stainless Steel",
            blurb: `<p>Multi-vent technology keeps items evenly cooled on every shelf.</p>
            <p>Minimalist exterior with signature flat door design and recessed handles</p>
            <p>Space for gallon beverages provides more shelf space inside the fridge</p>
            <p>Interior LED lighting</p>
            <p><a target="_blank" href="/image/appliances/pdfs/Samsung15.6.pdf">Download Appliances Packet ></a></p>`,
          },
          {
            image: "/image/appliances/Dishwasher.webp",
            title: "Smart Dishwasher with StormWash™ in Stainless Steel",
            blurb: `<p>StormWash™ rotating jets let you skip pre-rinse, delivering heavy duty cleaning from every angle</p>
            <p>AutoRelease™ door automatically opens at end-of-cycle to circulate air for better drying performance</p>
            <p>Height-adjustable upper rack makes it easy to accommodate various dishware shapes and sizes.</p>
            <p><a href="#">Download Appliances Packet ></a></p>`,
          },
          {
            image: "/image/appliances/Stove.webp",
            title:
              "Bespoke 6.3 cu. ft. Smart Slide-In Electric Range in Stainless Steel",
            blurb: `<p>Precision knobs & glass touch controls</p>
            <p>Powerful self-cleaning and fingerprint resistant finish</p>
            <p>6.3 cu. ft. oven capacity accommodates large dishes and roasting pans</p>
            <p>Cook fast and evenly with the powerful heat of the 17K BTU Power Burner</p>
            <p><a target="_blank" href="/image/appliances/pdfs/Bespoke6.3.pdf">Download Appliances Packet ></a></p>`,
          },
          {
            image: "/image/appliances/Microwave_1.webp",
            title:
              "Bespoke 2.1 cu. ft. Over-the-Range Microwave in Matte Black Steel",
            blurb: `<p>Sensor Cook automatically adjusts cooking time for optimal results</p>
            <p>Extra power ventilation refreshes air quickly to remove steam and odors</p>
            <p>Eco Mode button conserves power by turning off the display when not in use</p>
            <p>Beautiful ceramic blue enamel interior is scratch resistant and easy to clean</p>
            <p><a target="_blank" href="/image/appliances/pdfs/Bespoke2.1.pdf">Download Appliances Packet ></a></p>`,
          },
        ],
      },
      {
        name: "Laundry",
        image: "/image/appliances/laundary.webp",
        items: [
          {
            image: "/image/appliances/washer.webp",
            title:
              "Samsung 4.5 cu. ft. Front Load Washer w/ Vibration Reduction Technology+",
            blurb: `<p>Reduces noise and vibration for extra quiet washing</p>
              <p>Self Clean+ eliminates 99% of bacteria in the drum.</p>
              <p>10 preset washing cycles & 6 additional washing options</p>
              <p>1200 RPM maximum spin speed</p>
              <p><a target="_blank" href="/image/appliances/pdfs/Samsung4.5.pdf">Download Appliances Packet ></a></p>`,
          },
          {
            image: "/image/appliances/dryer.webp",
            title: "Samsung 7.5 cu. ft. Electric Dryer w/ Sensor Dry in White",
            blurb: `<p>Sensor dry helps prevent over drying for optimal fabric care</p>
            <p>10 preset drying cycles cover almost every drying need</p>
            <p>7.5 cu. ft. large capacity for fewer loads and less time in the laundry room</p>
            <p>9 additional drying options with 5 temperature levels</p>
            <p><a target="_blank" href="/image/appliances/pdfs/Samsung7.5.pdf">Download Appliances Packet ></a></p>`,
          },
        ],
      },
    ],
  },
];

const Appliances = () => {
  const initialRoom = appliances.filter(
    (item) => item.model === "Single Container"
  );
  const [items, setItems] = useState(initialRoom[0]);
  const [selectedModel, setSelectedModel] = useState(initialRoom[0].model);
  const [selectedRoom, setSelectedRoom] = useState(initialRoom[0].room[0]);

  const handleItems = (obj) => {
    setItems(obj);
  };

  const updateModel = (model) => {
    setSelectedModel(model);
  };

  const updateRoom = (room) => {
    setSelectedRoom(room);
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
            <h1 className="absolute max-sm:bottom-10 md:bottom-20 max-sm:right-20 md:right-40 text-white">
              Our Appliances
            </h1>
          </div>
        </div>
      </section>
      <Filters
        appliances={appliances}
        handleItems={handleItems}
        updateModel={updateModel}
        updateRoom={updateRoom}
      />
      <AppliancesItems
        appliance={items}
        selectedModel={selectedModel}
        selectedRoom={selectedRoom}
      />
    </>
  );
};

export default Appliances;
