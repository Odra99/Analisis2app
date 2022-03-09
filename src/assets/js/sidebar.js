let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", () => { 
sidebar.classList.toggle("open");
  menuBtnChange(); 
});

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("fa-bars", "fa-signal-3");
    document.getElementById("btn").style = "transform: rotate(270deg) ; top:10%;"
  } else {
    closeBtn.classList.replace("fa-signal-3", "fa-bars");
   document.getElementById("btn").style = ""

  }
}