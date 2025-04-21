import Logo from "../assets/images/logo.png";
import Search from "../assets/icons/search.png";
import Menu from "../assets/icons/menu.png";
import "../styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <div className="flex items-center justify-between navbar-padding">
      <a href="/">
        <img
          src={Logo}
          alt="logo"
          className="w-[200px] max-lg:w-[150px] h-full object-contain cursor-pointer"
        />
      </a>
      <ul className="flex items-center gap-5 bg-[#0F0F0F] navigation rounded max-lg:hidden">
        <Link
          className="cursor-pointer navigation-item rounded hover:bg-[#1A1A1A]"
          to={`/`}
        >
          Home
        </Link>
        <Link
          className="cursor-pointer navigation-item rounded hover:bg-[#1A1A1A]"
          to={`/shows`}
        >
          Movies & Shows
        </Link>
        <Link
          className="cursor-pointer navigation-item rounded hover:bg-[#1A1A1A]"
          to={`/support`}
        >
          Support
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
            onClick={() => window.location.replace(`/search?name=${searchInput}`)}
            alt="search icon"
            className="w-[30px] h-[30px] object-contain cursor-pointer"
          />
        </div>
      </div>
      <img
        src={Menu}
        alt=""
        className="navigation rounded w-[50px] h-[50px] cursor-pointer lg:hidden"
      />
    </div>
  );
}
