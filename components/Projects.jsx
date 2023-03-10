import React from "react";

import Image from "next/image";
import propertyImg from "../public/assets/projects/photo.JPG";
import academy from "../public/assets/projects/academy.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#429599]">
          Demo
        </p>
        <h2 className="py-4">What I&#39;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#429599] to-[#a3cacc]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={propertyImg}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Puccini – &#39;Che gelida manina&#39;
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Tenore - Yu Yang, Concertmaster - Roman Stets
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/watch?v=k1Mk2m-5X7k"
              >
                <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  Play Video
                </p>
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#429599] to-[#a3cacc]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={academy}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Bach Beethoven Saint-Saëns
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                State Exam
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/watch?v=feZi-lkHfz8"
              >
                <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  Play Video
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
