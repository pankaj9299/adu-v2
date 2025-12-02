import { useState } from "react";

const Filters = ({ appliances, handleItems }) => {
  const [activeClass, setActiveClass] = useState(appliances[0].model);
  const [rooms, setRooms] = useState(appliances[0].room);
  const handleSort = (model) => {
    const sortedObj = appliances.filter((item) => item.model === model);
    handleItems(sortedObj[0]);
    setActiveClass(sortedObj[0].model);
    setRooms(sortedObj[0].room);
  };

  return (
    <section className="filters">
      <div className="container">
        <div className="flex gap-30">
          <p className="text-20 font-helvetica-neue-bold">Model:</p>
          <ul className="flex gap-30 cursor-pointer text-20 font-arial">
            {appliances.map((item) => (
              <li
                className={`${
                  activeClass === item.model ? "active-filter" : ""
                }`}
                key={item.model}
                onClick={() => handleSort(item.model)}
              >
                {item.model}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-30 mt-3">
          <p className="text-20 font-helvetica-neue-bold">Room:</p>
          <ul className="inline-grid grid-cols-2 gap-20 cursor-pointer text-20 font-arial">
            {rooms.map((item, index) => (
              <li
                className={`${index === 0 ? "active-filter" : ""}`}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Filters;
