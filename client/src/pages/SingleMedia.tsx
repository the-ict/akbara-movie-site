import Play from "../assets/icons/play.png";
import Date from "../assets/icons/date.png";
import Language from "../assets/icons/language.png";
import Genres from "../assets/icons/genres.png";
import Plus from "../assets/icons/plus.png";
import { AiFillLike } from "react-icons/ai";

import { AiOutlineLike } from "react-icons/ai";

import Marketing from "../components/Marketing";
import { useEffect, useState } from "react";
import Review from "../components/Review";

import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { IMovie } from "../types/Movie";
import WriteReview from "../components/WriteReview";
import PlayVideo from "../components/PlayVideo";
import { useDispatch, useSelector } from "react-redux";
import { FaRegFlag } from "react-icons/fa";
import { RootState } from "../redux/store";
import { gettingMovie, like, unlike } from "../redux/MovieSlice";

export default function SingleMedia() {
  const [reviewForm, setReviewForm] = useState<boolean>(false);
  const [video, setVideo] = useState<boolean>(false);

  const store = useSelector((store: RootState) => store.user);
  const movie = useSelector((store: RootState) => store.movie);

  const dispatch = useDispatch();

  console.log(store);

  const params = useParams();

  useEffect(() => {
    const getSingleMedia = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/movie/${params.id}`
        );

        dispatch(gettingMovie(response.data));
        console.log(movie, "from state 2");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getSingleMedia();
  }, []);

  async function handleLike() {
    if (store?.user?._id) {
      if (movie?.likes.includes(store?.user?._id)) {
        try {
          await axios.put(
            `http://localhost:5000/api/movie/unlike/${movie?._id}`,
            {
              userId: store?.user?._id,
            }
          );
          dispatch(unlike(store.user._id));

          // window.location.reload();
        } catch (error) {
          alert("There is an error, please try later.");
          console.log("un.like errror", error);
        }
        return;
      }

      try {
        const result = await axios.put(
          `http://localhost:5000/api/movie/like/${movie?._id}`,
          {
            userId: store?.user?._id,
          }
        );
        dispatch(like(store.user._id));

        // window.location.reload();
        console.log(result.data);
      } catch (error) {
        alert("There is an error, please try later.");
        console.log("like errror", error);
      }
    } else {
      alert("Siz like bosish uchun ro'yhatdan o'tishingiz kerak!");
      window.location.replace("/support");
    }
  }
  return (
    <div>
      {video && (
        <PlayVideo url={String(movie?.video_link)} setVideo={setVideo} />
      )}

      {/* Header Section */}
      <div className="relative w-full header">
        <img
          src={movie?.thumbnail}
          alt="movie cover"
          className="w-full h-[calc(100vh-25vh)] max-sm:object-contain max-sm:h-max object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        {/* Title and Play/Action Buttons */}
        <div className="absolute bottom-20 max-sm:-bottom-10 w-full flex items-center justify-center">
          <div className="w-[70%] text-center">
            <h3 className="text-3xl font-bold max-lg:text-2xl max-sm:text-[16px]">
              {movie?.name}
            </h3>

            <div className="flex items-center gap-5 header justify-center navbar max-lg:flex-col max-sm:flex-row">
              <button
                onClick={() => setVideo(true)}
                className="flex items-center gap-2 font-bold cursor-pointer bg-[#E50000] play-button rounded"
              >
                <img
                  src={Play}
                  alt="play icon"
                  className="w-[20px] h-[20px] object-contain"
                />
                <span className="text-[14px]">Hoziroq ko'rish</span>
              </button>
              <div className="flex items-center gap-4">
                {/* <button className="cursor-pointer bg-[#0F0F0F] button">
                  <img
                    src={Add}
                    alt="add icon"
                    className="w-[20px] h-[20px] object-contain"
                  />
                </button> */}
                <button className="cursor-pointer bg-[#0F0F0F] button">
                  {movie?.likes.includes(String(store.user?._id)) ? (
                    <AiFillLike
                      onClick={handleLike}
                      className="w-[20px] h-[20px] object-contain"
                    />
                  ) : (
                    <AiOutlineLike
                      onClick={handleLike}
                      className="w-[20px] h-[20px] object-contain"
                    />
                  )}
                  {/* <img
                    
                    alt="like icon"
                    onClick={handleLike}
                    className="w-[20px] h-[20px] object-contain"
                  /> */}
                </button>
                {/* <button className="cursor-pointer bg-[#0F0F0F] button">
                  <img
                    src={Sound}
                    alt="sound icon"
                    className="w-[20px] h-[20px] object-contain"
                  />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Media Information Section */}
      <div className="flex gap-5 justify-between max-lg:flex-col too w-full">
        {/* Left Section: Description & Reviews */}
        <div className="w-[70%] flex flex-col gap-5 max-sm:w-full">
          <div className="single-cart bg-[#262626] rounded">
            <p className="text-[#999999]">Malumot</p>
            <p className="navbar">{movie?.description}</p>
          </div>

          {/* Reviews Section */}
          <div className="single-cart bg-[#262626] max-lg:hidden">
            <div className="flex items-center justify-between">
              <h1 className="text-[#999999]">Fikrlar</h1>
              <button
                className="flex items-center gap-5 button bg-[#141414] cursor-pointer rounded"
                onClick={() => {
                  if (store.user?._id) {
                    setReviewForm(true);
                  } else {
                    alert("Izoh qo'shish uchun birinchi ro'yhatdan o'ting!");
                    window.location.replace("/support");
                  }
                }}
              >
                <img
                  src={Plus}
                  alt="plus"
                  className="w-[30px] h-[30px] object-contain"
                />
                <span>Izoh qo'shish</span>
              </button>
            </div>

            {/* Review Cards */}
            <div className="header">
              {Array.isArray(movie?.reviews) && movie?.reviews.length > 0 ? (
                <Review reviews={movie.reviews} />
              ) : (
                <h1>Hozircha izohlar mavjud emas.</h1>
              )}
            </div>
          </div>

          {/* Pagination */}
        </div>

        {/* Right Section: Media Details */}
        <div className="w-[30%] max-sm:w-full info flex flex-col gap-5 bg-[#262626] rounded single-cart-review">
          <label>
            <img src={Date} alt="date" />
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

          <label>
            <FaRegFlag />
            <span>Davlati</span>
          </label>
          <span
            className="bg-[#141414] info-lang-cart w-max"
            onClick={() => {
              window.location.replace(`/search?country=${movie?.country}`);
            }}
          >
            {movie && movie?.country}
          </span>

          <label>
            <img src={Genres} alt="" />
            <span>Janrlar</span>
          </label>
          <div className="flex items-center flex-wrap gap-3">
            {movie?.Genres &&
              movie.Genres.map((genre, index) => {
                console.log(genre);
                return (
                  <Link
                    to={`http://localhost:5173/search?genre=${genre}`}
                    key={index}
                    className="cursor-pointer button bg-[#141414] rounded"
                  >
                    {genre}
                  </Link>
                );
              })}
          </div>
        </div>

        {reviewForm && (
          <WriteReview
            setReviewForm={setReviewForm}
            movie_id={String(movie?._id)}
          />
        )}
        <div className="arrow-padding bg-[#262626] lg:hidden">
          <div className="flex items-center justify-between">
            <h1 className="text-[#999999]">Reviews</h1>
            <button
              onClick={() => {
                if (store.user?._id) {
                  setReviewForm(true);
                } else {
                  alert("Izoh qo'shish uchun birinchi ro'yhatdan o'ting!");
                  window.location.replace("/support");
                }
              }}
              className="flex items-center gap-5 button bg-[#141414] cursor-pointer rounded"
            >
              <img
                src={Plus}
                alt="plus"
                className="w-[30px] h-[30px] object-contain"
              />
              <span>Add Your Review</span>
            </button>
          </div>

          {/* Review Cards */}
          <div className="header">
            {Array.isArray(movie?.reviews) && movie?.reviews.length > 0 ? (
              <Review reviews={movie.reviews} />
            ) : (
              <h1>Hozircha izohlar mavjud emas.</h1>
            )}
          </div>
        </div>
      </div>
      <Marketing />
    </div>
  );
}
