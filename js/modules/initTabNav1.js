export default function initTabNav() {
  const tabmenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabmenu.length && tabContent) {
    tabContent[0].classList.add("ativo");

    function activetab(index) {
      tabContent.forEach((item) => {
        item.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
    }

    tabmenu.forEach((item, index) => {
      item.addEventListener("click", function () {
        activetab(index);
      });
    });
  }
}
