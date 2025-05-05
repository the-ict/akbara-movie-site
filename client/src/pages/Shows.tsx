import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Geners from "../components/Geners";
import Marketing from "../components/Marketing";
import { IMovie } from "../types/Movie";
import axios from "axios";
import Pagination from "../components/Pagination";

export default function Shows() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const getMovie = async () => {
      const res = await axios.get("http://localhost:5000/api/movie");
      setMovies(res.data);
    };

    getMovie();
  }, []);

  // Sahifalanadigan filmlar
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMovies = movies.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen">
      <Header />
      <div>
        <div className="shows-gener flex flex-wrap gap-4 header justify-between">
          {currentMovies.map((item) => (
            <div
              className="bg-[#1A1A1A] animate-border-gree-grow cart border-[1px] border-transparent overflow-hidden w-[300px] max-sm:w-[170px] cursor-pointer transition-transform hover:scale-105"
              key={item._id}
              onClick={() => {
                window.location.replace(`/single-media/${item._id}`);
              }}
            >
              <img
                src={item.cart_img}
                className="w-full h-[300px] max-sm:h-[200px] object-contain"
                alt="genre image"
              />
              <div className="flex max-sm:text-sm items-center navbar justify-center gap-2 line-clamp-1 text-[20px] font-bold p-2">
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination component */}
      <Pagination
        totalItems={movies.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <Marketing />
    </div>
  );
}
