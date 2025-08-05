import React from "react";
import Slider from "react-slick";

function SampleNextArrow({ className, style, onClick }) {
  return (
    <div
      className={`${className} !block absolute top-1/2 -translate-y-1/2 right-2 z-20`}
      style={{
        ...style,
        color: "red",
        width: "30px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ className, style, onClick }) {
  return (
    <div
      className={`${className} !block absolute top-1/2 -translate-y-1/2 left-2 z-20`}
      style={{
        ...style,
        color: "green",
        width: "30px",
      }}
      onClick={onClick}
    />
  );
}


export default function TestSlider() {
  
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  

  return (
    <div className="container w-[600px] mx-auto mt-10 relative">
      <Slider 
        {...settings}
        >
        <div><h3 className="bg-red-200 p-10">Slide 1</h3></div>
        <div><h3 className="bg-blue-200 p-10">Slide 2</h3></div>
        <div><h3 className="bg-green-200 p-10">Slide 3</h3></div>
      </Slider>
    </div>
  );
}
