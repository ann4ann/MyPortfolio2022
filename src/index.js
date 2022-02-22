import "normalize.css";
import "./styles/scss/index.scss";

// Диплом
import DIPLOM_1 from "../assets/img/TaskTracker/taskTracker01.png";
import DIPLOM_2 from "../assets/img/TaskTracker/taskTracker02.png";
import DIPLOM_3 from "../assets/img/TaskTracker/taskTracker03.png";
import DIPLOM_4 from "../assets/img/TaskTracker/taskTracker04.png";
import DIPLOM_5 from "../assets/img/TaskTracker/taskTracker05.png";
// Хакатон 2
import HACK_2_1 from "../assets/img/Hackathon2/Hackathon2_01.png";
import HACK_2_2 from "../assets/img/Hackathon2/Hackathon2_02.png";
import HACK_2_3 from "../assets/img/Hackathon2/Hackathon2_03.png";
// Хакатон 1
import HACK_1_1 from "../assets/img/Hackathon1/Hackathon1_01.png";
import HACK_1_2 from "../assets/img/Hackathon1/Hackathon1_02.png";
import HACK_1_3 from "../assets/img/Hackathon1/Hackathon1_03.png";
// Клеркси
import CLERKSY_1 from "../assets/img/Clerksy/Clerksy01.png";
import CLERKSY_2 from "../assets/img/Clerksy/Clerksy02.png";
import CLERKSY_3 from "../assets/img/Clerksy/Clerksy03.png";
import CLERKSY_4 from "../assets/img/Clerksy/Clerksy04.png";

const portfolioData = [
  {
    id: "01",
    title: "Диплом",
    stack: "Делала ывдало двлыао чсмор ывало рд ывп оалдлыар",
    content:
      "Описание описание явчлмо двыа рдлыорывар дывлоа бялрвабяы ябыоал рылярбаляырабыоряао рыапожыва опждо авыждл ожыла ожывдл оажфыдл оажлдвофыжадл оыжвдлао ывжлдоа ыжло жыло ажывдло жфыдоа ждыо барялоыр абяыовлраб явбочрвадябылаоь чьорабыловяать биоябывботб",
    imgName: "img-diplom",
    // заменить картинки
    img: [DIPLOM_1, DIPLOM_2, DIPLOM_3, DIPLOM_4, DIPLOM_5],
    gitRepo: "https://github.com/ann4ann/Task-Tracker",
  },
  {
    id: "02",
    title: "Хакатон 2",
    stack: "Делала ывдало двлыао чсмор ывало рд ывп оалдлыар",
    content:
      "Описание описание явчлмо двыа рдлыорывар дывлоа бялрвабяы ябыоал рылярбаляырабыоряао рыапожыва опждо авыждл ожыла ожывдл оажфыдл оажлдвофыжадл оыжвдлао ывжлдоа ыжло жыло ажывдло жфыдоа ждыо барялоыр абяыовлраб явбочрвадябылаоь чьорабыловяать биоябывботб",
    imgName: "img-hackathon2",
    img: [HACK_2_3, HACK_2_1, HACK_2_2],
    gitRepo: "https://github.com/ann4ann/Hackathon_Members-presentation",
  },
  {
    id: "03",
    title: "Хакатон 1",
    stack: "Делала ывдало двлыао чсмор ывало рд ывп оалдлыар",
    content:
      "Описание описание явчлмо двыа рдлыорывар дывлоа бялрвабяы ябыоал рылярбаляырабыоряао рыапожыва опждо авыждл ожыла ожывдл оажфыдл оажлдвофыжадл оыжвдлао ывжлдоа ыжло жыло ажывдло жфыдоа ждыо барялоыр абяыовлраб явбочрвадябылаоь чьорабыловяать биоябывботб",
    imgName: "img-hackathon1",
    img: [HACK_1_2, HACK_1_1, HACK_1_3],
    gitRepo: "https://github.com/semi4ka/01-hackathon",
  },
  {
    id: "04",
    title: "Верстка сайта магазина",
    stack: "Делала ывдало двлыао чсмор ывало рд ывп оалдлыар",
    content:
      "Описание описание явчлмо двыа рдлыорывар дывлоа бялрвабяы ябыоал рылярбаляырабыоряао рыапожыва опждо авыждл ожыла ожывдл оажфыдл оажлдвофыжадл оыжвдлао ывжлдоа ыжло жыло ажывдло жфыдоа ждыо барялоыр абяыовлраб явбочрвадябылаоь чьорабыловяать биоябывботб",
    imgName: "img-clerksy",
    img: [CLERKSY_1, CLERKSY_2, CLERKSY_3, CLERKSY_4],
    gitRepo: "https://github.com/ann4ann/Clerksy_landing",
  },
];

