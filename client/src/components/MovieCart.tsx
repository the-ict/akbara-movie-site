import { Link } from "react-router-dom";
import { IMovie } from "../types/Movie";

type Props = {
  movie: IMovie;
};

export default function ({ movie }: Props) {
  return (
    <Link to={`/single-media/${movie._id}`}>
      <div className="movie-item group transition-transform relative rounded w-[285px] flex flex-col justify-between gap-3 cursor-pointer h-[400px] bg-[#1A1A1A]">
        <img
          src={movie.cart_img}
          alt="Horror movie item"
          className="w-full h-[75%] object-contain group-hover:scale-105 transition-transform"
        />
        <p className="bg-[#E50000] movie-genre rounded font-bold absolute right-2 top-2 ">
          {movie.created_time}
        </p>

        <h3 className="font-bold line-clamp-1">{movie.name}</h3>
        <div className="flex items-center gap-[1rem]">
          {movie.Genres.map((item, index) => {
            if (index < 2) {
              return (
                <span
                  key={index}
                  className="bg-[#E50000] movie-genre rounded font-bold"
                >
                  {item}
                </span>
              );
            }
          })}
        </div>
      </div>
    </Link>
  );
}
