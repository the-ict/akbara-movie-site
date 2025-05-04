import Carousel from "react-multi-carousel";

import "../styles.css";
import "react-multi-carousel/lib/styles.css";

import Play from "../assets/icons/play.png";
import ArrowLeft from "../assets/icons/arrowleft.png";
import ArrowRight from "../assets/icons/arrowright.png";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { IMovie } from "../types/Movie";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

export default function Header() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const carouselRef = useRef<Carousel | null>(null);

  const goToPrevious = () => {
    carouselRef.current?.previous(1);
  };

  const goToNext = () => {
    carouselRef.current?.next(1);
  };

  useEffect(() => {
    const getLatest = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/movie/?limit=5&type=latest`
        );
        if (response.data) {
          setMovies(response.data);
        }
      } catch (error) {
        console.log("Xatolik chiqdi.");
      }
    };

    getLatest();
  }, []);
  return (
    <div className="header max-sm:w-[90vw]">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        pauseOnHover
        ref={carouselRef}
      >
        {movies.map((item) => {
          return (
            <div className="w-full relative cursor-pointer" key={item._id}>
              <div className="flex absolute w-full justify-between bottom-5 z-1 items-center gap-4 slider rounded max-lg:hidden">
                <img
                  src={ArrowLeft}
                  alt="arrowleft icon"
                  className="w-[50px] h-[50px] object-contain icon cursor-pointer bg-[#1F1F1F]"
                  onClick={goToPrevious}
                />
                <div className="flex items-center gap-2">
                  {/* <div className="w-4 bg-[#E50000] h-1 cursor-pointer"></div>
                      <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div> */}
                  {/* {
                        totalSlides.map(item => (
                          <div className={`w-4 ${(currentSlide + 1) == item ? 'bg-[#e90000]' :'bg-[#333333]'} h-1 cursor-pointer`} key={item}></div>
                        ))
                      } */}
                </div>
                <img
                  src={ArrowRight}
                  alt="arrowright icon"
                  className="w-[50px] h-[50px] object-contain icon cursor-pointer bg-[#1F1F1F]"
                  onClick={goToNext}
                />
              </div>

              <img
                src={item?.thumbnail}
                alt="comment of movie1"
                className="w-full h-[70vh] max-sm:h-[200px] object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              {/* container titles */}
              <div className="absolute bottom-20 flex items-center justify-center w-full max-sm:bottom-5">
                <div className="w-[70%] text-center">
                  <h3 className="text-3xl font-bold max-lg:text-2xl line-clamp-1 max-sm:text-[14px]">
                    {item?.name}
                  </h3>
                  <p className="text-[#999999] max-lg:hidden line-clamp-2">
                    {item?.description}
                  </p>

                  <div className="flex items-center max-lg:flex-col gap-5 justify-center navbar">
                    <button
                      onClick={() =>
                        window.location.replace(`/single-media/${item._id}`)
                      }
                      className="flex items-center gap-2 font-bold cursor-pointer max-sm:text-[14px] max-sm:px-1 bg-red-600 max-sm:bg-red-600/80 max-lg:w-[60%] max-lg:justify-center play-button rounded"
                    >
                      <img
                        src={Play}
                        alt="play icon"
                        className="w-[20px] h-[20px] object-contain"
                      />
                      <span>Ko'rish</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
