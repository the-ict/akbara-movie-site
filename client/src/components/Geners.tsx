import Carousel from "react-multi-carousel"

import ArrowLeft from "../assets/icons/arrowleft.png"
import ArrowRight from "../assets/icons/arrowright.png"
import Horror from "../assets/images/horror.png"

import "../styles.css"
import GenerSection from "./GenerSection"


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



export default function Geners() {
  
  return (
      <div>
        <div className="too">
            {/* <div className='w-max font-bold cursor-pointer bg-[#E50000] max-lg:hidden play-button rounded text-2xl'>
                <span>Movies</span>
            </div> */}

            {/* category items */}
            {
              ["Our Genres", "Popular Top 10 In Genres", "Trending Now", "New Releases",
                "Must - Watch Movies"
              ].map(item => (
                <GenerSection isSwiper={false} title={item}/>
              ))
            }

          </div>
      </div>
  )
}

const defaultSeries = (
      <div className="too">
        <div className='w-max font-bold max-lg:hidden cursor-pointer bg-[#E50000] play-button rounded text-2xl'>
            <span>Series</span>
        </div>

        <div className="flex items-center w-full justify-between header">
          <h1 className="text-3xl font-bold tracking-wide">Our Genres</h1>
          <div className="flex items-center gap-4 slider rounded bg-[#0F0F0F] max-lg:hidden">
            <img src={ArrowLeft} alt="arrowleft icon" className="w-[50px] h-[50px] object-contain cursor-pointer bg-[#1F1F1F] slider" />
            <div className="flex items-center gap-2">
              <div className="w-4 bg-[#E50000] h-1 cursor-pointer"></div>
              <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
              <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
              <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
            </div>
            <img src={ArrowRight} alt="arrowright icon"  className="w-[50px] h-[50px] object-contain cursor-pointer bg-[#1F1F1F] slider"/>
          </div>
        </div>

        {/* category items */}
        <div className="header flex items-center gap-10">
          {
            [1,2,3,4,].map(item => (
              <div className="bg-[#1A1A1A] cart w-[300px] h-max" key={item}>
                <img src={Horror} alt="Horror image" />
                
                <div className="flex items-center justify-between gap-2 line-clamp-1 text-[20px] font-bold">
                  <p>Horror</p>
                  <img src={ArrowRight} alt="arrowright icon" className="w-[30px] h-[30px] object-contain cursor-pointer"/>
                </div>
              </div>
            ))
          }
        </div>


        <div className="flex items-center w-full justify-between header">
          <h1 className="text-3xl font-bold tracking-wide">Popular Top 10 In Genres</h1>
          <div className="flex items-center gap-4 slider rounded bg-[#0F0F0F] max-lg:hidden">
            <img src={ArrowLeft} alt="arrowleft icon" className="w-[50px] h-[50px] object-contain cursor-pointer bg-[#1F1F1F] slider" />
            <div className="flex items-center gap-2">
              <div className="w-4 bg-[#E50000] h-1 cursor-pointer"></div>
              <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
              <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
              <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
            </div>
            <img src={ArrowRight} alt="arrowright icon"  className="w-[50px] h-[50px] object-contain cursor-pointer bg-[#1F1F1F] slider"/>
          </div>
        </div>

        {/* category items */}
        <div className="header flex items-center gap-10">
          {
            [1,2,3,4,].map(item => (
              <div className="bg-[#1A1A1A] cart w-[300px] h-max" key={item}>
                <img src={Horror} alt="Horror image" />
                
                <div className="flex items-center justify-between gap-2 line-clamp-1 text-[20px] font-bold">
                  <p>Horror</p>
                  <img src={ArrowRight} alt="arrowright icon" className="w-[30px] h-[30px] object-contain cursor-pointer"/>
                </div>
              </div>
            ))
          }
        </div>

        <div className="flex items-center w-full justify-between header">
          <h1 className="text-3xl font-bold tracking-wide">Trending Now</h1>
          <div className="flex items-center gap-4 slider rounded bg-[#0F0F0F] max-lg:hidden">
            <img src={ArrowLeft} alt="arrowleft icon" className="w-[50px] h-[50px] object-contain cursor-pointer bg-[#1F1F1F] slider" />
            <div className="flex items-center gap-2">
              <div className="w-4 bg-[#E50000] h-1 cursor-pointer"></div>
              <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
              <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
              <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
            </div>
            <img src={ArrowRight} alt="arrowright icon"  className="w-[50px] h-[50px] object-contain cursor-pointer bg-[#1F1F1F] slider"/>
          </div>
        </div>

        {/* category items */}
        <div className="header flex items-center gap-10">
          {
            [1,2,3,4,].map(item => (
              <div className="bg-[#1A1A1A] cart w-[300px] h-max" key={item}>
                <img src={Horror} alt="Horror image" />
                
                <div className="flex items-center justify-between gap-2 line-clamp-1 text-[20px] font-bold">
                  <p>Horror</p>
                  <img src={ArrowRight} alt="arrowright icon" className="w-[30px] h-[30px] object-contain cursor-pointer"/>
                </div>
              </div>
            ))
          }
        </div>


        <div className="flex items-center w-full justify-between header">
          <h1 className="text-3xl font-bold tracking-wide">New Releases</h1>
          <div className="flex items-center gap-4 slider rounded bg-[#0F0F0F] max-lg:hidden">
            <img src={ArrowLeft} alt="arrowleft icon" className="w-[50px] h-[50px] object-contain cursor-pointer bg-[#1F1F1F] slider" />
            <div className="flex items-center gap-2">
              <div className="w-4 bg-[#E50000] h-1 cursor-pointer"></div>
              <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
              <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
              <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
            </div>
            <img src={ArrowRight} alt="arrowright icon"  className="w-[50px] h-[50px] object-contain cursor-pointer bg-[#1F1F1F] slider"/>
          </div>
        </div>

        {/* category items */}
        <div className="header flex items-center gap-10">
          {
            [1,2,3,4,].map(item => (
              <div className="bg-[#1A1A1A] cart w-[300px] h-max" key={item}>
                <img src={Horror} alt="Horror image" />
                
                <div className="flex items-center justify-between gap-2 line-clamp-1 text-[20px] font-bold">
                  <p>Horror</p>
                  <img src={ArrowRight} alt="arrowright icon" className="w-[30px] h-[30px] object-contain cursor-pointer"/>
                </div>
              </div>
            ))
          }
        </div>

        <div className="flex items-center w-full justify-between header">
          <h1 className="text-3xl font-bold tracking-wide">Must - Watch Movies</h1>
          <div className="flex items-center gap-4 slider rounded bg-[#0F0F0F] max-lg:hidden">
            <img src={ArrowLeft} alt="arrowleft icon" className="w-[50px] h-[50px] object-contain cursor-pointer bg-[#1F1F1F] slider" />
            <div className="flex items-center gap-2">
              <div className="w-4 bg-[#E50000] h-1 cursor-pointer"></div>
              <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
              <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
              <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
            </div>
            <img src={ArrowRight} alt="arrowright icon"  className="w-[50px] h-[50px] object-contain cursor-pointer bg-[#1F1F1F] slider"/>
          </div>
        </div>

        {/* category items */}
        <div className="header flex items-center gap-10">
          {
            [1,2,3,4,].map(item => (
              <div className="bg-[#1A1A1A] cart w-[300px] h-max" key={item}>
                <img src={Horror} alt="Horror image" />
                
                <div className="flex items-center justify-between gap-2 line-clamp-1 text-[20px] font-bold">
                  <p>Horror</p>
                  <img src={ArrowRight} alt="arrowright icon" className="w-[30px] h-[30px] object-contain cursor-pointer"/>
                </div>
              </div>
            ))
          }
        </div>
      </div>
)