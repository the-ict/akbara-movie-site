import Logo from "../assets/images/logo.png"
import Search from "../assets/icons/search.png"
import Notifications from "../assets/icons/notifications.png"
import "../styles.css"


export default function Navbar() {
  return (
      <div className="flex items-center justify-between navbar">
        <a href="/">
          <img src={Logo} alt="logo" className="w-[200px] h-full object-contain cursor-pointer"/>
        </a>
        <ul className="flex items-center gap-5 bg-[#0F0F0F] navigation rounded">
          <li className="cursor-pointer navigation-item rounded hover:bg-[#1A1A1A]">Home</li>
          <li className="cursor-pointer navigation-item rounded hover:bg-[#1A1A1A]">Movies & Shows</li>
          <li className="cursor-pointer navigation-item rounded hover:bg-[#1A1A1A]">Support</li>
          <li className="cursor-pointer navigation-item rounded hover:bg-[#1A1A1A]">Subscriptions</li>
        </ul>
        <div className="flex items-center gap-7">
          <img src={Search} alt="search icon" className="w-[30px] h-[30px] object-contain cursor-pointer" />
          <img src={Notifications} alt="notificatiosn icon" className="w-[30px] h-[30px] object-contain cursor-pointer" />
        </div>
      </div>
  )
}
