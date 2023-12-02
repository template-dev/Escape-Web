const accordionTitle = document.querySelectorAll(".accordion__title"),
      accordionDescription = document.querySelectorAll(".accordion__description");

function AccordionToggle() {
  for (let i = 0; i < accordionTitle.length; i++) {
    accordionTitle[i].addEventListener("click", () => {
      accordionTitle[i].classList.toggle("accordion__title--inactive");
      accordionDescription[i].classList.toggle("accordion__description--inactive");
      accordionTitle[i].classList.toggle("accordion__title--active");
      accordionDescription[i].classList.toggle("accordion__description--active");
    });
  }
}

AccordionToggle();
