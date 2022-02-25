export function changeSlide(direction) {
  let activeSlideIndex = 0;

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

  slides.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`;
}
