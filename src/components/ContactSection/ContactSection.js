import React from "react";
import { useTranslation } from "react-i18next";
import "./ContactSection.scss";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-section">
      <h2 className="contact-section__title">{t("contactSection.title")}</h2>
      <p className="contact-section__subtitle">
        {t("contactSection.subtitle1")}{" "}
        <span className="highlight">{t("contactSection.subtitle2")}</span>{" "}
        {t("contactSection.subtitle3")}
      </p>
      <div className="contact-section__icons">
        <a
          href="https://github.com/TsiNik2508"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-section__icon"
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#FFFFFF" />
            <path
              fill="#8E2DE2"
              d="M12 .5a11.5 11.5 0 0 0-3.637 22.428c.575.106.786-.25.786-.556v-2.073c-3.2.696-3.872-1.375-3.872-1.375-.524-1.354-1.278-1.715-1.278-1.715-1.045-.714.08-.7.08-.7 1.155.08 1.764 1.197 1.764 1.197 1.028 1.756 2.696 1.249 3.353.954.104-.744.4-1.25.726-1.537-2.552-.292-5.237-1.276-5.237-5.678 0-1.254.448-2.279 1.186-3.08-.12-.29-.516-1.465.114-3.053 0 0 .971-.31 3.18 1.174a11.096 11.096 0 0 1 5.8 0c2.21-1.483 3.18-1.174 3.18-1.174.63 1.588.235 2.763.116 3.053.739.801 1.186 1.826 1.186 3.08 0 4.413-2.691 5.382-5.257 5.668.411.354.772 1.054.772 2.123v3.144c0 .31.209.669.792.554A11.5 11.5 0 0 0 12 .5z"
            />
          </svg>
        </a>

        <a
          href="https://web.telegram.org/k/#@Tsi_Nick"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-section__icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <circle cx="25" cy="25" r="25" fill="#FFFFFF" />
            <path
              fill="#8E2DE2"
              d="M 44.38 5.99 C 43.89 6.01 43.42 6.14 42.99 6.31 C 42.57 6.48 40.13 7.52 36.53 9.06 C 32.93 10.6 28.26 12.6 23.62 14.59 C 14.35 18.56 5.24 22.47 5.24 22.47 L 5.30 22.44 C 5.30 22.44 4.75 22.63 4.20 23.02 C 3.92 23.21 3.62 23.46 3.37 23.83 C 3.13 24.19 2.95 24.71 3.02 25.26 C 3.25 27.18 5.25 27.73 5.25 27.73 L 5.26 27.73 L 14.16 30.78 C 14.39 31.54 16.86 39.79 17.40 41.54 C 17.70 42.51 17.98 43.06 18.28 43.45 C 18.42 43.63 18.58 43.78 18.75 43.89 C 18.82 43.93 18.89 43.96 18.96 43.99 C 18.96 43.99 18.97 44.00 18.98 44.00 L 18.96 43.99 C 18.98 44.00 19.00 44.01 19.01 44.02 C 19.04 44.03 19.06 44.03 19.10 44.04 C 20.12 44.39 20.97 43.73 20.97 43.73 L 21.00 43.71 L 26.47 38.63 L 35.35 45.55 L 35.46 45.61 C 37.01 46.3 38.42 45.91 39.19 45.28 C 39.97 44.64 40.28 43.83 40.28 43.83 L 40.31 43.74 L 46.83 9.75 C 46.99 8.99 47.02 8.33 46.87 7.74 C 46.71 7.15 46.33 6.63 45.85 6.34 C 45.37 6.06 44.86 5.96 44.38 5.99 z M 33.61 18.79 L 21.24 33.35 L 21.24 33.35 C 21.18 33.42 21.13 33.51 21.13 33.51 C 21.13 33.51 21.00 33.9 21.00 33.9 L 19.39 41.15 C 19.36 41.07 19.34 41.04 19.31 40.95 L 19.31 40.95 C 18.80 39.30 16.47 31.52 16.14 30.44 L 33.61 18.79 z M 22.64 35.73 L 24.86 37.4 L 21.60 40.43 L 22.64 35.73 z"
            />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/nikita-tsilosani-5367782b4/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-section__icon"
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#FFFFFF" />
            <path
              fill="#8E2DE2"
              d="M21.001 21h-4.602v-6.306c0-1.504-.536-2.533-1.874-2.533-1.02 0-1.631.686-1.898 1.351-.097.238-.121.569-.121.9V21H8.001s.061-10 0-11.048h4.602v1.564l-.03.049h.03v-.049c.612-.941 1.573-2.284 3.83-2.284 2.777 0 4.867 1.81 4.867 5.692V21zM4.996 3.5a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-2.5-2.5zm2.508 17.5h-5.02v-11h5.02v11z"
            />
          </svg>
        </a>

        <a
          href="mailto:nikitaandr2508@gmail.com"
          className="contact-section__icon"
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#FFFFFF" />
            <path
              fill="#8E2DE2"
              d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 2L12 10.6 4.4 6h15.2zm0 12H4V8l8 5 8-5v10z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
