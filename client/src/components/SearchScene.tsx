import React, { useState } from "react";
import Search from "../assets/icons/search.png";
import X from "../assets/icons/xred.png";

interface Props {
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ({ setIsSearch }: Props) {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <div className="flex h-screen w-screen left-0 top-0 justify-center items-center fixed bg-black/70">
      <img
        onClick={() => setIsSearch(false)}
        src={X}
        alt=""
        className="w-[30px] h-[30px] object-contain cursor-pointer absolute top-5 right-5"
      />
      <div className="flex items-center gap-2 w-[80$]">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Qidirish...."
          className="flex-1 search"
        />
        <img
          src={Search}
          onClick={() => window.location.replace(`/search?name=${searchInput}`)}
          alt="search icon"
          className="w-[30px] h-[30px] object-contain cursor-pointer"
        />
      </div>
    </div>
  );
}
