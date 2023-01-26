const card = document.querySelector(".card__inner");
const card1 = document.querySelector(".card__inner1");
const card2 = document.querySelector(".card__inner2");
const card3 = document.querySelector(".card__inner3");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

card1.addEventListener("click", function (e) {
  card1.classList.toggle('is-flipped');
});

card2.addEventListener("click", function (e) {
  card2.classList.toggle('is-flipped');
});

card3.addEventListener("click", function (e) {
  card3.classList.toggle('is-flipped');
});