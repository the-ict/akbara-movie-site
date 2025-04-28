import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Geners from "../components/Geners";
import Marketing from "../components/Marketing";
import { IMovie } from "../types/Movie";
import axios from "axios";

export default function Shows() {
  const [movies, setMovies] = useState<IMovie[]>();

  useEffect(() => {
    const getMovie = async () => {
      const res = await axios.get("http://localhost:5000/api/movie");
      console.log(res.data);
      setMovies(res.data);
    };

    getMovie();
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <div>
        <div className="shows-gener flex flex-wrap gap-4 header justify-between">
          {movies &&
            movies.map((item, _) => (
              <div
                className="bg-[#1A1A1A] animate-border-gree-grow cart border-[1px] border-transparent overflow-hidden w-[300px] max-sm:w-[180px] cursor-pointer transition-transform hover:scale-105"
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
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Marketing />
    </div>
  );
}
