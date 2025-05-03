import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";

import Logo from "../assets/images/logo.png";
import Search from "../assets/icons/search.png";
import Menu from "../assets/icons/menu.png";
import X from "../assets/icons/xred.png";

import "../styles.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import SearchScene from "./SearchScene";
import { BsArrowDown } from "react-icons/bs";

export default function Navbar() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [hiddenMenu, setHiddenMenu] = useState<boolean>(false);
  const [categoryHiddenMenu, setCategoryHiddenMenu] = useState<boolean>(false);
  const [hiddenYear, setHiddenYear] = useState<boolean>(false);
  const [hiddenGenre, setHiddenGenre] = useState<boolean>(false);
  const [hiddenCountry, setHiddenCountry] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [genresMobile, setGenresMobile] = useState<boolean>(false);
  const [yearMobile, setYearMobile] = useState<boolean>(false);
  const [countryMobile, setCountryMobile] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const categoryRef = useRef<HTMLDivElement | null>(null);
  const yearRef = useRef<HTMLDivElement | null>(null);
  const genreRef = useRef<HTMLDivElement | null>(null);
  const countryRef = useRef<HTMLDivElement | null>(null);

  const store = useSelector((store: RootState) => store.user);

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

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div
      className={`w-full flex justify-center ${isScrolled && "navbar-back"}`}
    >
      <div
        className={`flex items-center xl:w-[1300px] w-[90%] navbar-margin justify-between relative`}
      >
        <a href="/">
          <img src={Logo} alt="" className="w-[70px] h-[70px]" />
        </a>
        <ul className="flex items-center gap-5 bg-[#0F0F0F] navigation rounded max-lg:hidden">
          <Link
            className="cursor-pointer navigation-item rounded hover:bg-[#1A1A1A]"
            to={`/`}
          >
            Bosh sahifa
          </Link>
          <Link
            className="cursor-pointer navigation-item rounded hover:bg-[#1A1A1A]"
            to={`/shows`}
          >
            Kinolar
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
                  <div className="absolute animationPopup left-[calc(100%+10px)] z-10 bg-[#1A1A1A] navbar-padding">
                    <div className="flex flex-wrap gap-5 min-w-[300px]">
                      {[
                        2010, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
                        2020, 2021, 2022, 2023, 2024, 2025,
                      ].map((item, _) => (
                        <Link
                          key={_}
                          className="hover:underline"
                          to={`/search?year=${item}`}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {/* Country hidden menu */}
                {hiddenCountry && (
                  <div className="absolute animationPopup left-[calc(100%+10px)] z-10 bg-[#1A1A1A] navbar-padding">
                    <div className="flex flex-wrap gap-3 min-w-[300px]">
                      {[
                        "Aqsh",
                        "Arabiston",
                        "Hindiston",
                        "Xitoy",
                        "Yaponiya",
                        "Janubiy Koreya",
                        "Fransiya",
                        "Buyuk Britaniya",
                        "Germaniya",
                        "Italiya",
                        "Ispaniya",
                        "Kanada",
                        "Braziliya",
                        "Meksika",
                        "Avstraliya",
                        "Turkiya",
                        "Indoneziya",
                      ].map((item, _) => (
                        <Link
                          key={_}
                          className="hover:underline"
                          to={`/search?country=${item}`}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {/* Genre hidden menu */}
                {hiddenGenre && (
                  <div className="absolute animationPopup left-[calc(100%+10px)] z-10 bg-[#1A1A1A] navbar-padding">
                    <div className="flex flex-wrap gap-5 min-w-[300px]">
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
            {store?.user?._id ? "Hisobingiz" : "Ro'yhatdan o'tish"}
          </Link>
        </ul>

        {/* Search input */}
        <div className="flex items-center gap-7 max-lg:hidden">
          <form className="flex items-center gap-2" onSubmit={(e) => {
            e.preventDefault()
            window.location.replace(`/search?name=${searchInput}`)
          }}>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Searching...."
              className="search bg-transparent"
            />
            <img
              src={Search}
              onClick={() =>
                window.location.replace(`/search?name=${searchInput}`)
              }
              alt="search icon"
              className="w-[30px] h-[30px] object-contain cursor-pointer"
            />
          </form>
        </div>

        {/* menu (mobile) */}

        {isSearch && <SearchScene setIsSearch={setIsSearch} />}

        <div className="flex items-center sm:hidden gap-5">
          <img
            src={Search}
            onClick={() => setIsSearch(true)}
            alt="search icon"
            className="w-[30px] h-[30px] object-contain cursor-pointer"
          />
          <img
            src={Menu}
            alt=""
            onClick={() => setHiddenMenu(true)}
            className="navigation rounded w-[50px] h-[50px] cursor-pointer lg:hidden"
          />
        </div>

        {/* Hidden mobile menu */}
        {hiddenMenu && (
          <div className="navbar-hidden-menu overflow-y-auto animationPopup left-0 fixed top-0 z-10 min-h-screen max-sm:w-full max-lg:w-[calc(100vw-60vw)] bg-black/80 flex flex-col text-white items-center backdrop-blur-[5px]">
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
            <ul className="flex overflow-scrool items-center gap-10 sm-padding flex-col justify-between w-full">
              <Link
                className="cursor-pointer hover:underline  player bg-green-500 w-full text-center text-black font-bold"
                to={`/`}
              >
                Bosh sahifani
              </Link>
              <Link
                className="cursor-pointer hover:underline player bg-green-500 w-full text-center text-black font-bold "
                to={`/`}
              >
                Kinolar
              </Link>
              <div
                className="flex justify-center items-center player bg-green-500 w-full text-center text-black font-bold"
                onClick={() => setGenresMobile(!genresMobile)}
              >
                <span>Janrlar</span>
                <BsArrowDown />
              </div>
              {genresMobile && <span>Janrlar</span>}

              <div
                className="flex justify-center items-center player bg-green-500 w-full text-center text-black font-bold"
                onClick={() => setYearMobile(!yearMobile)}
              >
                <span>Yillar</span>
                <BsArrowDown />
              </div>
              {yearMobile && <span>Yillar</span>}
              <div
                className="flex justify-center items-center player bg-green-500 w-full text-center text-black font-bold"
                onClick={() => setCountryMobile(!countryMobile)}
              >
                <span>Malakatlar</span>
                <BsArrowDown />
              </div>
              {countryMobile && <span>Country</span>}

              <Link
                className="cursor-pointer hover:underline bg-green-500 w-full text-center text-black font-bold player"
                to={`/support`}
              >
                {store?.user?._id ? "Hisobingiz" : "Ro'yhatdan o'tish"}
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
