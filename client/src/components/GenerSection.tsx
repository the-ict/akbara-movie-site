import ArrowLeft from "../assets/icons/arrowleft.png"
import ArrowRight from "../assets/icons/arrowright.png"
import Action from "../assets/images/action.png"


export default function GenerSection() {
  return (
    <div>
        <div className="flex items-center w-full justify-between header">
            <div>
                <h1 className="text-3xl font-bold text-white">Explore our wide variety of categories</h1>
                <span className="text-[#999999]">Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</span>
            </div>
            <div className="flex items-center gap-4 slider rounded bg-[#0F0F0F]">
            <img src={ArrowLeft} alt="arrowleft icon" className="w-[50px] h-[50px] object-contain cursor-pointer bg-[#1F1F1F] slider" />
            <div className="flex items-center gap-2">
                <div className="w-4 bg-[#E50000] h-1 cursor-pointer"></div>
                <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
                <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
                <div className="w-4 bg-[#333333] h-1 cursor-pointer"></div>
            </div>
            <img src={ArrowRight} alt="arrowright icon"  className="w-[50px] h-[50px] object-contain cursor-pointer bg-[#1F1F1F] slider"/>
            </div>
        </div>

        {/* category items */}
        <div className="header flex items-center gap-10">
            {
            [1,2,3,4,].map(item => (
                <div className="bg-[#1A1A1A] cart w-[300px] h-max" key={item}>
                <img src={Action} alt="action image" />
                
                <div className="flex items-center justify-between gap-2 line-clamp-1 text-[20px] font-bold">
                    <p>Action</p>
                    <img src={ArrowRight} alt="arrowright icon" className="w-[30px] h-[30px] object-contain cursor-pointer"/>
                </div>
                </div>
            ))
            }
        </div>
    </div>
  )
}
