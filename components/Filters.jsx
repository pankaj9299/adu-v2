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
        <div className="flex gap-30">
          <p className="text-20 text-dark-green font-helvetica-neue-bold tracking-[-2%]">
            Model:
          </p>
          <ul className="flex gap-30 cursor-pointer text-20 font-arial">
            {appliances.map((item) => (
              <li
                className={`text-dark-green font-normal ${
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
        <div className="flex gap-30 mt-3">
          <p className="text-20 text-dark-green font-helvetica-neue-bold tracking-[-2%]">
            Room:
          </p>
          <ul className="inline-grid grid-cols-2 gap-20 cursor-pointer text-20 font-arial">
            {rooms.map((item) => (
              <li
                className={`text-dark-green font-normal tracking-[0%] ${
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
