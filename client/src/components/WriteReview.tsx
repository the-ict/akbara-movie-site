import React from "react";
import X from "../assets/icons/xred.png";
import GapStar from "../assets/icons/gapstar.png";

type Props = {
  setReviewForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ({ setReviewForm }: Props) {
  return (
    <div className="w-full h-screen fixed top-0 left-0 flex justify-center items-center z-10">
      <div className="flex flex-col gap-[10px] bg-[#0F0F0F] ask rounded w-[400px] relative">
        <img
          src={X}
          alt="x red png"
          className="w-[30px] h-[30px] object-contain cursor-pointer absolute top-2 right-2"
          onClick={() => setReviewForm(false)}
        />
        <label>Izoh</label>
        <input
          type="text"
          className="border-[1px] border-white outline-none ask-input rounded"
        />
        <label>Davlat</label>
        <input
          type="text"
          className="border-[1px] border-white outline-none ask-input rounded"
        />
        <label>Reyting</label>
        <div className="flex items-center gap-[1rem]">
          {
            [1,2,3,4,5].map(item => (
              <img src={GapStar} key={item} alt="" className="w-[30px] h-[30px] object-contain cursor-pointer" />
            ))
          }
          
        </div>
        <button className="cursor-pointer bg-[#e90000] ask-input font-bold">
          Yuborish!
        </button>
      </div>
    </div>
  );
}
