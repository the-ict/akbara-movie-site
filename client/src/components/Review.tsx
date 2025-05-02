import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import Star from "../assets/icons/star.png";
import HalfStar from "../assets/icons/halfstar.png";
import GapStar from "../assets/icons/gapstar.png"
import ArrowLeft from "../assets/icons/arrowleft.png";
import ArrowRight from "../assets/icons/arrowright.png";
import { IReview } from "../types/Review";

interface Props {
  reviews: IReview[];
}

const Review = ({ reviews }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(reviews, "from review");

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
            <h1 className="text-white font-bold max-lg:text-[17px]">
              {currentReview.name}
            </h1>
            <p className="text-[#999999] text-[15px]">
              {currentReview.country}
            </p>
          </div>
          <div className="flex items-center bg-[#262626] rounded-full icon gap-2 text-white text-sm">
            {[...Array(currentReview.rating)].map((_, i) => (
              <img
                key={i}
                src={Star}
                alt="star"
                className="w-4 h-4 max-lg:w-3 max-lg:h-3 object-contain"
              />
            ))}
            {[...Array(5 - currentReview.rating)].map((_, i) => (
              <img
                key={i}
                src={GapStar}
                alt="star"
                className="w-4 h-4 max-lg:w-3 max-lg:h-3 object-contain"
              />
            ))}
            
            <span>{currentReview.rating}</span>
          </div>
        </div>
        <p className="text-[#999999] text-sm navbar">{currentReview.message}</p>
      </div>

      <div className="flex items-center header gap-5">
        <img
          onClick={previous}
          src={ArrowLeft}
          alt="arrowleft"
          className="w-10 h-10 cursor-pointer bg-[#5d5353] rounded-full icon"
        />

        {reviews.map((_, index) => (
          <div
            className={`w-4 ${
              currentIndex == index ? "bg-[#e90000]" : "bg-[#333333]"
            } h-1 cursor-pointer`}
            key={index}
          ></div>
        ))}

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
