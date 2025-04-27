import Carousel from "react-multi-carousel";
import ArrowLeft from "../assets/icons/arrowleft.png";
import ArrowRight from "../assets/icons/arrowright.png";
import Adventure from "../assets/images/adventure.png";
import Dramma from "../assets/images/dramma.png";
import Horror from "../assets/images/horror.png";
import Comedy from "../assets/images/comedy.png";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { IMovie } from "../types/Movie";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 2,
  },
};

interface Props {
  title: string;
  description?: string;
}

export default function GenerSection({ title, description }: Props) {
  const [movies, setMovies] = useState<IMovie[]>();
  useEffect(() => {
    const getMovie = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/movie?limit=4&type=latest"
      );
      console.log(res.data);
      setMovies(res.data);
    };

    getMovie();
  }, []);

  return (
    <div>
      <div className="header">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <span className="text-[#999999] navbar">{description}</span>
      </div>

      {/* category items */}
      <div className="header w-full flex justify-between max-sm:flex-col">
        {movies &&
          movies.map((item, _) => (
            <div
              className="bg-[#1A1A1A] cart border-[1px] border-transparent overflow-hidden w-[300px] max-sm:w-[180px] cursor-pointer transition-transform hover:scale-105 animate-border-glow"
              key={_}
              onClick={() => {
                window.location.replace(`/single-media/${item._id}`);
              }}
            >
              <img
                src={item.cart_img}
                className="w-full h-[300px] object-contain"
                alt="genre image"
              />
              <div className="flex items-center navbar justify-center gap-2 line-clamp-1 text-[20px] font-bold p-2">
                <p>{item.country}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
