import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import X from "../assets/icons/xred.png";

type Props = {
  url: string;
  setVideo: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ({ url, setVideo }: Props) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center z-10 items-center backdrop-blur-sm bg-black/50">
      <img
        onClick={() => setVideo(false)}
        src={X}
        alt=""
        className="w-[30px] h-[30px] object-contain cursor-pointer absolute top-5 right-5"
      />
      <div className="w-[80%] h-[80%] aspect-video">
        <Plyr
          source={{
            type: "video",
            sources: [{ src: url }],
          }}
          options={{
            controls: [
              "play",
              "progress",
              "current-time",
              "mute",
              "volume",
              "settings",
              "fullscreen",
              "download"
            ],
          }}
        />
      </div>
    </div>
  );
}
