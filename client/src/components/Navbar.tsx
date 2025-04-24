import Logo from "../assets/images/logo.png";
import Search from "../assets/icons/search.png";
import Menu from "../assets/icons/menu.png";
import X from "../assets/icons/xred.png";

import "../styles.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";

export default function Navbar() {
  const [search, setSearch] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [hiddenMenu, setHiddenMenu] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between navbar-padding relative">
      <a href="/">
        {/* <img
          src={Logo}
          alt="logo"
          className="w-[50px] max-lg:w-[50px] h-full object-contain cursor-pointer"
        /> */}

        <span className="text-2xl font-bold">
          ATV<span className="text-green-600">.</span>uz
        </span>
      </a>
      <ul className="flex items-center gap-5 bg-[#0F0F0F] navigation rounded max-lg:hidden">
        <Link
          className="cursor-pointer navigation-item rounded hover:bg-[#1A1A1A]"
          to={`/`}
        >
          Bosh sahifa
        </Link>
        <div className="relative group flex items-center gap-2 cursor-pointer hover:bg-[#1A1A1A] navigation-item">
          <p className="cursor-pointer relative rounded">Kategoriyalar</p>
          <FaArrowAltCircleDown />
          {/* hidden category menu */}
          <div className="absolute top-full left-0 z-10 hidden w-full bg-[#1A1A1A] group-hover:block">
            <div className="footer arrow-padding w-full">
              <div className="flex justify-between footer-nav flex-wrap gap-5">
                <ul className="max-lg:w-[45%] flex flex-col">
                  <Link
                    to={`/search?genre=Drama`}
                    className="footer-item hover:underline font-bold"
                  >
                    Drama
                  </Link>
                  <Link
                    to={`/search?genre=Komediya`}
                    className="hover:underline"
                  >
                    Komediya
                  </Link>
                  <Link
                    to={`/search?genre=Triller`}
                    className="hover:underline"
                  >
                    Triller
                  </Link>
                  <Link
                    to={`/search?genre=Dahshat`}
                    className="hover:underline"
                  >
                    Dahshat
                  </Link>
                  <Link
                    to={`/search?genre=Fantastika`}
                    className="hover:underline"
                  >
                    Fantastika
                  </Link>
                </ul>
                <ul className="max-lg:w-[45%] flex flex-col">
                  <Link
                    to={`/search?genre=Fantaziya`}
                    className="footer-item hover:underline font-bold"
                  >
                    Fantaziya
                  </Link>
                  <Link
                    to={`/search?genre=Jangari`}
                    className="hover:underline"
                  >
                    Jangari
                  </Link>
                  <Link
                    to={`/search?genre=Sarguzasht`}
                    className="hover:underline"
                  >
                    Sarguzasht
                  </Link>
                  <Link
                    to={`/search?genre=Detektiv`}
                    className="hover:underline"
                  >
                    Detektiv
                  </Link>
                  <Link
                    to={`/search?genre=Romantik`}
                    className="hover:underline"
                  >
                    Romantik
                  </Link>
                </ul>
                <ul className="max-lg:w-[45%] flex flex-col">
                  <Link
                    to={`/search?genre=Tarixiy`}
                    className="footer-item hover:underline font-bold"
                  >
                    Tarixiy
                  </Link>
                  <Link
                    to={`/search?genre=Melodrama`}
                    className="hover:underline"
                  >
                    Melodrama
                  </Link>
                  <Link to={`/search?genre=Urush`} className="hover:underline">
                    Urush
                  </Link>
                  <Link
                    to={`/search?genre=Vestern`}
                    className="hover:underline"
                  >
                    Vestern
                  </Link>
                  <Link to={`/search?genre=Noir`} className="hover:underline">
                    Noir
                  </Link>
                </ul>
                <ul className="max-lg:w-[45%] flex flex-col">
                  <Link
                    to={`/search?genre=Kriminal`}
                    className="footer-item hover:underline font-bold"
                  >
                    Kriminal
                  </Link>
                  <Link
                    to={`/search?genre=Musobaqali`}
                    className="hover:underline"
                  >
                    Musobaqali
                  </Link>
                  <Link
                    to={`/search?genre=Oilaviy`}
                    className="hover:underline"
                  >
                    Oilaviy
                  </Link>
                  <Link
                    to={`/search?genre=Musiqiy`}
                    className="hover:underline"
                  >
                    Musiqiy
                  </Link>
                  <Link
                    to={`/search?genre=Psixologik drama`}
                    className="hover:underline"
                  >
                    Psixologik drama
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Link
          className="cursor-pointer navigation-item rounded hover:bg-[#1A1A1A]"
          to={`/support`}
        >
          Qo'llab quvatlash
        </Link>
      </ul>
      <div className="flex items-center gap-7 max-lg:hidden">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={searchInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchInput(e.target.value)
            }
            placeholder="Searching...."
            className="search"
          />
          <img
            src={Search}
            onClick={() =>
              window.location.replace(`/search?name=${searchInput}`)
            }
            alt="search icon"
            className="w-[30px] h-[30px] object-contain cursor-pointer"
          />
        </div>
      </div>
      <img
        src={Menu}
        alt=""
        onClick={() => setHiddenMenu(true)}
        className="navigation rounded w-[50px] h-[50px] cursor-pointer lg:hidden"
      />

      {/* Hidden menu */}
      {hiddenMenu && (
        <div className="navbar-hidden-menu fixed top-0 z-10 h-screen max-sm:w-full max-lg:w-[calc(100vw-60vw)] bg-black/80 flex flex-col gap-10 justify-center text-white">
          <img
            src={X}
            className="absolute w-[30px] h-[30px] cursor-pointer top-2 right-2 max-sm:right-5"
            alt=""
            onClick={() => setHiddenMenu(false)}
          />
          <a href="/">
            <img
              src={Logo}
              alt="logo"
              className="w-[200px] max-lg:w-[150px] h-full object-contain cursor-pointer"
            />
          </a>
          <ul className="flex items-center gap-10 navigation flex-col justify-between">
            <Link className="cursor-pointer hover:underline " to={`/`}>
              Home
            </Link>
            <Link className="cursor-pointer hover:underline " to={`/shows`}>
              Movies & Shows
            </Link>
            <Link className="cursor-pointer hover:underline " to={`/support`}>
              Support
            </Link>
          </ul>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={searchInput}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchInput(e.target.value)
              }
              placeholder="Searching...."
              className="flex-1 search"
            />
            <img
              src={Search}
              onClick={() =>
                window.location.replace(`/search?name=${searchInput}`)
              }
              alt="search icon"
              className="w-[30px] h-[30px] object-contain cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
}
