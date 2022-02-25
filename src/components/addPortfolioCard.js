import { getRandomColor } from "../utils/getRandomColor";

const spanColors = [
  "#C6D4BE",
  "#a6a1cc",
  "#B2C9A5",
  "#E5D1BD",
  "#AAB5B8",
  "#bebad1",
  "#b5cacf",
  "#b6b3c9",
];

export function addPortfolioCard(container, id, title, stack, imgName, img) {
  const card = document.createElement("div");
  card.classList.add("card", "tab-cards__item");
  card.dataset.cardId = id;

  const helper = document.createElement("span");
  helper.className = "card__helper";
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("card__img", imgName);

  const image = document.createElement("img");
  image.style.maxWidth = "100%";
  image.style.maxHeight = "100%";
  image.src = img[0];
  imageContainer.append(image);

  const cardContent = document.createElement("div");
  cardContent.className = "card__content";

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper", "content");
  // wrapper.className = "wrapper";

  const cardTitle = document.createElement("div");
  cardTitle.className = "content__subtitle";
  cardTitle.innerText = title;
  const cardStack = document.createElement("div");
  cardStack.className = "content__text";
  let stackHtml = "";
  stack.forEach(
    (item) =>
      (stackHtml += `<span style="background-color:${getRandomColor(
        spanColors
      )}">${item}</span>`)
  );
  cardStack.innerHTML = stackHtml;
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
