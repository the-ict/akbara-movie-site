import Logo from "../assets/images/logo.png"
import Search from "../assets/icons/search.png"
import NotificationsImg from "../assets/icons/notifications.png"
import Menu from "../assets/icons/menu.png"
import Notifications from "./Notifications"
import "../styles.css"
import { useState } from "react"


export default function Navbar() {
  const [notifications, setNotifications] = useState<boolean>(false)
  const [search, setSearch] = useState<boolean>(false)
  
  return (
      <div className="flex items-center justify-between navbar-padding">
        <a href="/">
          <img src={Logo} alt="logo" className="w-[200px] max-lg:w-[150px] h-full object-contain cursor-pointer"/>
        </a>
        <ul className="flex items-center gap-5 bg-[#0F0F0F] navigation rounded max-lg:hidden">
          <li className="cursor-pointer navigation-item rounded hover:bg-[#1A1A1A]">Home</li>
          <li className="cursor-pointer navigation-item rounded hover:bg-[#1A1A1A]">Movies & Shows</li>
          <li className="cursor-pointer navigation-item rounded hover:bg-[#1A1A1A]">Support</li>
          <li className="cursor-pointer navigation-item rounded hover:bg-[#1A1A1A]">Subscriptions</li>
        </ul>
        <div className="flex items-center gap-7 max-lg:hidden">
        <div className="flex items-center gap-2">

            {
                  search && (
                    <input type="text" placeholder="Searching...." className="search" />
                  )
                }
                  <img src={Search} onClick={() => setSearch(!search)} alt="search icon" className="w-[30px] h-[30px] object-contain cursor-pointer" />

        </div>
          <img onClick={() => setNotifications(!notifications)} src={NotificationsImg} alt="notificatiosn icon" className="w-[30px] h-[30px] object-contain cursor-pointer" />
          {
            notifications && (
              <Notifications />
            ) 
          }
        </div>
        <img src={Menu} alt="" className="navigation rounded w-[50px] h-[50px] cursor-pointer lg:hidden" />
      </div>
  )
}
