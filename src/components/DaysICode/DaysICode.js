import React from "react";
import { useTranslation } from "react-i18next";
import GitHubCalendar from "react-github-calendar";
import "./DaysICode.scss";

const DaysICode = () => {
  const { t } = useTranslation();

  return (
    <div className="days-i-code">
      <h2 className="days-i-code__title">
        {t("days_i_code.title")}{" "}
        <span className="highlight">{t("days_i_code.code")}</span>
      </h2>
      <div className="days-i-code__calendar">
      <a href="https://git.io/streak-stats"><img src="https://github-readme-streak-stats.herokuapp.com?user=TsiNik2508&theme=dark&hide_border=true" alt="GitHub Streak" /></a>
      </div>
    </div>
  );
};

export default DaysICode;
