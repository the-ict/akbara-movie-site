import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";

import Logo from "../assets/images/logo.png";
import Search from "../assets/icons/search.png";
import Menu from "../assets/icons/menu.png";
import X from "../assets/icons/xred.png";

import "../styles.css";

export default function Navbar() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [hiddenMenu, setHiddenMenu] = useState<boolean>(false);
  const [categoryHiddenMenu, setCategoryHiddenMenu] = useState<boolean>(false);
  const [hiddenYear, setHiddenYear] = useState<boolean>(false);
  const [hiddenGenre, setHiddenGenre] = useState<boolean>(false);
  const [hiddenCountry, setHiddenCountry] = useState<boolean>(false);

  const categoryRef = useRef<HTMLDivElement | null>(null);
  const yearRef = useRef<HTMLDivElement | null>(null);
  const genreRef = useRef<HTMLDivElement | null>(null);
  const countryRef = useRef<HTMLDivElement | null>(null);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setCategoryHiddenMenu(false);
      }
      if (yearRef.current && !yearRef.current.contains(event.target as Node)) {
        setHiddenYear(false);
      }
      if (
        genreRef.current &&
        !genreRef.current.contains(event.target as Node)
      ) {
        setHiddenGenre(false);
      }
      if (
        countryRef.current &&
        !countryRef.current.contains(event.target as Node)
      ) {
        setHiddenCountry(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between navbar-padding relative">
      <a href="/">
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

        {/* Kategoriyalar */}
        <div
          ref={categoryRef}
          className="flex items-center relative gap-2 cursor-pointer hover:bg-[#1A1A1A] navigation-item"
        >
          <p
            className="cursor-pointer relative rounded"
            onClick={() => setCategoryHiddenMenu(!categoryHiddenMenu)}
          >
            Kategoriyalar
          </p>
          <FaArrowAltCircleDown />
          {categoryHiddenMenu && (
            <div className="absolute flex flex-col gap-2 top-10 z-10 bg-[#1A1A1A] navbar-padding">
              <p
                className="font-bold hover:underline"
                onClick={() => {
                  setHiddenYear(!hiddenYear);
                  setHiddenCountry(false);
                  setHiddenGenre(false);
                }}
              >
                Yil bo'yicha
              </p>
              <p
                className="font-bold hover:underline"
                onClick={() => {
                  setHiddenYear(false);
                  setHiddenCountry(!hiddenCountry);
                  setHiddenGenre(false);
                }}
              >
                Davlat bo'yicha
              </p>
              <p
                className="font-bold hover:underline"
                onClick={() => {
                  setHiddenYear(false);
                  setHiddenCountry(false);
                  setHiddenGenre(!hiddenGenre);
                }}
              >
                Janrlar bo'yicha
              </p>
              {/* Year hidden menu */}
              {hiddenYear && (
                <div className="absolute left-full z-10 bg-[#1A1A1A] navbar-padding">
                  <div className="flex flex-col gap-5">
                    {[
                      2010, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
                      2020, 2021, 2022, 2023, 2024, 2025,
                    ].map((item, _) => (
                      <span key={_}>{item}</span>
                    ))}
                  </div>
                </div>
              )}
              {/* Country hidden menu */}
              {hiddenCountry && (
                <div className="absolute left-full z-10 bg-[#1A1A1A] navbar-padding">
                  <div className="flex flex-col gap-3">
                    {["Uzbekistan", "Aqsh", "Arab", "Tojik", "Hind"].map(
                      (item, _) => (
                        <span key={_}>{item}</span>
                      )
                    )}
                  </div>
                </div>
              )}
              {/* Genre hidden menu */}
              {hiddenGenre && (
                <div className="absolute left-full z-10 bg-[#1A1A1A] navbar-padding">
                  <div className="flex flex-col gap-5">
                    {[
                      "Drama",
                      "Komediya",
                      "Triller",
                      "Dahshat",
                      "Fantastika",
                      "Fantaziya",
                      "Jangari",
                      "Sarguzasht",
                      "Detektiv",
                      "Romantik",
                      "Tarixiy",
                      "Melodrama",
                      "Urush",
                      "Vestern",
                      "Noir",
                      "Kriminal",
                      "Musobaqali",
                      "Oilaviy",
                      "Musiqiy",
                      "Psixologik drama",
                    ].map((item, _) => (
                      <Link
                        key={_}
                        to={`/search?genre=${item}`}
                        className="hover:underline"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <Link
          className="cursor-pointer navigation-item rounded hover:bg-[#1A1A1A]"
          to={`/support`}
        >
          Qo'llab quvatlash
        </Link>
      </ul>

      {/* Search input */}
      <div className="flex items-center gap-7 max-lg:hidden">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
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

      {/* Hamburger menu (mobile) */}
      <img
        src={Menu}
        alt=""
        onClick={() => setHiddenMenu(true)}
        className="navigation rounded w-[50px] h-[50px] cursor-pointer lg:hidden"
      />

      {/* Hidden mobile menu */}
      {hiddenMenu && (
        <div className="navbar-hidden-menu fixed top-0 z-10 h-screen max-sm:w-full max-lg:w-[calc(100vw-60vw)] bg-black/80 flex flex-col gap-10 justify-center text-white">
          <img
            src={X}
            className="absolute w-[30px] h-[30px] cursor-pointer top-2 right-2 max-sm:right-5"
            alt="close"
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
              onChange={(e) => setSearchInput(e.target.value)}
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
