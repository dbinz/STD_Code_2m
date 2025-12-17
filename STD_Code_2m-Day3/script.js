const nav = document.querySelector(".main-left-menu-item-btn a");
const menu = document.querySelector(".main-left-menu-js");
const main = document.querySelector(".main");
const close = document.querySelector(".close-menu");

nav.addEventListener("click", (event) => {
  main.style.position = "relative";
  menu.style.display = "block";
  close.style.display = "block";
  menu.style.position = "absolute";
  menu.style.background = "white";
  menu.style.height = "100%";
  menu.style.boxShadow = " 0 0px 0px 40rem #00000075";
  close.style.display = "flex";
  close.style.justifyContent = "center";
  close.style.gap = "10px";
  close.style.padding = "10px";
});
close.addEventListener("click", (event) => {
  if (window.innerWidth <= 768) {
    menu.style.display = "none";
  }
});
