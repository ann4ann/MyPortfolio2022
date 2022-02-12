import "normalize.css";
import "./styles/scss/index.scss";
import BG from "../assets/img/bg.jpg";
import PHOTO from "../assets/img/photo.jpg";
import HACK_1 from "../assets/img/Hackathon1.png";
import HACK_2 from "../assets/img/Hackathon2.png";

const portfolioData = [
  {
    id: "01",
    title: "Диплом",
    description: "Делала ывдало двлыао чсмор ывало рд ывп оалдлыар",
    content:
      "Описание описание явчлмо двыа рдлыорывар дывлоа бялрвабяы ябыоал рылярбаляырабыоряао рыапожыва опждо авыждл ожыла ожывдл оажфыдл оажлдвофыжадл оыжвдлао ывжлдоа ыжло жыло ажывдло жфыдоа ждыо барялоыр абяыовлраб явбочрвадябылаоьчьорабыловяатьбиоябывботб",
    imgName: "img-diplom",
    img: HACK_1,
  },
  {
    id: "02",
    title: "Хакатон 2",
    description: "Делала ывдало двлыао чсмор ывало рд ывп оалдлыар",
    content:
      "Описание описание явчлмо двыа рдлыорывар дывлоа бялрвабяы ябыоал рылярбаляырабыоряао рыапожыва опждо авыждл ожыла ожывдл оажфыдл оажлдвофыжадл оыжвдлао ывжлдоа ыжло жыло ажывдло жфыдоа ждыо барялоыр абяыовлраб явбочрвадябылаоьчьорабыловяатьбиоябывботб",
    imgName: "img-hackathon2",
    img: HACK_2,
  },
  {
    id: "03",
    title: "Хакатон 2",
    description: "Делала ывдало двлыао чсмор ывало рд ывп оалдлыар",
    content:
      "Описание описание явчлмо двыа рдлыорывар дывлоа бялрвабяы ябыоал рылярбаляырабыоряао рыапожыва опждо авыждл ожыла ожывдл оажфыдл оажлдвофыжадл оыжвдлао ывжлдоа ыжло жыло ажывдло жфыдоа ждыо барялоыр абяыовлраб явбочрвадябылаоьчьорабыловяатьбиоябывботб",
    imgName: "img-hackathon1",
    img: BG,
  },
  {
    id: "04",
    title: "Верстка сайта магазина",
    description: "Делала ывдало двлыао чсмор ывало рд ывп оалдлыар",
    content:
      "Описание описание явчлмо двыа рдлыорывар дывлоа бялрвабяы ябыоал рылярбаляырабыоряао рыапожыва опждо авыждл ожыла ожывдл оажфыдл оажлдвофыжадл оыжвдлао ывжлдоа ыжло жыло ажывдло жфыдоа ждыо барялоыр абяыовлраб явбочрвадябылаоьчьорабыловяатьбиоябывботб",
    imgName: "img-clerksy",
    img: PHOTO,
  },
];

function addPortfolioCard(container, id, title, description, imgName, img) {
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
  image.src = img;
  imageContainer.append(image);

  const cardContent = document.createElement("div");
  cardContent.className = "card__content";

  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  const cardTitle = document.createElement("div");
  cardTitle.className = "subtitle";
  cardTitle.innerText = title;
  const cardDescription = document.createElement("div");
  cardDescription.className = "text";
  cardDescription.innerText = description;
  wrapper.append(cardTitle);
  wrapper.append(cardDescription);

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

function _createModal(id) {
  const currentCardData = portfolioData.find((item) => {
    return item.id === id;
  });
  const container = document.querySelector(".tab-2__modal");
  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.innerHTML = `<div class="modal-window">
      <div class="modal-window__header modal-header">
        <span class="modal-header__title">${currentCardData.title}</span>
        <span class="modal-header__close">&times;</span>
      </div>
      <div class="modal-window__body modal-body">
        <div class="modal-body__img"><img src=${currentCardData.img}></img></div>
        <div class="modal-body__text">${currentCardData.content}</div>
      </div>
      <div class="modal-window__footer">foot</div>
    </div>`;
  container.append(modal);
}
function _deleteModal() {
  const currentCard = document.querySelector(".tab-2__modal");
  currentCard.innerHTML = "";
}

tab();

// Добавление карточек в портфолио
const cardWrapper = document.querySelector(".tab-2__cards");
portfolioData.forEach((item) => {
  addPortfolioCard(
    cardWrapper,
    item.id,
    item.title,
    item.description,
    item.imgName,
    item.img
  );
});

// Открытие карточки в портфолио
const portfolioTab = document.querySelector(".tab-2");
portfolioTab.addEventListener("click", (event) => {
  const { target } = event;
  const openCardBtn = target.closest(".button-main");
  if (openCardBtn) {
    const openCardId = target.closest(".card").dataset.cardId;
    _createModal(openCardId);
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
        if(event.target === document.querySelector(".modal-overlay"))
        _deleteModal();
      }
    );
    currentCardCloseButton.removeEventListener("click", closeCardByBtn);
    document.removeEventListener("click", closeCardByOutsideClick);
  }
});

