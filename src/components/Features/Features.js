import React from "react";
import FeaturesHero1 from "../../img/virtualRealityManLeft.svg";
import FeaturesHero2 from "../../img/virtualRealityManRight.svg";
import "./Features.scss";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="remove-background">
      <div className="features">
        <div className="feature-heroes">
          <img src={FeaturesHero1} alt="#" />
        </div>
        <div className="feature-text">
          <div className="features-text__title">
            <h1>{t("features.block-one.title")}</h1>
          </div>
          <div className="features-text__subtitle">
            {t("features.block-one.content")}
          </div>
          <div className="features-buttons">
            <a href="src/components/Features/Features#">
              {t("features.read-more-button")}
            </a>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="feature-text">
          <div className="features-text__title">
            <h1>{t("features.block-two.title")}</h1>
          </div>
          <div className="features-text__subtitle">
            {t("features.block-two.content")}
          </div>
          <div className="features-buttons">
            <a href="src/components/Features/Features#">
              {t("features.read-more-button")}
            </a>
          </div>
        </div>
        <div className="feature-one-hero">
          <img src={FeaturesHero2} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Features;
