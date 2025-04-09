import Carousel from "react-multi-carousel";

import "../styles.css"
import "react-multi-carousel/lib/styles.css";

import Play from "../assets/icons/play.png"
import Add from "../assets/icons/add.png"
import Like from "../assets/icons/like.png"
import Sound from "../assets/icons/sound.png"
import ArrowLeft from "../assets/icons/arrowleft.png"
import ArrowRight from "../assets/icons/arrowright.png"
import { useRef } from "react";



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1
  }
};


export default function Header() {
    const carouselRef = useRef<Carousel | null>(null); // Refni yaratish
  
    // Custom arrow functions to control the carousel
    const goToPrevious = () => {
      carouselRef.current?.previous(1);
    };
  
    const goToNext = () => {
      carouselRef.current?.next(1);
    };
  return (
    <div className='header w-full'>
      
      <Carousel 
        responsive={responsive} 
        infinite
        autoPlay
        autoPlaySpeed={1555}
        pauseOnHover
        ref={carouselRef}
        >
          {
            [1,2,3].map(item => {
              return (
                <div className='w-full relative' key={item}>

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
                  src="https://s3-alpha-sig.figma.com/img/db21/254b/02aad8dff901b2ed9af793040b85b0dd?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=siSncvca7L9p3l-byg76BOJrmIxtCbcEqRdQpa5vtKN68SklNY0Ceeo~R2deDCTKWnGSUeIBx~D~IicrdO~n9NuXT30ealP7naCfvK0zG1W0mE~wBqDPhV-upbZ0utIKwMrnGrt7CXUTvoj~bXNu0kexZQ7hMyH4gcmdj659f1nuwdQw-Yq-CMXK9D523i6G8E5N47eF7TLal8tCbka5bXdv1Bw9MzhetvghLZs-V7MDkF5bXGSOi7xwmYD7LCIeWcMuu-3fkaRxjdRRBHuXHXmV-uW9Hr4mTEJEgGHWsWYQmmeIPI68Q~J2hEfeKpMiUQIlIBYmfLJYjKQZ7tuoMQ__"
                  alt="comment of movie1"
                  className='w-full h-[calc(100vh-25vh)] object-cover'/>
                  <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
                  {/* container titles */}
                  <div className='absolute bottom-20 flex items-center justify-center w-full'>
                    <div className='w-[70%] text-center'> 
                      <h3 className='text-3xl font-bold max-lg:text-2xl'>Avengers : Endgame</h3>  
                      <p className='text-[#999999] max-lg:hidden'>
                        With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.
                      </p>


                      <div className='flex items-center max-lg:flex-col gap-5 justify-center navbar'>
                        <button className='flex items-center gap-2 font-bold cursor-pointer bg-[#E50000] max-lg:w-[60%] max-lg:justify-center play-button rounded'>
                          <img src={Play} alt="play icon" className='w-[20px] h-[20px] object-contain'/>
                          <span>Play now</span>
                        </button>
                        <div className="flex gap-2">
                          <button className='cursor-pointer bg-[#0F0F0F] button'>
                            <img src={Add} alt="add icon" className='w-[20px] h-[20px] object-contain'/>
                          </button>
                          <button className='cursor-pointer bg-[#0F0F0F] button'>
                            <img src={Like} alt="like icon" className='w-[20px] h-[20px] object-contain'/>
                          </button>
                          <button className='cursor-pointer bg-[#0F0F0F] button'>
                            <img src={Sound} alt="sound icon" className='w-[20px] h-[20px] object-contain' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Carousel>;
    </div>
  )
}
