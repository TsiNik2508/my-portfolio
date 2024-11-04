import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__left">
        {t("footer.createdBy")} {t("footer.name")}
      </div>
      <div className="footer__center">Copyright © 2024</div>
      <div className="footer__right">
        <a
          href="https://github.com/TsiNik2508"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__icon"
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.334-1.757-1.334-1.757-1.091-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.304 3.495.998.108-.775.418-1.304.762-1.604-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.123-.303-.536-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.488 11.488 0 013.003-.404c1.018.005 2.043.137 3.003.404 2.291-1.552 3.3-1.23 3.3-1.23.655 1.653.243 2.873.12 3.176.768.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.479 5.92.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
        <a
          href="https://web.telegram.org/k/#@Tsi_Nick"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__icon"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0C5.372 0 0 5.372 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12c0-6.628-5.372-12-12-12zm4.643 8.604l-1.74 8.198c-.13.571-.466.709-.943.44l-2.603-1.92-1.254 1.208c-.138.138-.255.255-.52.255l.184-2.613 4.756-4.297c.207-.207-.046-.322-.322-.115l-5.871 3.688-2.525-.789c-.549-.173-.56-.549.115-.805l9.891-3.814c.443-.173.83.103.678.8z"
              fill="#8E2DE2"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/nikita-tsilosani-5367782b4/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__icon"
        >
          <svg viewBox="0 0 24 24">
            <path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zM8.339 18.733H5.726V9.18h2.613v9.553zM7.032 8.036C6.191 8.036 5.5 7.347 5.5 6.506s.691-1.53 1.532-1.53c.84 0 1.53.691 1.53 1.53S7.872 8.036 7.032 8.036zm11.733 10.697h-2.613v-4.702c0-1.126-.022-2.578-1.572-2.578-1.573 0-1.814 1.23-1.814 2.501v4.78H10.153V9.18h2.509v1.307h.035c.349-.661 1.198-1.36 2.467-1.36 2.639 0 3.124 1.737 3.124 4v5.605z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
