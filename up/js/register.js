const slide = document.querySelector(".register__content--form__page");
const firstNextBtn = document.querySelector(".next-1");
// second
const secondNextBtn = document.querySelector(".next-2");
const firstPrevBtn = document.querySelector(".prev-1");
// third
const thirdNextBtn = document.querySelector(".next-3");
const secondPrevBtn = document.querySelector(".prev-2");
// forth
const submitBtn = document.querySelector(".submit");
const thirdPrevBtn = document.querySelector(".prev-3");
// progress step
const step = document.querySelectorAll(".register__progress--step");
// progress Number => span element
const stepNum = document.querySelectorAll(".register__progress--step span");
// progress check mark
const stepCheck = document.querySelectorAll(".fa-check");
let current = 0;
// the next check btn
const tick = function () {
  step[current].classList.add("active");
  stepNum[current].classList.add("active");
  stepCheck[current].classList.add("active");
  current += 1;
};
const unTick = function () {
  step[current - 1].classList.remove("active");
  stepNum[current - 1].classList.remove("active");
  stepCheck[current - 1].classList.remove("active");
  current -= 1;
};

firstNextBtn.addEventListener("click", () => {
  slide.style.marginLeft = "-33%";
  tick();
});

secondNextBtn.addEventListener("click", () => {
  slide.style.marginLeft = "-100%";
  tick();
});

thirdNextBtn.addEventListener("click", () => {
  slide.style.marginLeft = "-200%";
  tick();
});

submitBtn.addEventListener("click", () => {
  tick();
  setTimeout(() => {
    alert("your form has been successfully submitted");
    location.reload();
  }, 1000);
});

firstPrevBtn.addEventListener("click", () => {
  slide.style.marginLeft = "0";
  unTick();
});
secondPrevBtn.addEventListener("click", () => {
  slide.style.marginLeft = "-33%";
  unTick();
});
thirdPrevBtn.addEventListener("click", () => {
  slide.style.marginLeft = "-100%";
  unTick();
});
