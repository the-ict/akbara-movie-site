import Navbar from "../components/Navbar";

import Play from "../assets/icons/play.png"
import Add from "../assets/icons/add.png"
import Like from "../assets/icons/like.png"
import Sound from "../assets/icons/sound.png"
import Date from "../assets/icons/date.png"
import Language from "../assets/icons/language.png"
import Rating from "../assets/icons/ratings.png"
import Star from "../assets/icons/star.png"
import HalfStar from "../assets/icons/halfstar.png"
import GapStar from "../assets/icons/gapstar.png"
import Genres from "../assets/icons/genres.png"
import AuthorProfile from "../assets/icons/authorprofile.png"
import Plus from "../assets/icons/plus.png"
import ArrowLeft from "../assets/icons/arrowleft.png"
import ArrowRight from "../assets/icons/arrowright.png"
import Marketing from "../components/Marketing";
import Carousel from "react-multi-carousel";
import { useEffect, useRef, useState } from "react";
import Review from "../components/Review";


import {useParams} from "react-router-dom"
import axios from "axios";
import { IMovie } from "../types/Movie";
import { getRatingValue } from "../functions/rating";



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
};

export default function SingleMedia() {
  const [movie, setMovie] = useState<IMovie>()
  const carouselRef = useRef<Carousel | null>(null)

  const params = useParams()
  

  useEffect(() => {
    const getSingleMedia = async() => {
      try {
        const response = await axios.get(`http://localhost:5000/api/movie/${params.id}`)
        console.log(response.data)
        setMovie(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    getSingleMedia()
  }, [])
  return (
    <div>
        <Navbar />
        
        {/* Header Section */}
        <div className="relative w-full header">
            <img 
                src={movie?.thumbnail}
                alt="movie cover"
                className="w-full h-[calc(100vh-25vh)] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            
            {/* Title and Play/Action Buttons */}
            <div className="absolute bottom-20 w-full flex items-center justify-center">
                <div className="w-[70%] text-center">
                    <h3 className="text-3xl font-bold max-lg:text-2xl">{movie?.name}</h3>

                    <div className="flex items-center gap-5 header justify-center navbar max-lg:flex-col">
                        <button className="flex items-center gap-2 font-bold cursor-pointer bg-[#E50000] play-button rounded">
                            <img src={Play} alt="play icon" className="w-[20px] h-[20px] object-contain" />
                            <span>Play now</span>
                        </button>
                        <div className="flex items-center gap-4">
                          <button className="cursor-pointer bg-[#0F0F0F] button">
                              <img src={Add} alt="add icon" className="w-[20px] h-[20px] object-contain" />
                          </button>
                          <button className="cursor-pointer bg-[#0F0F0F] button">
                              <img src={Like} alt="like icon" className="w-[20px] h-[20px] object-contain" />
                          </button>
                          <button className="cursor-pointer bg-[#0F0F0F] button">
                              <img src={Sound} alt="sound icon" className="w-[20px] h-[20px] object-contain" />
                          </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Media Information Section */}
        <div className="flex gap-5 justify-between max-lg:flex-col">
            {/* Left Section: Description & Reviews */}
            <div className="flex-7 flex flex-col gap-5">
                <div className="single-cart bg-[#262626] rounded">
                    <p className="text-[#999999]">Description</p>
                    <p className="navbar">{movie?.description}</p>
                </div>

                {/* Reviews Section */}
                <div className="single-cart bg-[#262626] max-lg:hidden">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#999999]">Reviews</h1>
                        <button className="flex items-center gap-5 button bg-[#141414] cursor-pointer rounded">
                            <img src={Plus} alt="plus" className="w-[30px] h-[30px] object-contain" />
                            <span>Add Your Review</span>
                        </button>
                    </div>

                    {/* Review Cards */}
                    <div className="header">
                      
                      <Review />
                        
                    </div>
                </div>

                {/* Pagination */}
                
            </div>

            {/* Right Section: Media Details */}
            <div className="flex-3 info flex flex-col gap-5 bg-[#262626] rounded single-cart-review">
              <label>
                <img src={Date} alt="date"/>
                <span>Kino chiqgan vaqt</span>
              </label>
              <h1>{movie?.created_time}</h1>
              <label>
                <img src={Language} alt="langauge" />
                <span>Ko'rish mumkin bo'lgan tillar</span>
              </label>
              <div>
                <span className="bg-[#141414] info-lang-cart">Uzbek</span>
              </div>
              
              <label >
                <img src={Rating} alt="rating" />
                <span>Ratings</span>
              </label>
              
              <div className="flex items-center gap-5">
                <div className="font-bold button bg-[#141414] flex-1/2" onClick={() => {
                  window.location.replace(String(movie?.ratings[0].link))
                }}>
                  <p>IMDB</p>
                  <div className="flex items-center gap-1 star-container cursor-pointer">
                    {
                      movie?.ratings[0].rating && (
                        getRatingValue(Number(movie?.ratings[0].rating)).map((item) => {
                          if(item == 1) {
                            return (
                              <img src={Star} alt="star"  className="max-lg:w-[10px] max-lg:h-[10px]" key={item + Math.random()}/>
                            )
                          }
                          return (
                              <img src={HalfStar} alt="half-star" className="max-lg:w-[10px] max-lg:h-[10px]" key={item + Math.random()}/>
                          )
                      })
                      )
                    }
                    <span>{movie?.ratings[0].rating}</span>
                  </div>
                </div>

              </div>

              <label>
                <img src={Genres} alt="" />
                <span>Gernes</span>
              </label>
              <div>
                {
                  movie?.Genres && (
                    movie.Genres.map((genre, index) => {
                      console.log(genre)
                      return (
                        <span key={index}>{genre}</span>
                      );
                    })
                  )
                }
              </div>

              <label>
                Director
              </label>
              <div className="flex items-center gap-5 button bg-[#141414] rounded">
                <img src={AuthorProfile} alt="authorprofile" className="h-full w-[20%] object-contain"/>
                <div>
                  <h1 className="font-bold">{movie?.Director[0].name}</h1>
                  <p>From {movie?.Director[0].country}</p>
                </div>
              </div>

              <label>
                Music
              </label>
              <div className="flex items-center gap-5 button bg-[#141414] rounded">
                <img src={AuthorProfile} alt="authorprofile" className="h-full w-[20%] object-contain"/>
                <div>
                  <h1 className="font-bold">{movie?.Music[0].name}</h1>
                  <p>From {movie?.Music[0].country}</p>
                </div>
              </div>
            </div>

            <div className="arrow-padding bg-[#262626] lg:hidden">
                <div className="flex items-center justify-between">
                    <h1 className="text-[#999999]">Reviews</h1>
                    <button className="flex items-center gap-5 button bg-[#141414] cursor-pointer rounded">
                        <img src={Plus} alt="plus" className="w-[30px] h-[30px] object-contain" />
                        <span>Add Your Review</span>
                    </button>
                </div>

                {/* Review Cards */}
                <div className="header">
                  
                  <Review />
                    
                </div>
            </div>
        </div>
        <Marketing />
    </div>
  );
}
