import Phone from "../assets/icons/phone.png"
import Tablet from "../assets/icons/tablet.png"
import Tv from "../assets/icons/tv.png"


interface IProveCart {
  title: string,
  name: string,
  icon: string
}

const proveCarts: IProveCart[] = [
  {
    title: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    icon: Phone,
    name: "Smartphones"
  },
  {
    title:"StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    name: "Tablet",
    icon: Tablet
  },
  {
    title: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    name: "Smart TV",
    icon: Tv
  }
]


export default function ProvideCart() {
  return (
    <div className="xlmargin">
        <h1 className="text-3xl text-white font-bold">We Provide you streaming experience across various devices.</h1>
        <p className="navbar text-[#999999] w-[60%] max-lg:w-[100%]">With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>

        
        <div className="header flex items-center gap-10 max-lg:flex-col">
            {
              proveCarts.map((item,_) => (
                <div key={_} className="w-[500px] max-lg:w-screen prove-cart bg-[#0F0F0F] roudned bg-gradient-to-tr from-black to-[#e50000]/10 ">
                    <div className="flex items-center gap-5">
                        <img 
                          className="w-[50px] h-[50px] slider bg-[#1F1F1F] cursor-pointer object-contain"
                          src={item.icon}
                          alt="phone" />
                        <span className="text-[20px] font-bold">{item.name}</span>
                    </div>
                    <p className="text-[#999999] header">
                      {item.title}
                    </p>
                </div>
              ))
            }
        </div>
    </div>
  )
}
