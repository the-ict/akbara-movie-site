import Movies from "../assets/images/movies.png"

export default function Marketing() {
  return (
    <div className="w-full xlmargin relative rounded overflow-hidden">
        <img src={Movies} alt="movies" className="w-full h-[300px] object-cover max-lg:bg-bottom-left max-lg:object-cover" />
        <div className='absolute inset-0 bg-gradient-to-r from-black to-transparent'></div>
        <div className="absolute top-0 flex items-center justify-center h-full w-full">
           <div className="flex items-center w-[80%] justify-between max-lg:flex-col max-lg:gap-10 max-lg:text-center">
                <div>
                    <h3 className="text-3xl font-bold">Start your free trial today!</h3>
                    <p className="text-[14px] navbar text-[#999999]">This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                </div>
                <button className="button rounded bg-[#E50000] cursor-pointer font-bold">
                    Start a Free Trail
                </button>
           </div>
        </div>
    </div>
  )
}
