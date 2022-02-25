export function createModal(id, data) {
  const currentCardData = data.find((item) => {
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
          <a href=${currentCardData.gitRepo} target="_blank">Открыть</a>
        </div>
      </div>`;
  container.append(modal);
}
// создать html картинок для модального окна
function createImgsHtml(imageArr) {
  let imagesHtml = "";
  imageArr.forEach((item) => {
    imagesHtml += `\n<div class="slidebar__img"><img src=${item}></img></div>`;
  });
  return imagesHtml;
}

export function deleteModal() {
  const currentCard = document.querySelector(".tab-2__modal");
  currentCard.innerHTML = "";
}
