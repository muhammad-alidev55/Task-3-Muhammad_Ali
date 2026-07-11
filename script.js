const toggleBtn = document.querySelector(".js-theme-toggle");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("is-dark-mode");
});

let count = 0;

const counter = document.querySelector(".js-counter-value");

document.querySelector(".js-increment").addEventListener("click", function () {
  count++;
  counter.textContent = count;
});

document.querySelector(".js-decrement").addEventListener("click", function () {
  count--;
  counter.textContent = count;
});

document.querySelector(".js-reset").addEventListener("click", function () {
  count = 0;
  counter.textContent = count;
});

const textArea = document.querySelector(".js-text-input");
const charCount = document.querySelector(".js-char-count");

textArea.addEventListener("input", function () {
  charCount.textContent = textArea.value.length;
});

const faqBtn = document.querySelector(".js-faq-toggle");
const answer = document.querySelector(".js-faq-answer");
const icon = document.querySelector(".js-faq-icon");

faqBtn.addEventListener("click", function () {
  answer.classList.toggle("is-open");

  if (answer.classList.contains("is-open")) {
    icon.textContent = "-";
  } else {
    icon.textContent = "+";
  }
});
