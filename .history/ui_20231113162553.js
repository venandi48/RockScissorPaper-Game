// https://www.w3schools.com/howto/howto_js_sidenav.asp

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  let closeBtn = document.querySelector(".sidenav");

  if (closeBtn.classList.contains("openend"))
    closeBtn.classList.remove("openend");
}
