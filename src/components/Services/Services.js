import React from "react";
import "./Services.scss";
import OrderLogo from "../../img/checklistIcon.svg";
import AssistantLogo from "../../img/stonksIcon.svg";
import CryptoLogo from "../../img/cryptoIcon.svg";
import ModulesLogo from "../../img/modulesIcon.svg";
import AnalyzeLogo from "../../img/analyzeIcon.svg";
import PriceLogo from "../../img/findIcon.svg";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="service remove-background">
      <span className="service-text__title">{t("services.title")}</span>
      <span className="service-text__subtitle">{t("services.subtitle")}</span>
      <div className="service-box">
        <div className="OrderManagementBox">
          <img src={OrderLogo} alt="" />
          <h3>{t("services.box-one.title")}</h3>
          <p>{t("services.box-one.content")}</p>
          <br />
          <a href="src/components/Services/Services#" id="OrderManagementBox">
            {t("services.learn-button")}
          </a>
        </div>
        <div className="SocialAssistantBox">
          <img src={AssistantLogo} alt="" />
          <h3>{t("services.box-two.title")}</h3>
          <p>{t("services.box-two.content")}</p>
          <br />
          <a href="src/components/Services/Services#" id="SocialAssistantBox">
            {t("services.learn-button")}
          </a>
        </div>
        <div className="CryptoPlatformBox">
          <img src={CryptoLogo} alt="" />
          <h3>{t("services.box-three.title")}</h3>
          <p>{t("services.box-three.content")}</p>
          <br />
          <a href="src/components/Services/Services#" id="CryptoPlatformBox">
            {t("services.learn-button")}
          </a>
        </div>
        <div className="SmartTradingModulesBox">
          <img src={ModulesLogo} alt="" />
          <h3>{t("services.box-four.title")}</h3>
          <p>{t("services.box-four.content")}</p>
          <br />
          <a href="src/components/Services/Services#" id="CryptoPlatformBox">
            {t("services.learn-button")}
          </a>
        </div>
        <div className="AnalyzeroftheNewsBox">
          <img src={AnalyzeLogo} alt="" />
          <h3>{t("services.box-five.title")}</h3>
          <p>{t("services.box-five.content")}</p>
          <br />
          <a href="src/components/Services/Services#" id="CryptoPlatformBox">
            {t("services.learn-button")}
          </a>
        </div>
        <div className="ModuleofPriceNotificationBox">
          <img src={PriceLogo} alt="" />
          <h3>{t("services.box-six.title")}</h3>
          <p>{t("services.box-six.content")}</p>
          <br />
          <a href="src/components/Services/Services#" id="CryptoPlatformBox">
            {t("services.learn-button")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
