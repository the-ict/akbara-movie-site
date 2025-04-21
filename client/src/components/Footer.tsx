import Linkedin from "../assets/icons/linkedin.png"
import Facebook from "../assets/icons/facebook.png"
import Twitter from "../assets/icons/twitter.png"


export default function Footer() {
  return (
    <div className="bg-[#0F0F0F] w-full flex flex-col items-center xlmargin footer">
      <div className="w-[1597px] footer max-lg:w-screen arrow-padding ">

        <div className="flex justify-between footer-nav flex-wrap gap-5">
          <ul className="max-lg:w-[45%]">
            <li className="footer-item">Home</li>
            <li>Categories</li>
            <li>Devices</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
          <ul className="max-lg:w-[45%]">
            <li className="footer-item">Movies</li>
            <li>Gernes</li>
            <li>Trending</li>
            <li>New Release</li>
            <li>Popular</li>
          </ul>
          <ul className="max-lg:w-[45%]">
            <li className="footer-item">Shows</li>
            <li>Gernes</li>
            <li>Trending</li>
            <li>New Release</li>
            <li>Popular</li>
          </ul>
          <ul className="max-lg:w-[45%]">
            <li className="footer-item">Support</li>
            <li>Contact Us</li>
          </ul>
          <ul className="max-lg:w-[45%]">
            <li className="footer-item">Subscription</li>
            <li>Plans</li>
            <li>Features</li>
          </ul>
          <div className="max-lg:w-[45%]">
            <p className="footer-item text-white font-bold">Contact with us</p>
            <div className="flex items-center gap-5">
              <img src={Facebook} alt="facebook" className="w-[50px] h-[50px] object-contain icon bg-[#1a1a1a] rounded hover:bg-[#000] max-sm:w-[30px] max-sm:h-[30px]"/>
              <img src={Twitter} alt="twitter" className="w-[50px] h-[50px] object-contain icon bg-[#1a1a1a] rounded hover:bg-[#000] max-sm:w-[30px] max-sm:h-[30px]"/>
              <img src={Linkedin} alt="linkedin" className="w-[50px] h-[50px] object-contain icon bg-[#1a1a1a] rounded hover:bg-[#000] max-sm:w-[30px] max-sm:h-[30px]"/>
            </div>
          </div>
        </div>

        <div className="flex navbar items-center justify-between header text-[#999999] max-lg:flex-col max-lg:items-start">
          <span>@2023 streamvib, All Rights Reserved</span>
          <div className="flex items-center gap-10">
            <span className="cursor-pointer hover:underline">Terms of Use</span>
            <span className="cursor-pointer hover:underline">Privacy Policy</span>
            <span className="cursor-pointer hover:underline">Cookie Policy</span>
          </div>
        </div>

      </div>
    </div>
  )
}
