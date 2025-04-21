import React from "react";
import ReactPlayer from "react-player";
import X from "../assets/icons/xred.png";

type Props = {
  url: string;
  setVideo: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ({ url, setVideo }: Props) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center z-10 items-center">
      <img
        onClick={() => setVideo(false)}
        src={X}
        alt=""
        className="w-[30px] h-[30px] object-contain cursor-pointer absolute top-5 right-5"
      />
      <ReactPlayer url={url} controls height="80%" width="80%" />
    </div>
  );
}
