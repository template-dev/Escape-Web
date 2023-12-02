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
