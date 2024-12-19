import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

function Slider() {
  const slides = [
    {
      id: 1,
      heading: "Make more time for the work that matters most",
      description: "Best software platform for running an internet business.",
      image: "Group 35.png",
    },
    {
      id: 2,
      heading: "Build more time for the work that matters most",
      description: "Best software platform for running an internet business.",
      image: "Group 31.png",
    },
    {
      id: 3,
      heading: "Take more time for the work that matters most",
      description: "Best software platform for running an internet business.",
      image: "Component 1.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const NextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { heading, description, image } = slides[currentIndex];

  return (
    <section className="max-w-[1400px] py-24 px-6 md:px-12 mx-auto">
      <div className="flex flex-col justify-between md:flex-row items-center gap-20">
        {/* left side  */}
        <div className="flex flex-col justify-between w-full md:w-1/2 space-y-6">
          <img className="w-12 mb-3  md:w-18" src="/Shape.png" alt="" />
          <h1 className="text-2xl md:text-5xl font-bold text-black max-w-md">
            {heading}
          </h1>
          <p className="text-gray-400 max-w-sm  text-[20px]">{description}</p>

          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={prevSlide}
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"
            >
              <ChevronLeft className="text-black" />
            </button>

            <button
              onClick={NextSlide}
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"
            >
              <ChevronRight className="text-black" />
            </button>
          </div>
        </div>

        {/* right side  */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-full md:w-[65%] object-cover" src={image} alt="" />
        </div>
      </div>

      <div className="flex justify-center items-center mt-16">
            
            
            <marquee behavior="scroll" direction="right" scrollamount="12"><img className="w-full object-cover" src="/Logos.png" alt="" /></marquee>
      </div>
    </section>
  );
}

export default Slider;