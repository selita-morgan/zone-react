import React from "react";
import logo from "../../img/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AboutPage } from "../../pages/AboutPage/AboutPage";
import "./Header.scss";
import EnterAccountPopup from "../Modals/EnterAccountPopup";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [open, setOpen] = useState(false);

  const [contactColor, setContactColor] = useState(false);

  const { t, i18n } = useTranslation();

  const changeColor = () => {
    setContactColor(true);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">{t("nav-menu.nav1")}</Link>
            </li>
            <li>
              <Link to="/about">{t("nav-menu.nav2")}</Link>
            </li>
            <li>
              <Link to="/starwars">{t("nav-menu.nav3")}</Link>
            </li>
            <li>
              <Link to="/pricing">{t("nav-menu.nav4")}</Link>
            </li>

            <li>
              <Link to="/blog">{t("nav-menu.nav5")}</Link>
            </li>
            <li>
              <a
                href="#"
                id="ContactUs"
                onMouseOver={changeColor}
                onMouseLeave={() => setContactColor(false)}
                className={`contact-button ${
                  contactColor
                    ? "contact-button-active"
                    : "contact-button-inactive"
                }`}
                onClick={() => setOpen(true)}
              >
                {t("nav-menu.nav6")}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <EnterAccountPopup clicked={open} setClicked={setOpen} />
    </header>
  );
};

export default Header;
