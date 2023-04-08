import React from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const CV = require("../public/assets/RomanStetsCV.pdf");

const resume = () => {
  const { t } = useTranslation();

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
        <h2 className="text-center">{t("resume")}</h2>
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
              {t("home_page.app_text2")} <span className="px-1">|</span>{" "}
              {t("home_page.app_text3")} <span className="px-1">|</span>{" "}
              {t("home_page.app_text4")}
            </p>
          </div>
        </div>
        <p>
          {t("about_page.about_text1")}
          <br></br>
          {t("about_page.about_text2")}
          <br></br>
          {t("about_page.about_text3")}
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            {t("skills")}
          </h5>
          <p className="py-2">
            {/* {t("")} */}
            {t("resume_page.skills")}
            <span className="px-2">|</span>
            {t("resume_page.skills")}
            <span className="px-2">|</span>Trinity
            <span className="px-2">|</span>ABRSM
            <span className="px-2">|</span>
            {t("resume_page.skills1")}
            <span className="px-2">|</span>
            {t("resume_page.skills2")}
            <span className="px-2">|</span>
            {t("resume_page.skills3")}
            <span className="px-2">|</span>
            {t("resume_page.skills4")}
            <span className="px-2">|</span>
            {t("resume_page.skills5")}
            <span className="px-2">|</span>
            {t("resume_page.skills6")}
            <span className="px-2">|</span>
            {t("resume_page.skills7")}
            <span className="px-2">|</span>
            {t("resume_page.skills8")}
            <span className="px-2">|</span>Programming skills: JavaScript, React
          </p>
        </div>

        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            {t("resume_page.languages")}
          </h5>
          <p className="py-2">
            {t("resume_page.languages1")}
            <span className="px-2">|</span>
            {t("resume_page.languages2")}
            <span className="px-2">|</span>
            {t("resume_page.languages3")}
            <span className="px-2">|</span>
            {t("resume_page.languages4")}
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          {t("resume_page.experience")}
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">{t("resume_page.NAU")}</span>
            <span className="px-2">|</span>
            {t("resume_page.location1")}
          </p>
          <p className="py-1 italic">
            {t("resume_page.position1")} (2017 - 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>{t("resume_page.resp1")}</li>
            <li>{t("resume_page.resp2")}</li>
            <li>{t("resume_page.resp3")}</li>
            <li>{t("resume_page.resp4")}</li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              {t("resume_page.music_school")}
            </span>
            <span className="px-2">|</span>
            {t("resume_page.location1")}
          </p>
          <p className="py-1 italic">
            {t("home_page.app_text3")} (2017 - 2020)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>{t("resume_page.resp5")}</li>
            <li>{t("resume_page.resp6")}</li>
          </ul>
        </div>
        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              {t("resume_page.philharmonic")}
            </span>
            <span className="px-2">|</span>
            {t("resume_page.location3")}
          </p>
          <p className="py-1 italic">
            {t("home_page.app_text4")} (2015 - 2017)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>{t("resume_page.resp8")}</li>
            <li>{t("resume_page.resp9")}</li>
          </ul>
        </div>
        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              {t("resume_page.music_school2")}
            </span>
            <span className="px-2">|</span>
            {t("resume_page.location3")}
          </p>
          <p className="py-1 italic">
            {t("resume_page.position1")} (2014 - 2015)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>{t("resume_page.resp5")}</li>
            <li>{t("resume_page.resp10")}</li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          {t("resume_page.education")}
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">{t("resume_page.academy")}</span>
            <span className="px-2">|</span>
            {t("resume_page.location3")}
          </p>
          <p className="py-1 italic">{t("master")}</p>
          <div className="list-disc list-outside px-7 py-1 leading-relaxed">
            {t("resume_page.speciality")}
          </div>
          <a
            className="py-2 text-gray-600 underline cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href={CV}
            download
          >
            {t("download")}
          </a>
        </div>
      </div>
    </>
  );
};

export default resume;
