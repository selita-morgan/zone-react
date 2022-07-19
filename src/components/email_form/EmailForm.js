import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./EmailFrom.scss";
import { useTranslation } from "react-i18next";

const EmailForm = () => {
  const { t, i18n } = useTranslation();

  const sendEmail = (event) => {
    const btn = document.getElementById("button");
    event.preventDefault();
    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_jxezz6x";
    emailjs.init("Bm_-HGTBS0uWFZAA9");

    emailjs
      .sendForm(serviceID, templateID, document.getElementById("form"))
      .then(
        () => {
          btn.value = "Send Email";
          alert("Sent!");
        },
        (err) => {
          btn.value = "Send Email";
          alert(JSON.stringify(err));
        }
      );
  };

  return (
    <div className="subscribtion-form remove-background">
      <div className="subscribtion-form-box">
        <span className="subscribtion-form-text__title">
          {t("email-form.title")}
        </span>
        <br />
        <span className="subscribtion-form-text__subtitle">
          {t("email-form.subtitle")}
        </span>
        <br />
        <form className="email-form" id="form" onSubmit={sendEmail}>
          <input
            type="text"
            for="reply_to"
            name="reply_to"
            id="reply_to"
            autocomplete="email"
            placeholder={t("email-form.email-area")}
          />
          <input
            type="submit"
            id="button"
            value={t("email-form.email-submit")}
          />
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
