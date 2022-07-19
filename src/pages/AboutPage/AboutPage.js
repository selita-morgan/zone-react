import React from "react";
import "./AboutPage.scss";
import socialicons from "../../img/socialicons.svg";
import person1 from "../../img/teamPerson1.svg";
import person2 from "../../img/teamPerson2.svg";
import person3 from "../../img/teamPerson3.svg";
import person4 from "../../img/teamPerson4.svg";
import aboutUsHero from "../../img/aboutUsHero.svg";
import hero from "../../img/hero1.svg";
import { useTranslation } from "react-i18next";
// import Services from "../../components/Services/Services";

const AboutPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="about-page">
        <p className="about-page-text__title">{t("about-page.title")}</p>
        <p className="about-page-text__subtitle">{t("about-page.subtitle")}</p>
        <div className="about-page-button">
          <a href="#readMore">{t("about-page.read-more-button")}</a>
        </div>
        {/*<div className="hero">*/}
        {/*  <img id="hero" src={hands} alt="" />*/}
        {/*</div>*/}
      </div>
      <div className="about-page__our-team">
        <p id="readMore" className="about-page__our-team-text__title">
          {t("about-page.boxes-title")}
        </p>
        <p className="about-page__our-team-text__subtitle">
          {t("about-page.boxes-subtitle")}
        </p>
        <div className="about-page__our-team-box">
          <div className="about-person-block">
            <div className="person">
              <img src={person1} alt="#" />
              <h3>{t("about-page.box-one.name")}</h3>
              <p>{t("about-page.box-one.role")}</p>
              <br />
              <a href="#">
                <img id="person" src={socialicons} alt="#" />
              </a>
            </div>
            <p className="about-person-block__info">
              {t("about-page.box-one.content")}
              <div className="about-page-button">
                <a href="#">{t("about-page.read-more-button")}</a>
              </div>
            </p>
          </div>
          <div className="about-person-block">
            <p className="about-person-block__info">
              {t("about-page.box-two.content")}
              <div className="about-page-button">
                <a href="#">{t("about-page.read-more-button")}</a>
              </div>
            </p>
            <div className="person">
              <img src={person2} alt="#" />
              <h3>{t("about-page.box-two.name")}</h3>
              <p>{t("about-page.box-two.role")}</p>
              <br />
              <a href="#">
                <img id="person" src={socialicons} alt="#" />
              </a>
            </div>
          </div>
          <div className="about-person-block">
            <div className="person">
              <img src={person3} alt="#" />
              <h3>{t("about-page.box-three.name")}</h3>
              <p>{t("about-page.box-three.role")}</p>
              <br />
              <a href="#">
                <img id="person" src={socialicons} alt="#" />
              </a>
            </div>
            <p className="about-person-block__info">
              {t("about-page.box-three.content")}
              <div className="about-page-button">
                <a href="#">{t("about-page.read-more-button")}</a>
              </div>
            </p>
          </div>
          <div className="about-person-block">
            <p className="about-person-block__info">
              {t("about-page.box-four.content")}
              <div className="about-page-button">
                <a href="#">{t("about-page.read-more-button")}</a>
              </div>
            </p>
            <div className="person">
              <img src={person4} alt="#" />
              <h3>{t("about-page.box-four.name")}</h3>
              <p>{t("about-page.box-four.role")}</p>
              <br />
              <a href="#">
                <img id="person" src={socialicons} alt="#" />
              </a>
            </div>
          </div>
          <div className="about-bootom-block">
            <div className="about-hero">
              <img src={aboutUsHero} alt="#" />
            </div>
            <div className="about-bootom-block-text">
              <div className="about-bootom-block-text__title">
                <h1>{t("about-page.bottom-title")}</h1>
              </div>
              <div className="about-bootom-block-text__subtitle">
                <p>{t("about-page.bottom-content")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