function addPortfolioCard(container, id, title, stack, imgName, img) {
  const card = document.createElement("div");
  card.classList.add("card", "tab-cards__item");
  card.dataset.cardId = id;

  const helper = document.createElement("span");
  helper.className = "card__helper";
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("card-img", imgName);

  const image = document.createElement("img");
  image.style.maxWidth = "100%";
  image.style.maxHeight = "100%";
  image.src = img[0];
  imageContainer.append(image);

  const cardContent = document.createElement("div");
  cardContent.className = "card__content";

  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  const cardTitle = document.createElement("div");
  cardTitle.className = "subtitle";
  cardTitle.innerText = title;
  const cardStack = document.createElement("div");
  cardStack.className = "text";
  cardStack.innerText = stack;
  wrapper.append(cardTitle);
  wrapper.append(cardStack);

  const btn = document.createElement("button");
  btn.className = "button-main";
  btn.innerText = ">";
  cardContent.append(wrapper);
  cardContent.append(btn);

  card.append(helper);
  card.append(imageContainer);
  card.append(cardContent);

  container.append(card);
}

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

// создать модальное окно
function _createModal(id) {
  const currentCardData = portfolioData.find((item) => {
    return item.id === id;
  });
  // console.log(currentCardData);
  const container = document.querySelector(".tab-2__modal");
  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  // <img class="slide__img" src=${currentCardData.img[0]}></img>
  modal.innerHTML = `<div class="modal-window">
      <div class="modal-window__header modal-header">
        <span class="modal-header__title">${currentCardData.title}</span>
        <span class="modal-header__close">&times;</span>
      </div>
      <div class="modal-window__body modal-body">
        <div class="modal-body__slidebar slidebar">
          <div class="slidebar__slides">
            ${createImgsHtml(currentCardData.img)}
          </div>
          <div class="slidebar__btns">
            <button class="up-button">︽</button>
            <button class="down-button">︾</button>
          </div>
        </div>
        <div class="modal-body__text">${currentCardData.content}</div>
      </div>
      <div class="modal-window__footer modal-footer">Посмотреть проект на github: 
        <a href=${currentCardData.gitRepo} target="_blank">Перейти</a>
      </div>
    </div>`;
  container.append(modal);
}
// создать html картинок для модального окна
function createImgsHtml(imageArr) {
  let imagesHtml = `<img class="slidebar__img active" src=${imageArr[0]}></img>`;
  imageArr.forEach((item, index) => {
    if (index) {
      imagesHtml += `\n<img class="slidebar__img" src=${item}></img>`;
    }
  });
  return imagesHtml;
}

// удалить модальное окно
function _deleteModal() {
  const currentCard = document.querySelector(".tab-2__modal");
  currentCard.innerHTML = "";
}

// создание табов
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

// Открытие карточки в портфолио
const portfolioTab = document.querySelector(".tab-2");
portfolioTab.addEventListener("click", (event) => {
  const { target } = event;
  // console.log(target);
  const openCardBtn = target.closest(".button-main");
  if (openCardBtn) {
    const openCardId = target.closest(".card").dataset.cardId;
    _createModal(openCardId);
    
    // кнопки для слайдера
    const slideBar = document.querySelector(".slidebar");
    const slides = slideBar.querySelector(".slidebar__slides");
    const upBtn = slideBar.querySelector(".up-button");
    const downBtn = slideBar.querySelector(".down-button");
    const slideCount = slideBar.querySelectorAll(".slidebar__img").length;
    console.log("слайдов", slideCount);
    let activeSlideIndex = 0;
    upBtn.addEventListener("click", () => {
      changeSlide("up");
    });
    downBtn.addEventListener("click", () => {
      changeSlide("down");
    });

    function changeSlide(direction) {
      const currentImage = slideBar.querySelector(".slidebar__img.active");
      console.log(currentImage);
      const currentImageHeight = currentImage.clientHeight;
      console.log(currentImageHeight);
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

      // пересмотреть трансформацию, +active!!!!!!!!!!!!!!!!!
      slides.style.transform = `translateY(${
        activeSlideIndex * (currentImageHeight + 30)
      }px)`;
      // slideBar.style.transform = `translateY(-${
      //   activeSlideIndex * 500
      // }px)`;
    }

    // реализация закрытия модального окна
    const currentCardCloseButton = document.querySelector(
      ".modal-header__close"
    );
    const closeCardByBtn = currentCardCloseButton.addEventListener(
      "click",
      (event) => {
        _deleteModal();
      }
    );
    const closeCardByOutsideClick = document.addEventListener(
      "click",
      (event) => {
        if (event.target === document.querySelector(".modal-overlay"))
          _deleteModal();
      }
    );

    // удаляем event listeners
    currentCardCloseButton.removeEventListener("click", closeCardByBtn);
    document.removeEventListener("click", closeCardByOutsideClick);
  }
});
