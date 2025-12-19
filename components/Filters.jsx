import { useState } from "react";

const Filters = ({ appliances, handleItems, updateModel, updateRoom }) => {
  const [activeModelClass, setActiveModelClass] = useState(appliances[0].model);
  const [activeRoomClass, setActiveRoomClass] = useState(appliances[0].room[0]);
  const [rooms, setRooms] = useState(appliances[0].room);
  const handleModel = (model) => {
    const sortedObj = appliances.filter((item) => item.model === model);
    console.log("sortedObj", sortedObj);
    handleItems(sortedObj[0]);
    setActiveModelClass(sortedObj[0].model);
    setActiveRoomClass(sortedObj[0].room[0]);
    setRooms(sortedObj[0].room);

    updateModel(model);
    updateRoom(sortedObj[0].room[0]);

    // console.log('sortedObj[0]', sortedObj[0]);
  };
  const handleRoom = (room) => {
    updateRoom(room);
    setActiveRoomClass(room);
  };

  console.log(
    "activeModelClass: ",
    activeModelClass,
    " -- activeRoomClass: ",
    activeRoomClass
  );

  return (
    <section className="filters">
      <div className="container">
        <div className="flex max-sm:flex-col md:gap-30 sm:gap-5">
          <p className="text-20 text-dark-green font-helvetica-neue-bold tracking-[-0.02em]">
            Model:
          </p>
          <ul className="flex max-sm:flex-col md:gap-30 sm:gap-5 cursor-pointer text-20 font-arial">
            {appliances.map((item) => (
              <li
                className={`text-dark-green font-normal max-sm:inline-flex w-fit ${
                  activeModelClass === item.model ? "active-filter" : ""
                }`}
                key={item.model}
                onClick={() => handleModel(item.model)}
              >
                {item.model}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex max-sm:flex-col md:gap-30 sm:gap-5 mt-3">
          <p className="text-20 text-dark-green font-helvetica-neue-bold tracking-[-0.02em]">
            Room:
          </p>
          <ul className="inline-grid max-sm:flex-col grid-cols-2 gap-20 cursor-pointer text-20 font-arial">
            {rooms.map((item) => (
              <li
                className={`text-dark-green font-normal tracking-[0%] max-sm:inline-flex w-fit ${
                  activeRoomClass === item ? "active-filter" : ""
                }`}
                key={item}
                onClick={() => handleRoom(item)}
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
