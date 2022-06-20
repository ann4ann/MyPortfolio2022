// Диплом
import DIPLOM_1 from "../../assets/img/TaskTracker/taskTracker01.png";
import DIPLOM_2 from "../../assets/img/TaskTracker/taskTracker02.png";
import DIPLOM_3 from "../../assets/img/TaskTracker/taskTracker03.png";
import DIPLOM_4 from "../../assets/img/TaskTracker/taskTracker04.png";
import DIPLOM_5 from "../../assets/img/TaskTracker/taskTracker05.png";
// Хакатон 2
import HACK_2_1 from "../../assets/img/Hackathon2/Hackathon2_01.png";
import HACK_2_2 from "../../assets/img/Hackathon2/Hackathon2_02.png";
import HACK_2_3 from "../../assets/img/Hackathon2/Hackathon2_03.png";
// Хакатон 1
import HACK_1_1 from "../../assets/img/Hackathon1/Hackathon1_01.png";
import HACK_1_2 from "../../assets/img/Hackathon1/Hackathon1_02.png";
import HACK_1_3 from "../../assets/img/Hackathon1/Hackathon1_03.png";
// Клеркси
import CLERKSY_1 from "../../assets/img/Clerksy/Clerksy01.png";
import CLERKSY_2 from "../../assets/img/Clerksy/Clerksy02.png";
import CLERKSY_3 from "../../assets/img/Clerksy/Clerksy03.png";
import CLERKSY_4 from "../../assets/img/Clerksy/Clerksy04.png";

// Видео
import TT_video from "../../assets/video/TaskTracker.webm";

export const portfolioData = [
  {
    id: "01",
    title: "SPA списка дел на React (дипломная работа)",
    stack: [
      "React",
      "React Router",
      "Bootstrap5",
      "ESLint",
      "npm",
      "Адаптивная верстка",
      "SPA",
    ],
    content:
      "SPA органайзера задач на React, с возможностью регистрации, добавления задач, целей и контролем времени выполнения задачи.",
    imgName: "img-diplom",
    img: [DIPLOM_1, DIPLOM_2, DIPLOM_3, DIPLOM_4, DIPLOM_5],
    gitRepo: "https://github.com/ann4ann/Task-Tracker",
  },
  {
    id: "02",
    title: "SPA участников команды на React (хакатон)",
    stack: [
      "React",
      "React Router",
      "Работа в команде",
      "Teamlead",
      "Bootstrap5",
      "ESLint",
      "npm",
    ],
    content:
      "Проект команды для хакатона, посященному созданию SPA на React. Задачи: реализация страницы команды, созадние компонентов React, организация структуры проекта и настройка, deploy и публикация проекта на github pages, организация эффективной работы команды.",
    imgName: "img-hackathon2",
    img: [HACK_2_3, HACK_2_1, HACK_2_2],
    gitRepo: "https://github.com/ann4ann/Hackathon_Members-presentation",
  },
  {
    id: "03",
    title: "Создание кастомного контекст-меню (хакатон)",
    stack: ["JavaScript", "Native JS", "Работа в команде"],
    content:
      "Проект команды для хакатона, посященному использованию нативного JavaScript. Задачи: создание кастомного контекстного меню, решение простых задач с помощью JavaScript.",
    imgName: "img-hackathon1",
    img: [HACK_1_2, HACK_1_1, HACK_1_3],
    gitRepo: "https://github.com/semi4ka/01-hackathon",
  },
  {
    id: "04",
    title: "Верстка сайта магазина",
    stack: ["HTML5", "SCSS", "Gulp", "Верстка по макету", "Figma"],
    content:
      "Верска статичного сайта (landing page) по макету figma. Задачи проекта: освоение верстки наиболее часто используемых элементов в проекте (tabs, поля ввода, карточики, footer).",
    imgName: "img-clerksy",
    img: [CLERKSY_1, CLERKSY_2, CLERKSY_3, CLERKSY_4],
    gitRepo: "https://github.com/ann4ann/Clerksy_landing",
  },
];

export const portfolioProjData = {
  title: "сайт-портфолио",
  stack: [
    "HTML5",
    "SCSS",
    "Git",
    "Webpack",
    "Native JS",
    "Media Queries",
    "БЭМ именование",
    "npm",
  ],
  gitRepo: "https://github.com/ann4ann/MyPortfolio2022",
};

export const newTaskTrackerProjData = {
  title: "таск-трекер",
  stack: ["HTML5", "SCSS", "React", "Redux toolkit", "Mongo DB", "Express", "Axios"],
  gitRepo: "https://github.com/ann4ann/MyPortfolio2022",
  video: TT_video,
};
