const modalButton = document.querySelector(".close__menu-button");
const modalWindow = document.querySelector(".menu__list");

function headerModal() {
  modalButton.addEventListener("click", () => {
    modalWindow.classList.toggle("modal-close");
    modalWindow.classList.toggle("modal-open");
    modalButton.classList.toggle("menu-button__close");
    modalButton.classList.toggle("menu-button__open");
  });
}
headerModal();

const accordionTitle = document.querySelectorAll(".accordion__title"),
      accordionDescription = document.querySelectorAll(".accordion__description");

function accordionToggle() {
  for (let i = 0; i < accordionTitle.length; i++) {
    accordionTitle[i].addEventListener("click", () => {
      accordionTitle[i].classList.toggle("accordion__title--inactive");
      accordionDescription[i].classList.toggle("accordion__description--inactive");
      accordionTitle[i].classList.toggle("accordion__title--active");
      accordionDescription[i].classList.toggle("accordion__description--active");
    });
  }
}
accordionToggle();

const filterListButton = document.querySelector(".cards-list__button");
const filterCardsButton = document.querySelector(".cards__button");
const postsItemsArr = document.querySelectorAll(".post-page__item");

function filterCardsRenderer() {
  if (filterListButton && filterCardsButton) {
    filterListButton.addEventListener("click", () => {
      filterCardsButton.classList.remove("cards__button--active");
      filterCardsButton.classList.add("cards__button--inactive");
      filterListButton.classList.toggle("cards-list__button--inactive");
      filterListButton.classList.toggle("cards-list__button--active");

      for(let item of postsItemsArr) {
        item.classList.add("post__item--list");
        item.classList.remove("post__item--cards");
      }
    });

    filterCardsButton.addEventListener("click", () => {
      filterListButton.classList.remove("cards-list__button--active");
      filterListButton.classList.add("cards-list__button--inactive");
      filterCardsButton.classList.toggle("cards__button--inactive");
      filterCardsButton.classList.toggle("cards__button--active");

      for(let item of postsItemsArr) {
        item.classList.remove("post__item--list");
        item.classList.add("post__item--cards");
      }
    });
  }
}
filterCardsRenderer();
