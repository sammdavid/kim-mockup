const slider = document.getElementById("partnerSlider");
const scrollStep = 400; // distance each arrow moves

const leftBtn = document.getElementById("slideLeft");
const rightBtn = document.getElementById("slideRight");

rightBtn.addEventListener("click", () => {
  // if we reach the end, go back to start
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
    slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
    slider.scrollBy({ left: scrollStep, behavior: "smooth" });
    }
});

leftBtn.addEventListener("click", () => {
  // if we reach the beginning, go to the end
    if (slider.scrollLeft <= 0) {
    slider.scrollTo({ left: slider.scrollWidth, behavior: "smooth" });
    } else {
    slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
    }
});
