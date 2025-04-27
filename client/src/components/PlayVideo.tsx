import React, { useState } from "react";
import Plyr from "plyr-react";
import X from "../assets/icons/xred.png";
import 'plyr-react/plyr.css';

type Props = {
  url: string;
  setVideo: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ({ url, setVideo }: Props) {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center z-10 items-center backdrop-blur-sm bg-black/50">
      <img
        onClick={() => setVideo(false)}
        src={X}
        alt=""
        className="w-[30px] h-[30px] object-contain cursor-pointer absolute top-5 right-5"
      />
      {loading && (
        <div className="absolute flex justify-center items-center w-full h-full z-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
        </div>
      )}
      <div className="w-[60%] h-[60%] player animate-border-glow aspect-video border-2 border-red-500">
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
            ],
          }}
          onCanPlay={() => {
            console.log("it can play at all");
            setLoading(false);
          }}
        />
      </div>
    </div>
  );
}
