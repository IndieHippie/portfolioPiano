import React from "react";

const VideoModal = ({ showModal, handleClose, videoSrc }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-4xl w-full">
        <button
          className="absolute top-0 right-0 m-4 p-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"
          onClick={handleClose}
        >
          Close
        </button>
        <video
          className="w-full h-full"
          autoPlay
          controls
          onEnded={handleClose}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoModal;
