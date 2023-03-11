import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const CV = require("../public/assets/RomanStetsCV.pdf");


const resume = () => {
  return (
    <>
      <Head>
        <title>Roman | Resume</title>
        <meta
          name="description"
          content="I’m Professional Piano Player, Piano Teacher, Concertmaster."
        />
        <link rel="icon" href="/assets/RS.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#a3cacc] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Roman Stets</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/roman-stets-ab48bb254/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/IndieHippie"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Professional piano player <span className="px-1">|</span> Piano
              Teacher <span className="px-1">|</span> Concertmaster
            </p>
          </div>
        </div>
        <p>
          Energetic musician with a diverse repertoire and strong sight-reading
          skills. I am constantly seeking new learning opportunities and enjoy
          performing as part of an ensemble to bring joy to others. <br></br>
          Through my studies and work experience, I have developed the ability
          to connect with learners of all ages, particularly children, and
          create a positive and effective learning environment for piano
          playing. I have also gained experience using a programmatic
          pedagogical system with both children and adults.<br></br>
          As a piano teacher, my ultimate goal is to help students develop their
          skills and achieve their musical goals. I can highlight my dedication
          to supporting and guiding students as they work towards their musical
          aspirations.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Skills</span>
            <span className="px-2">|</span>Professional piano playing skills
            <span className="px-2">|</span>Music theory knowledge
            <span className="px-2">|</span>Trinity
            <span className="px-2">|</span>ABRSM
            <span className="px-2">|</span>Strong sight-reading skills
            <span className="px-2">|</span>Individual approach to motivating
            students with different types of character
            <span className="px-2">|</span>Group teaching knowledge with
            different ages
            <span className="px-2">|</span>Good communication
            <span className="px-2">|</span>Creativity
            <span className="px-2">|</span>Attention to detail
            <span className="px-2">|</span>Teamwork
            <span className="px-2">|</span>Programming skills: JavaScript, React
          </p>
          <p className="py-2">
            <span className="font-bold">LANGUAGES</span>
            <span className="px-2">|</span>Ukrainian(native speaker)
            <span className="px-2">|</span>English (fluently)
            <span className="px-2">|</span>Chinese (HSK 3)
            <span className="px-2">|</span>Russian (fluently)
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Northeast Agricultural University
            </span>
            <span className="px-2">|</span>China, Harbin
          </p>
          <p className="py-1 italic">
            Piano Teacher & Concertmaster (2017 - 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Teaching piano and concertmaster classes.</li>
            <li>Preparing students for competions, perfomences, exams.</li>
            <li>Took an active part in the cultural life of the university.</li>
            <li>Solo performing.</li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Music school «⻰⾠悦⾳»</span>
            <span className="px-2">|</span>China, Harbin
          </p>
          <p className="py-1 italic">Piano teacher (2017 - 2020)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Teaching piano classes.</li>
            <li>
              Preparing students for competions, perfomences, exams “ABRSM”,
              “Trinity”.
            </li>
          </ul>
        </div>
        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Odesa Philharmonic Society</span>
            <span className="px-2">|</span>Ukraine, Odesa
          </p>
          <p className="py-1 italic">Concertmaster (2015 - 2017)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Perfomences with the best soloists of the Philarmonic.</li>
            <li>
              Numerous tours of the country, participation in competitions and
              festivals.
            </li>
          </ul>
        </div>
        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Musical school №3</span>
            <span className="px-2">|</span>Ukraine, Odesa
          </p>
          <p className="py-1 italic">
            Piano teacher & Concertmaster (2014 - 2015)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Teaching piano clesses.</li>
            <li>Concertmaster of the children&#39;s school choir.</li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">Education</h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">
              Odesa National A. V. Nezhdanova Academy of Music
            </span>
            <span className="px-2">|</span>Ukraine, Odesa
          </p>
          <p className="py-1 italic">Master (2010 – 2016)</p>
          <div className="list-disc list-outside px-7 py-1 leading-relaxed">
            In 2016 completed the full course of Odessa National A. V.
            Nezhdanova Academy of Music obtained master’s degree field of study
            musical Art obtained qualification of artist-soloistinstrumentalist
            (concert performer), chamber ensemble artist, accompanist, teacher
            of HEI of the III-d-IVth accreditation levels (piano).
          </div>
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
      </div>
    </>
  );
};

export default resume;
