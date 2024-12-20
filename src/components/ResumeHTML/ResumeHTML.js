import React from "react";
import { useTranslation } from "react-i18next";
import "./ResumeHTML.scss";

const ResumeHTML = () => {
  const { t } = useTranslation();

  return (
    <div className="resume-html">
      <header className="resume-html__header">
        <h1 className="resume-html__name">{t("resume.name")}</h1>
        <h3 className="resume-html__location">{t("resume.location")}</h3>
      </header>

      <div className="resume-html__contacts">
        <div className="resume-html__contact-item">
          <svg className="resume-html__icon" viewBox="0 0 24 24">
            <path d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z" />
          </svg>
          <span>{t("resume.contacts.phone")}</span>
        </div>
        <div className="resume-html__contact-item">
          <svg className="resume-html__icon" viewBox="0 0 24 24">
            <path d="M12 13.5L4.5 8.25V17C4.5 17.4142 4.83579 17.75 5.25 17.75H18.75C19.1642 17.75 19.5 17.4142 19.5 17V8.25L12 13.5ZM4.5 6.75L12 12L19.5 6.75V6C19.5 5.58579 19.1642 5.25 18.75 5.25H5.25C4.83579 5.25 4.5 5.58579 4.5 6V6.75Z" />
          </svg>
          <a
            href={`mailto:${t("resume.contacts.email")}`}
            className="resume-html__link"
          >
            {t("resume.contacts.email")}
          </a>
        </div>
        <div className="resume-html__contact-item">
          <svg className="resume-html__icon" viewBox="0 0 24 24">
            <path d="M12 1.5C6.75329 1.5 2.5 5.75329 2.5 11C2.5 15.5429 5.42908 19.3175 9.54014 20.3286C10.0401 20.4232 10.2204 20.1388 10.2204 19.8847V18.2485C7.14295 18.8368 6.60714 16.8393 6.60714 16.8393C6.12946 15.6339 5.46964 15.3054 5.46964 15.3054C4.53661 14.7196 5.54107 14.7321 5.54107 14.7321C6.59429 14.8054 7.10625 15.8188 7.10625 15.8188C8.01107 17.4482 9.63304 16.9393 10.1973 16.6875C10.2955 16.0384 10.5259 15.5411 10.7902 15.3067C8.13973 15.0455 5.5 14.0732 5.5 10.5C5.5 9.41429 5.92679 8.57143 6.55357 7.96429C6.44643 7.73929 6.08929 6.57143 6.75 5C6.75 5 7.71786 4.68571 9.07143 5.83214C10.0152 5.55893 11.0504 5.5 12.0857 5.5C13.1214 5.5 14.1571 5.55893 15.1 5.83214C16.4526 4.68571 17.42 5 17.42 5C18.0804 6.57143 17.7232 7.73929 17.6161 7.96429C18.2429 8.57143 18.67 9.41429 18.67 10.5C18.67 14.0846 15.9864 15.0438 13.312 15.2946C13.6603 15.5977 14.1652 16.167 14.1652 17.0175V19.8757C14.1652 20.1295 14.3417 20.4247 14.8417 20.3286C18.9643 19.3175 22 15.5429 22 11C22 5.75329 17.7533 1.5 12 1.5Z" />
          </svg>
          <a
            href="https://github.com/TsiNik2508"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-html__link"
          >
            {t("resume.contacts.github")}
          </a>
        </div>
        <div className="resume-html__contact-item">
          <svg className="resume-html__icon" viewBox="0 0 24 24">
            <path d="M4.75 3.5C4.19772 3.5 3.75 3.94772 3.75 4.5V19.5C3.75 20.0523 4.19772 20.5 4.75 20.5H19.25C19.8023 20.5 20.25 20.0523 20.25 19.5V4.5C20.25 3.94772 19.8023 3.5 19.25 3.5H4.75ZM7.75 7C8.44036 7 9 7.55964 9 8.25C9 8.94036 8.44036 9.5 7.75 9.5C7.05964 9.5 6.5 8.94036 6.5 8.25C6.5 7.55964 7.05964 7 7.75 7ZM9 18.25H6.5V11.25H9V18.25ZM13 18.25H10.5V11.25H13V12.5937C13.4814 11.8184 14.3147 11.25 15.25 11.25C17.0152 11.25 18 12.4222 18 14.0937V18.25H15.5V14.25C15.5 13.5519 15.2255 13.25 14.75 13.25C14.2745 13.25 13.975 13.5519 13.975 14.25V18.25Z" />
          </svg>
          <a
            href="https://www.linkedin.com/in/nikita-tsilosani-5367782b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-html__link"
          >
            {t("resume.contacts.linkedin")}
          </a>
        </div>
        <div className="resume-html__contact-item">
          <svg className="resume-html__icon" viewBox="0 0 24 24">
            <path d="M20.0554 3.91212L3.52753 10.6843C2.73933 11.0083 2.74411 11.5508 3.42663 11.7588L7.53588 13.0002L16.7738 6.7988C17.1926 6.54325 17.5555 6.69371 17.2538 6.98731L9.97939 13.6397H9.9785L9.97939 13.6397L9.70222 18.1402C10.0958 18.1402 10.2823 17.9459 10.5042 17.7389L12.7006 15.7153L16.4388 18.3496C17.0246 18.6931 17.4848 18.4975 17.6329 17.824L20.8569 5.12034C21.0787 4.26519 20.509 3.85647 20.0554 3.91212Z" />
          </svg>
          <a
            href="https://web.telegram.org/k/#@Tsi_Nick"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-html__link"
          >
            {t("resume.contacts.telegram")}
          </a>
        </div>
      </div>

      <section className="resume-html__section">
        <h2 className="resume-html__section-title">
          {t("resume.sections.experience")}
        </h2>
        <div className="resume-html__job">
          <div className="resume-html__job-header">
            <h3 className="resume-html__company">
              {t("resume.jobs.diar.company")}
            </h3>
            <div className="resume-html__right-info">
              <span className="resume-html__date">
                {t("resume.jobs.diar.date")}
              </span>
            </div>
          </div>
          <span className="resume-html__position">
            {t("resume.jobs.diar.position")}
          </span>
          <p>
            {t("resume.jobs.diar.description")}{" "}
            <a
              href="https://medical112.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              medical112.ru
            </a>{" "}
            {t("resume.and")}{" "}
            <a
              href="https://diar-engineering.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              diar-engineering.ru
            </a>
          </p>
          <ul>
            {(t("resume.jobs.diar.tasks", { returnObjects: true }) || []).map(
              (task, index) => (
                <li key={index}>{task}</li>
              )
            )}
          </ul>
        </div>

        <div className="resume-html__job">
          <div className="resume-html__job-header">
            <h3 className="resume-html__company">
              {t("resume.sections.freelance")}
            </h3>
            <div className="resume-html__right-info">
              <span className="resume-html__date">
                {t("resume.jobs.freelance.date")}
              </span>
            </div>
          </div>
          <span className="resume-html__position">
            {t("resume.jobs.freelance.position")}
          </span>
          {(t("resume.jobs.freelance.jobs", { returnObjects: true }) || []).map(
            (job, index) => (
              <div key={index} className="resume-html__freelance-job">
                <h4 className="resume-html__job-title">{job.title}</h4>
                <p>{job.description}</p>
              </div>
            )
          )}
        </div>
      </section>

      <section className="resume-html__section">
        <h2 className="resume-html__section-title">
          {t("resume.sections.projects")}
        </h2>
        {["palc", "moviesExplorer", "todo", "chatApp"].map((projectKey) => {
          const project = t(`resume.projects.${projectKey}`, {
            returnObjects: true,
          });
          return (
            <div key={projectKey} className="resume-html__job">
              <div className="resume-html__job-header">
                <h3 className="resume-html__job-title">{project.title}</h3>
                <span className="resume-html__tech">{project.tech}</span>
              </div>
              <p>{project.description}</p>
            </div>
          );
        })}
      </section>

      <section className="resume-html__section">
        <h2 className="resume-html__section-title">
          {t("resume.sections.skills")}
        </h2>
        <p className="resume-html__text">{t("resume.skills")}</p>
      </section>

      <section className="resume-html__section">
        <h2 className="resume-html__section-title">
          {t("resume.sections.education")}
        </h2>
        <div className="resume-html__job">
          <h3 className="resume-html__job-title">
            {t("resume.education.yandex.institution")}
          </h3>
          <p>{t("resume.education.yandex.specialty")}</p>
        </div>
      </section>
    </div>
  );
};

export default ResumeHTML;