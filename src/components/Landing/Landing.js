import React from "react";
import hero from "../../img/hero1.svg";
import "./Landing.scss";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className="landing-content remove-background">
      <div className="landing-text">
        <div className="landing__title">
          <h1>{t("landing.title")}</h1>
        </div>
        <div className="landing__subtitle">
          <p className="default-text">{t("landing.subtitle")}</p>
        </div>
        <div className="lanidng__buttons">
          <a href="src/components/Landing/Landing#" id="JoinUs">
            {t("landing.join-button")}
          </a>
          <a href="src/components/Landing/Landing#" id="WatchVideo">
            {t("landing.watch-button")}
          </a>
        </div>
      </div>
      <div className="hero">
        <img id="hero" src={hero} alt="" />
      </div>
    </div>
  );
};

export default Landing;
