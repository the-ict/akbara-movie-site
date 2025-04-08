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

export default function SingleMedia() {
  return (
    <div>
        <Navbar />
        <div className='w-full relative header'>
            <img 
            src="https://s3-alpha-sig.figma.com/img/db21/254b/02aad8dff901b2ed9af793040b85b0dd?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=siSncvca7L9p3l-byg76BOJrmIxtCbcEqRdQpa5vtKN68SklNY0Ceeo~R2deDCTKWnGSUeIBx~D~IicrdO~n9NuXT30ealP7naCfvK0zG1W0mE~wBqDPhV-upbZ0utIKwMrnGrt7CXUTvoj~bXNu0kexZQ7hMyH4gcmdj659f1nuwdQw-Yq-CMXK9D523i6G8E5N47eF7TLal8tCbka5bXdv1Bw9MzhetvghLZs-V7MDkF5bXGSOi7xwmYD7LCIeWcMuu-3fkaRxjdRRBHuXHXmV-uW9Hr4mTEJEgGHWsWYQmmeIPI68Q~J2hEfeKpMiUQIlIBYmfLJYjKQZ7tuoMQ__"
            alt="comment of movie1"
            className='w-full h-[calc(100vh-25vh)] object-cover'/>
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
            {/* container titles */}
            <div className='absolute bottom-20 flex items-center justify-center w-full'>
                <div className='w-[70%] text-center'> 
                <h3 className='text-3xl font-bold'>Avengers : Endgame</h3>  
                <p className='text-[#999999]'>
                    With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.
                </p>


                <div className='flex items-center gap-5 justify-center navbar'>
                    <button className='flex items-center gap-2 font-bold cursor-pointer bg-[#E50000] play-button rounded'>
                      <img src={Play} alt="play icon" className='w-[20px] h-[20px] object-contain'/>
                    <span>Play now</span>
                    </button>
                    <button className='cursor-pointer bg-[#0F0F0F] button'>
                      <img src={Add} alt="add icon" className='w-[20px] h-[20px] object-contain'/>
                    </button>
                    <button className='cursor-pointer bg-[#0F0F0F] button'>
                      <img src={Like} alt="like icon" className='w-[20px] h-[20px] object-contain'/>
                    </button>
                    <button className='cursor-pointer bg-[#0F0F0F] button'>
                      <img src={Sound} alt="sound icon" className='w-[20px] h-[20px] object-contain' />
                    </button>
                </div>
              </div>
            </div>
        </div>


      {/*informations */}
      <div className="header flex gap-5 justify-between">
        <div className="flex-7 flex flex-col gap-5">

          <div className="single-cart bg-[#262626] rounded">
            <p className="text-[#999999]">Description</p>

            <p className="navbar">A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
          </div>

          {/* Reviews */}
          <div className="single-cart bg-[#262626]">
            <div className="flex items-center w-full justify-between">
              <h1 className="text-[#999999]">Reviews</h1>
              <button className="flex items-center justify-center gap-5 button bg-[#141414] cursor-pointer rounded">
                <img src={Plus} alt="plus" className="w-[30px] h-[30px] object-contain"/>
                <span>Add Your Review</span>
              </button>
            </div>
            
            <div className="header">
              <div className="single-cart-review rounded bg-[#141414]">
                <div>
                  <h1 className="text-white font-bold">Aniket Roy</h1>
                  <p className="text-[#999999]">From India</p>
                </div>

                <div className="flex items-center rounded-full bg-[#262626] button gap-3">
                  <img src={Star} alt="star" className="w-[30px] h-[30px] object-contain" />
                  <img src={Star} alt="star"  className="w-[30px] h-[30px] object-contain"/>
                  <img src={Star} alt="star" className="w-[30px] h-[30px] object-contain" />
                  <img src={Star} alt="star"  className="w-[30px] h-[30px] object-contain"/>
                  <img src={HalfStar} alt="half-star" className="w-[30px] h-[30px] object-contain"/>
                  <span>4.5</span>
                </div>
                <p>This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.</p>
              </div>
            </div>
          </div>

        </div>



        <div className="flex-3">
          <label>
            <img src={Date} alt="date"/>
            <span>Released Year</span>
          </label>
          <label>
            <img src={Language} alt="langauge" />
            <span>Available Languages</span>
          </label>
          <div>
            <span>Uzbek</span>
          </div>
          
          <label >
            <img src={Rating} alt="rating" />
            <span>Ratings</span>
          </label>
          
          <div>
            <div>
              <p>IMDB</p>
              <div>
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={HalfStar} alt="half-star"/>
                <span>4.5</span>
              </div>
            </div>

            <div>
              <p>StreamVibe</p>
              <div>
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={GapStar} alt="gap star" />
                <span>4</span>
              </div>
            </div>
          </div>

          <label>
            <img src={Genres} alt="" />
            <span>Gernes</span>
          </label>
          <div>
            <span>Action</span>
            <span>Adventure</span>
          </div>

          <label>
            Director
          </label>
          <div>
            <img src={AuthorProfile} alt="authorprofile" />
            <div>
              <h1>Rishab Shetty</h1>
              <p>From India</p>
            </div>
          </div>

          <label>
            Music
          </label>
          <div>
            <img src={AuthorProfile} alt="authorprofile" />
            <div>
              <h1>Rishab Shetty</h1>
              <p>From India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
