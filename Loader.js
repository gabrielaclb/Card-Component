const card = document.querySelector(".card");
const card__toggle = document.querySelector(".toggle");

card__toggle.onclick = () => {
    card.classList.toggle("active");
}