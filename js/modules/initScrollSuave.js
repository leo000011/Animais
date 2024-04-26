export default function initScrollSuave() {
  const linkInterno = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );
  function activeLink(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /**  window.scrollTo({
    top: topo,
    behavior: "smooth",
  }); */
  }

  linkInterno.forEach((item) => {
    item.addEventListener("click", activeLink);
  });
}
initScrollSuave();
