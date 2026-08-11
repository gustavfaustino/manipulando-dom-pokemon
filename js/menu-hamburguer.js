const btnMenu = document.getElementById("btn-menu");
const navPrincipal = document.getElementById("navegacao-primaria");
const icone = btnMenu.querySelector("i");

btnMenu.addEventListener("click", abrirMenu);

function abrirMenu() {
  navPrincipal.classList.toggle("nav-ativa");
  const menuAberto = navPrincipal.classList.contains("nav-ativa");
  btnMenu.setAttribute("aria-expanded", menuAberto);

  if (menuAberto) {
    icone.classList.remove("bi-list");
    icone.classList.add("bi-x");
  } else {
    icone.classList.remove("bi-x");
    icone.classList.add("bi-list");
  }
}