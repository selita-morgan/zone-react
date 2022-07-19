import React from "react";
import "./OurTeam.scss";
import person1 from "../../img/teamPerson1.svg";
import person2 from "../../img/teamPerson2.svg";
import person3 from "../../img/teamPerson3.svg";
import person4 from "../../img/teamPerson4.svg";
import socialicons from "../../img/socialicons.svg";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="our-team remove-background">
      <span className="our-team-text__title">{t("our-team.title")}</span>
      <span className="our-team-text__subtitle">{t("our-team.subtitle")}</span>
      <div className="our-team-box">
        <div className="person">
          <img src={person1} alt="#" />
          <h3>{t("our-team.box-one.title")}</h3>
          <p>{t("our-team.box-one.content")}</p>
          <br />
          <a href="src/components/OurTeam/OurTeam#">
            <img id="person" src={socialicons} alt="#" />
          </a>
        </div>
        <div className="person">
          <img src={person2} alt="#" />
          <h3>{t("our-team.box-two.title")}</h3>
          <p>{t("our-team.box-two.content")}</p>
          <br />
          <a href="src/components/OurTeam/OurTeam#">
            <img id="person" src={socialicons} alt="#" />
          </a>
        </div>
        <div className="person">
          <img src={person3} alt="#" />
          <h3>{t("our-team.box-three.title")}</h3>
          <p>{t("our-team.box-three.content")}</p>
          <br />
          <a href="src/components/OurTeam/OurTeam#">
            <img id="person" src={socialicons} alt="#" />
          </a>
        </div>
        <div className="person">
          <img src={person4} alt="#" />
          <h3>{t("our-team.box-four.title")}</h3>
          <p>{t("our-team.box-four.content")}</p>
          <br />
          <a href="src/components/OurTeam/OurTeam#">
            <img id="person" src={socialicons} alt="#" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
