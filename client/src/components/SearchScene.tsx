import React, { useState } from "react";
import Search from "../assets/icons/search.png";

export default function () {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="flex items-center gap-2 w-full">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Searching...."
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
