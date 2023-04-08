import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/photo2.JPG";
const CV = require("../public/assets/RomanStetsCV.pdf");

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 shadow-xl shadow-gray-400 rounded-xl p-4">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#429599]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Energetic musician with a diverse repertoire and strong
            sight-reading skills. I am constantly seeking new learning
            opportunities and enjoy performing as part of an ensemble to bring
            joy to others.
          </p>
          <p className="py-2 text-gray-600">
            Through my studies and work experience, I have developed the ability
            to connect with learners of all ages, particularly children, and
            create a positive and effective learning environment for piano
            playing. I have also gained experience using a programmatic
            pedagogical system with both children and adults.
          </p>
          <p className="py-2 text-gray-600">
            As a piano teacher, my ultimate goal is to help students develop
            their skills and achieve their musical goals. I can highlight my
            dedication to supporting and guiding students as they work towards
            their musical aspirations.
          </p>
          <a
            className="py-2 text-gray-600 underline cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href={CV}
            download
          >
            Download resume
          </a>
        </div>
        <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={AboutImg}
            className="rounded-xl hover:scale-105 ease-in duration-300"
            alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
