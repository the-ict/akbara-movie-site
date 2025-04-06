import Logo from "../../public/images/logo.png"
import Search from "../../public/icons/search.png"
import Notifications from "../../public/icons/notifications.png"

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <a href="/">
        <img src={Logo} alt="logo" className="w-[200px] h-full object-contain cursor-pointer"/>
      </a>
      <div>
        <ul className="flex items-center gap-2 bg-[#0F0F0F] p-5 rounded">
          <li className="p-5 cursor-pointer">Home</li>
          <li className="p-5 cursor-pointer">Movies & Shows</li>
          <li className="p-5 cursor-pointer">Support</li>
          <li className="p-5 cursor-pointer">Subscriptions</li>
        </ul>
      </div>
      <div>
        <img src={Search} alt="search icon" />
        <img src={Notifications} alt="notificatiosn icon" />
      </div>
    </div>
  )
}
