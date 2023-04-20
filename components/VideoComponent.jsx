import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const VideoPlayer = ({ src, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const handleCloseClick = () => {
    setIsPlaying(false);
    onClose();
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center video-container ">
      <div className="overlay absolute top-0 left-0 w-full h-full bg-gray-800 opacity-90 rounded-xl"></div>
      <video
        className="w-full h-auto relative z-10"
        controls
        autoPlay
        onEnded={handleCloseClick}
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        className="absolute top-1 right-1 text-white cursor-pointer"
        onClick={handleCloseClick}
      >
        <AiOutlineCloseCircle size={22} />
      </button>
    </div>
  );
};

export default VideoPlayer;
