import React from "react";
import logo from "../../img/logo.svg";
import socialIcons from "../../img/socialicons.svg";
import "./Footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const languages = [
    {
      code: "de",
      name: "German",
      countryCode: "de",
    },
    {
      code: "en",
      name: "English",
      countryCode: "gb",
    },
    {
      code: "ru",
      name: "Russian",
      countryCode: "ru",
    },
  ];

  return (
    <footer>
      <div className="footer-container">
        <div className="logo-сolumn">
          <a href="#">
            <img src={logo} alt="123" id="logo-footer" />
          </a>
          <ul>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.logo-сolumn.adress")}
              </a>
            </li>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.logo-сolumn.number")}
              </a>
            </li>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.logo-сolumn.email")}
              </a>
            </li>
          </ul>
          <img src={socialIcons} alt="123" id="social-footer" />
        </div>
        <div className="service-column">
          <h2>{t("footer.service-сolumn.service")}</h2>
          <ul>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.service-сolumn.order-management")}
              </a>
            </li>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.service-сolumn.social-assistant")}
              </a>
            </li>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.service-сolumn.crypto-platform")}
              </a>
            </li>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.service-сolumn.analyzer")}
              </a>
            </li>
          </ul>
        </div>
        <div className="company-column">
          <h2>{t("footer.company-сolumn.company")}</h2>
          <ul>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.company-сolumn.about-us")}
              </a>
            </li>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.company-сolumn.news")}
              </a>
            </li>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.company-сolumn.our-partner")}
              </a>
            </li>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.company-сolumn.faq")}
              </a>
            </li>
          </ul>
        </div>
        <div className="supports-column">
          <h2>{t("footer.supports-column.supports")}</h2>
          <ul>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.supports-column.help-center")}
              </a>
            </li>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.supports-column.feedback")}
              </a>
            </li>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.supports-column.contact-us")}
              </a>
            </li>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.supports-column.terms")}
              </a>
            </li>
          </ul>
        </div>
        <div className="resources-column">
          <h2>{t("footer.resources-column.resources")}</h2>
          <ul>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.resources-column.download-app")}
              </a>
            </li>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.resources-column.blog")}
              </a>
            </li>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.resources-column.whats-new")}
              </a>
            </li>
            <li>
              <a href="src/components/Footer/Footer#">
                {t("footer.resources-column.sitemap")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="rights-reserved-line">
        <p>{t("footer.reserved-line.reserved-text")}</p>

        <a href="src/components/Footer/Footer#">
          {t("footer.reserved-line.privacy")}
        </a>
        <a href="src/components/Footer/Footer#">
          {t("footer.reserved-line.security")}
        </a>
        <a href="src/components/Footer/Footer#">
          {t("footer.reserved-line.terms")}
        </a>
        <div className="language">
          {/*<>{t("footer.reserved-line.language")}</>*/}
          <select
            className="selectLanguage"
            defaultValue={i18n.resolvedLanguage}
            onChange={(e) => {
              i18n.changeLanguage(e.target.value);
            }}
          >
            {languages.map(({ code, name, countryCode }) => {
              return (
                <option
                  key={countryCode}
                  value={code}
                  className="optionLanguage"
                >
                  {name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
