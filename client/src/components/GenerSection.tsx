import Carousel from "react-multi-carousel";
import ArrowLeft from "../assets/icons/arrowleft.png";
import ArrowRight from "../assets/icons/arrowright.png";
import Action from "../assets/images/action.png";
import React, { useEffect, useRef, useState } from "react";


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
  isSwiper?: boolean,
  title: string,
  description?: string
}


export default function GenerSection({isSwiper, title, description}: Props) {
  const [totalSlides, setTotalSlides] = useState<number[]>([])
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const carouselRef = useRef<Carousel | null>(null);

  useEffect(() => {
    if(carouselRef.current) {
      const total: number = carouselRef.current.props.children.length

      const array: number[] = []

      for(let i = 0; i<= total - 4; i++) {
        array.push(i)
      }

      setTotalSlides(array)
      
    }
  }, [])

  useEffect(() => {
    console.log(totalSlides)
  }, [totalSlides])


  const goToPrevious = () => {
    carouselRef.current?.previous(1);
    if(currentSlide !== 0 ) {
      setCurrentSlide(prev => prev - 1)
    } 
  };

  const goToNext = () => {
    carouselRef.current?.next(1);

    if(currentSlide < totalSlides.length - 1) {
      setCurrentSlide(prev => prev + 1)
    }
  };

  return (
    <div>
      <div className="flex items-center w-full justify-between header">
        <div>

          {
            isSwiper ? (
              <h1>True</h1>
            ) : (
              <div>
                <h1 className="text-3xl font-bold text-white">
                  {title}
                </h1>
                <span className="text-[#999999] navbar">
                  {description}
                </span>
              </div>
            )
          }
          
        </div>
        <div className="flex items-center gap-4 slider rounded bg-[#0F0F0F] max-lg:hidden">
          <img
            src={ArrowLeft}
            alt="arrowleft icon"
            className="w-[50px] h-[50px] object-contain icon cursor-pointer bg-[#1F1F1F]"
            onClick={goToPrevious} 
          />
          <div className="flex items-center gap-2">
            {/* <div className="w-4 bg-[#E50000] h-1 cursor-pointer"></div>
            <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div> */}
            {
              totalSlides.map(item => (
                <div className={`w-4 ${(currentSlide) == item ? 'bg-[#e90000]' :'bg-[#333333]'} h-1 cursor-pointer`} key={item}></div>
              ))
            }
          </div>
          <img
            src={ArrowRight}
            alt="arrowright icon"
            className="w-[50px] h-[50px] object-contain icon cursor-pointer bg-[#1F1F1F]"
            onClick={goToNext}  
          />
        </div>
      </div>

      {/* category items */}
      <div className="header w-full">
        <Carousel
          ref={carouselRef}  
          responsive={responsive}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              className="bg-[#1A1A1A] cart w-[300px] max-sm:w-[180px] h-max"
              key={item}
            >
              <img src={Action} alt="action image" />

              <div className="flex items-center justify-between gap-2 line-clamp-1 text-[20px] font-bold">
                <p>Action</p>
                <img
                  src={ArrowRight}
                  alt="arrowright icon"
                  className="w-[30px] h-[30px] object-contain cursor-pointer"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
