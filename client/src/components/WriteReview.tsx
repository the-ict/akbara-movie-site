import React, { useState } from "react";
import X from "../assets/icons/xred.png";
import GapStar from "../assets/icons/gapstar.png";
import Star from "../assets/icons/star.png";

import { getRatingValue } from "../functions/rating";
import axios from "axios";

import { useSelector } from "react-redux";

type Props = {
  setReviewForm: React.Dispatch<React.SetStateAction<boolean>>;
  movie_id: string
};

interface IReview {
  country: "Uzbekistan";
  message: string;
  name: string
}

export default function ({ setReviewForm,movie_id }: Props) {
  const [starred, setStarred] = useState<number>(0);

  const store = useSelector((store) => store);

  const [form, setForm] = useState<IReview>({
    country: "Uzbekistan",
    message: "",
    name: "",
  });

  function handleRatingStar(ratingNumber: number) {
    setStarred(ratingNumber);
  }

  function handleChangeForm(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function addReview() {
    if (form.message.trim() === "") return;

    if (starred === 0) return;

    if (!store?.user?.user?._id) {
      alert("Izoh yozishdan oldin ro'yhatdan o'ting");
      return;
    }

    setForm((prev) => ({
      ...prev,
      name: store?.user?.user?.name,
    }));

    try {

      console.log({
        ...form,
        rating: starred
      }, "this is from review")

      const result = await axios.put(`http://localhost:5000/api/movie/review/${movie_id}`, {
        ...form,
        rating: starred,
      });

      console.log(result)

      if(result.data){
        window.location.reload()
      }
    } catch (error) {
      alert("There is something wrong!");
    }
  }

  return (
    <div className="w-full h-screen fixed top-0 left-0 flex justify-center items-center z-10 backdrop-blur-sm bg-black/50">
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
          name="message"
          onChange={handleChangeForm}
          className="border-[1px] border-white outline-none ask-input rounded"
        />
        <label>Reyting</label>
        <div className="flex items-center gap-[1rem]">
          {starred === 0
            ? [1, 2, 3, 4, 5].map((item) => (
                <img
                  onClick={() => handleRatingStar(item)}
                  src={GapStar}
                  key={item}
                  alt=""
                  className="w-[30px] h-[30px] object-contain cursor-pointer"
                />
              ))
            : getRatingValue(starred).map((item,_) => (
                <img
                  src={Star}
                  key={_}
                  alt=""
                  className="w-[30px] h-[30px] object-contain cursor-pointer"
                />
              ))}
        </div>
        <button
          className="cursor-pointer bg-[#e90000] ask-input font-bold"
          onClick={addReview}
        >
          Yuborish!
        </button>
      </div>
    </div>
  );
}
