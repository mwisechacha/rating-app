const rateBody = document.querySelector(".rating-body");
const thankYouBody = document.querySelector(".thank-you-body");

const submit = document.getElementById("submit");
const rateAgain = document.getElementById("rate");

submit.addEventListener("click", () => {
  thankYouBody.classList.remove("hide");
  rateBody.style.display = "none";
});

rateAgain.addEventListener("click", () => {
  thankYouBody.classList.add("hide");
  rateBody.style.display = "initial";
});

const rateNumber = document.getElementById("rate-number");

const rateButtons = document.querySelectorAll(".select-button");
rateButtons.forEach((rate) => {
  rate.addEventListener("click", () => {
    rateNumber.innerHTML = rate.innerHTML;
  });
});
