export default function initAccordion() {
  const accordionLista = document.querySelectorAll(
    "[data-menu='accordion'] dt"
  );
  accordionLista[0].classList.add("ativo");
  accordionLista[0].nextElementSibling.classList.add("ativo");

  function activeAccordion() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  accordionLista.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}
