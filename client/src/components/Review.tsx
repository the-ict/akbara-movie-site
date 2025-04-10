import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import Star from "../assets/icons/star.png";
import HalfStar from "../assets/icons/halfstar.png";
import ArrowLeft from "../assets/icons/arrowleft.png";
import ArrowRight from "../assets/icons/arrowright.png";

const reviews = [
  {
    name: "Aniket Roy",
    country: "India",
    rating: 4.5,
    text: "This movie was recommended to me by a very dear friend. Had a houseful board and couldn't watch it."
  },
  {
    name: "John Doe",
    country: "USA",
    rating: 4.5,
    text: "Amazing storytelling and visuals. Really enjoyed it!"
  },
  {
    name: "Jane Smith",
    country: "UK",
    rating: 4.5,
    text: "A must-watch movie with a strong emotional punch."
  }
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => previous(),
    trackMouse: true,
  });

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="w-full flex flex-col items-center ">
      <div
        {...handleSwipe}
        className="w-full bg-[#141414] single-cart-review rounded shadow-lg transition-all duration-300"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white font-bold max-lg:text-[17px]">{currentReview.name}</h1>
            <p className="text-[#999999] text-[15px]">From {currentReview.country}</p>
          </div>
          <div className="flex items-center bg-[#262626] rounded-full icon gap-2 text-white text-sm">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={Star} alt="star" className="w-4 h-4 max-lg:w-3 max-lg:h-3 object-contain" />
            ))}
            <img src={HalfStar} alt="half-star" className="w-4 h-4 max-lg:w-3 max-lg:h-3 object-contain" />
            <span>{currentReview.rating}</span>
          </div>
        </div>
        <p className="text-[#999999] text-sm navbar">{currentReview.text}</p>
      </div>

      <div className="flex items-center header gap-5">
        <img
          onClick={previous}
          src={ArrowLeft}
          alt="arrowleft"
          className="w-10 h-10 cursor-pointer bg-[#5d5353] rounded-full icon"
        />

      {
        reviews.map((_,index) => (
          <div className={`w-4 ${currentIndex == index ? 'bg-[#e90000]' :'bg-[#333333]'} h-1 cursor-pointer`} key={index}></div>
        ))
      }

        <img
          onClick={next}
          src={ArrowRight}
          alt="arrowleft"
          className="w-10 h-10 cursor-pointer bg-[#5d5353] rounded-full icon"
        />
      </div>
    </div>
  );
};

export default Review;
