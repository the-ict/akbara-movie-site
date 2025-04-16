import React from "react";
import Xmark from "../assets/icons/x.png"


interface Props {
 setNotification: React.Dispatch<React.SetStateAction<boolean>>; 
}

export default function CenteredNotification({setNotification}: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <div className="bg-gray-700 relative w-[calc(100vw-200px)] h-[calc(100vh-200px)] rounded-xl shadow-lg notification overflow-auto">
        <img onClick={() => setNotification(false)} src={Xmark} className="absolute top-5 right-5 w-[20px] h-[20px] object-contain cursor-pointer" alt="" />
        <ul className="text-white space-y-2">
          <li className="notification-item border-b-[2px] border-gray-800">5 ta kino qo'shildi</li>
          <li className="notification-item border-b-[2px] border-gray-800">5 ta kino qo'shildi</li>
          <li className="notification-item border-b-[2px] border-gray-800">5 ta kino qo'shildi</li>
          <li className="notification-item border-b-[2px] border-gray-800">5 ta kino qo'shildi</li>
          <li className="notification-item border-b-[2px] border-gray-800">5 ta kino qo'shildi</li>
          <li className="notification-item border-b-[2px] border-gray-800">5 ta kino qo'shildi</li>
        </ul>
      </div>
    </div>
  );
}
