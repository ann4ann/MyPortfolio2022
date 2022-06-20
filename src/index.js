import "normalize.css";
import "./styles/scss/index.scss";
import {
  newTaskTrackerProjData,
  portfolioData,
  portfolioProjData,
} from "./data/data";
import { addPortfolioCard } from "./components/addPortfolioCard";
import { createModal, deleteModal } from "./components/modalWindow";

// создание табов
let tab = function () {
  let tabNav = document.querySelectorAll(".tabs-nav__item");
  let tabContent = document.querySelectorAll(".tab");
  let tabName;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("is-active");
    });
    this.classList.add("is-active");
    tabName = this.dataset.tabName;
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });
  }
};
tab();

// Добавление карточек в портфолио
const cardWrapper = document.querySelector(".tab-2__cards");
portfolioData.forEach((item) => {
  addPortfolioCard(
    cardWrapper,
    item.id,
    item.title,
    item.stack,
    item.imgName,
    item.img
  );
});

// Пара слов про текущий проект Таск-трекер
const newTaskTracker = document.querySelector(".tab-2__newTaskTracker");
let newTaskTrackerStack = "";
newTaskTrackerProjData.stack.forEach(
  (item) =>
    (newTaskTrackerStack += `<span style="display: inline-block; border-radius: 5px; border: 1px solid gray; margin: 3px; padding: 3px">${item}</span>`)
);
// newTaskTracker.style.maxWidth = "80%";
newTaskTracker.style.margin = "0 auto";
newTaskTracker.style.paddingTop = "10px"
newTaskTracker.innerHTML = `<p>Сейчас у меня в работе ${newTaskTrackerProjData.title}.</p>
  <p>В данном проекте используются следующие технологии: </p><p>${newTaskTrackerStack}</p>`;
const videoContainer = document.createElement("video");
videoContainer.className = "video";
videoContainer.style.maxWidth = "100%";
videoContainer.controls = true;
const videoSource = document.createElement("source");
videoSource.src = newTaskTrackerProjData.video;
videoSource.type = "video/webm";
videoContainer.append(videoSource);
newTaskTracker.prepend(videoContainer);

// Пара слов про текущий проект резюме
const currentProj = document.querySelector(".tab-2__currentProj");
let currentProjStack = "";
portfolioProjData.stack.forEach(
  (item) =>
    (currentProjStack += `<span style="display: inline-block; border-radius: 5px; border: 1px solid gray; margin: 3px; padding: 3px">${item}</span>`)
);
currentProj.innerHTML = `<p>Также в качестве примера моих работ можно рассматривать и этот ${portfolioProjData.title}.</p>
  <p>В данном проекте были использованы следующие технологии: </p><p>${currentProjStack}</p>
  <p>Посмотреть проект этого сайта на github: <a style="display: inline-block; border-radius: 5px; background-color: #c0cbff; padding: 3px; text-decoration: none" 
  href=${portfolioProjData.gitRepo}>Перейти</a></a></p>`;

// Открытие карточки в портфолио
const portfolioTab = document.querySelector(".tab-2");
portfolioTab.addEventListener("click", (event) => {
  const { target } = event;
  const openCardBtn = target.closest(".button-main");
  if (openCardBtn) {
    const openCardId = target.closest(".card").dataset.cardId;
    createModal(openCardId, portfolioData);

    // кнопки для слайдера
    const slideBar = document.querySelector(".slidebar");
    const slides = slideBar.querySelector(".slidebar__slides");
    const upBtn = slideBar.querySelector(".up-button");
    const downBtn = slideBar.querySelector(".down-button");
    const slideCount = slideBar.querySelectorAll(".slidebar__img").length;
    let activeSlideIndex = 0;
    upBtn.addEventListener("click", () => {
      changeSlide("up");
    });
    downBtn.addEventListener("click", () => {
      changeSlide("down");
    });

    const slideImg = slideBar.querySelector(".slidebar__img");
    const slideHeight = slideImg.clientHeight;

    function changeSlide(direction) {
      if (direction === "down") {
        console.log("down");
        activeSlideIndex++;
        if (activeSlideIndex === slideCount) {
          activeSlideIndex = 0;
        }
        console.log(activeSlideIndex);
      } else if (direction === "up") {
        console.log("down");
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
          activeSlideIndex = slideCount - 1;
        }
        console.log(activeSlideIndex);
      }

      slides.style.transform = `translateY(-${
        activeSlideIndex * slideHeight
      }px)`;
    }

    // реализация закрытия модального окна
    const currentCardCloseButton = document.querySelector(
      ".modal-header__close"
    );
    const closeCardByBtn = currentCardCloseButton.addEventListener(
      "click",
      (event) => {
        deleteModal();
      }
    );
    const closeCardByOutsideClick = document.addEventListener(
      "click",
      (event) => {
        if (event.target === document.querySelector(".modal-overlay"))
          deleteModal();
      }
    );

    // удаляем event listeners
    currentCardCloseButton.removeEventListener("click", closeCardByBtn);
    document.removeEventListener("click", closeCardByOutsideClick);
  }
});
