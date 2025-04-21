import React from "react"
import Navbar from "../components/Navbar"
import MovieCart from "../components/MovieCart"


export default function () {
    return (
        <div>
            <Navbar />
            <h1 className="header text-2xl font-bold">69: Kino topildi...</h1>
            <div className="header min-h-[60vh] flex justify-center gap-[2rem] flex-wrap">
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(item => (
                        <MovieCart key={item}/> 
                    ))
                }
            </div>
    
        </div>
    )
}