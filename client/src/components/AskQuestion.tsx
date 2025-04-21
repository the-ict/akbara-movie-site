import React from "react";
import X from "../assets/icons/xred.png";

type Props = {
  setAskQuestion: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ({ setAskQuestion }: Props) {
  return (
    <div className="w-full h-screen fixed top-0 left-0 flex justify-center items-center z-10">
      <div className="flex flex-col gap-[10px] bg-[#0F0F0F] ask rounded w-[400px] relative">
        <img
          src={X}
          alt="x red png"
          className="w-[30px] h-[30px] object-contain cursor-pointer absolute top-2 right-2"
          onClick={() => setAskQuestion(false)}
        />
        <label>Emailingiz</label>
        <input
          type="text"
          className="border-[1px] border-white outline-none ask-input rounded"
        />
        <label>Savolingiz</label>
        <input
          type="text"
          className="border-[1px] border-white outline-none ask-input rounded"
        />
        <button className="cursor-pointer bg-[#e90000] ask-input font-bold">
          Yuborish!
        </button>
      </div>
    </div>
  );
}
