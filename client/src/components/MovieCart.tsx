import React from "react"
import Horror from "../assets/images/horror.png"


export default function () {
    return (
        <div className="movie-item relative rounded w-[300px] flex flex-col gap-3 cursor-pointer h-[400px] bg-[#1A1A1A]">
            <img src={Horror} alt="Horror movie item" />
            <span className="bg-[#E50000] movie-genre rounded font-bold absolute right-2 top-2">2019</span>
            
            <h3 className="font-bold line-clamp-1">Movie name something i dont know</h3>
            <div className="flex items-center gap-[1rem]">
                <span className="bg-[#E50000] movie-genre rounded font-bold">Horror</span>
                <span className="bg-[#E50000] movie-genre rounded font-bold">Dramma</span>
                <span className="bg-[#E50000] movie-genre rounded font-bold">Hind</span>
            </div>
        </div>
    )
}