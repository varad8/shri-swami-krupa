import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../App.css";
import createClient from "../client";
import axios from "axios";
import imageUrlBuilder from "@sanity/image-url";

function HeroSection() {
  const [activeDot, setActiveDot] = useState(0);
  const [cimage, setcImage] = useState([]);

  const builder = imageUrlBuilder(createClient);

  useEffect(() => {
    const fetchCarousel = async () => {
      try {
        // Fetch carousel data from the API
        const response = await axios.get(
          "https://shri-swami-krupa-server.vercel.app/carousel-data"
        );

        // Update the state with the fetched data
        setcImage(response.data.result);
        console.log(response.data.result);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
        setcImage([]);
      }
    };

    fetchCarousel();
  }, []);

  function urlFor(source) {
    return builder.image(source);
  }

  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

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
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {/* Map the cimage object in that */}
          {cimage.map((item, index) =>
            // Conditionally render the entire div based on the size and device
            (isMobile && item.size === "375x780") ||
            (!isMobile && item.size === "1920x1080") ? (
              <div key={index} className="relative h-screen w-full">
                <img
                  className="object-cover object-center w-full h-full"
                  src={urlFor(item.image.asset).url()}
                  alt={`Hero ${index + 1}`}
                />
                <div className="absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
                  <h1 className="text-4xl font-bold text-white">
                    {item.description}
                  </h1>
                </div>
              </div>
            ) : null
          )}
        </Slider>
      </div>
    </div>
  );
}

export default HeroSection;
