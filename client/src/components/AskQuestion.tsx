import React, { useEffect, useState } from "react";
import X from "../assets/icons/xred.png";
import axios from "axios";

type Props = {
  setAskQuestion: React.Dispatch<React.SetStateAction<boolean>>;
};

interface IMailFrom {
  email: string;
  message: string;
}

export default function ({ setAskQuestion }: Props) {
  const [form, setForm] = useState<IMailFrom>({
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSendMail = async () => {
    try {
      const result = await axios.post("http://localhost:5000/api/mail", form);
      console.log(result.data);
      alert("Xabaringiz yuborildi.");
      setAskQuestion(false);
    } catch (error) {
      alert("We have an error sorry.");
    }
  };

  return (
    <div className="w-full h-screen fixed top-0 left-0 flex justify-center items-center z-10 backdrop-blur-sm bg-black/50">
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
          name="email"
          onChange={handleChange}
          className="border-[1px] border-white outline-none ask-input rounded"
        />
        <label>Savolingiz</label>
        <input
          type="text"
          name="message"
          onChange={handleChange}
          className="border-[1px] border-white outline-none ask-input rounded"
        />
        <button
          onClick={handleSendMail}
          className="cursor-pointer bg-[#e90000] ask-input font-bold"
        >
          Yuborish!
        </button>
      </div>
    </div>
  );
}
