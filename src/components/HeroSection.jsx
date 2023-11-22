import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../App.css";

function HeroSection() {
  const [activeDot, setActiveDot] = useState(0);

  const settings = {
    autoplay: true,
    infinite: true,
    lazyLoad: true,
    fade: true,
    dots: true,
    pauseOnHover: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    beforeChange: (current, next) => {
      setActiveDot(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            padding: "0",
            margin: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: i == activeDot ? "20px" : "10px",
          height: "10px",
          borderRadius: i == activeDot ? "5px" : "50%", // Make it circular
          background: i === activeDot ? "#E2703A" : "#FFC95F", // Change background color for active dot
          margin: "0 5px", // Adjust spacing between dots
        }}
      ></div>
    ),
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        <div className="relative h-screen w-full">
          <img
            className="object-cover object-center w-full h-full"
            src="../../imgposter.jpg"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Your Hero Title 1</h1>
          </div>
        </div>

        <div className="relative h-screen w-full">
          <img
            className="object-cover object-center w-full h-full"
            src="../../pic2.png"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Your Hero Title 2</h1>
          </div>
        </div>

        <div className="relative h-screen w-full">
          <img
            className="object-cover object-center w-full h-full"
            src="https://placehold.co/1920x1080"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Your Hero Title 3</h1>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}

export default HeroSection;
