import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import MovieCart from "../components/MovieCart"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { IMovie } from "../types/Movie"



export default function () {
    const [movies, setMovies] = useState<IMovie[] | null>(null)

    const location = useLocation()

    useEffect(() => {
        const getFilteredMovies = async () => {
            try {
                console.log("Hello world.")
                const result = await axios.get(`http://localhost:5000/api/movie${location.search}`)

                setMovies(result.data)
            } catch (error) {
                console.log(error)
            }
        }
        
        getFilteredMovies()
    }, [location])

    return (
        <div>
            <Navbar />
        {
                    movies?.length === 0 ? (
                        <h1 className="header text-2xl font-bold">Kechirasiz bu qidiruvga mos kinolar mavjud emas!</h1>
                    ): (
                        <h1 className="header text-2xl font-bold">
                            {movies?.length}: Kino topildi...
                        </h1>
                    )
                }
            <div className="header min-h-[60vh] flex gap-[2rem] flex-wrap">
                {
                    Array.isArray(movies) && (
                        movies.map(item => (
                            <MovieCart key={item._id} movie={item}/> 
                        ))
                    )
                }
            </div>
    
        </div>
    )
}