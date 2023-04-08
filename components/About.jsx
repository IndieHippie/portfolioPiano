import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import AboutImg from "../public/assets/photo2.JPG";
const CV = require("../public/assets/RomanStetsCV.pdf");

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 shadow-xl shadow-gray-400 rounded-xl p-4">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#429599]">
            {t("about_page.about")}
          </p>
          <h2 className="py-4">{t("about_page.about_title")}</h2>
          <p className="py-2 text-gray-600">{t("about_page.about_text1")}</p>
          <p className="py-2 text-gray-600">{t("about_page.about_text2")}</p>
          <p className="py-2 text-gray-600">{t("about_page.about_text3")}</p>
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
        <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={AboutImg}
            className="rounded-xl hover:scale-105 ease-in duration-300"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
