// https://www.w3schools.com/howto/howto_js_sidenav.asp

/* Set the width of the side navigation to 250px */
function openNav() {
  let closeBtn = document.querySelector(".sidenav");

  if (closeBtn.classList.contains("opened") === false)
    closeBtn.classList.add("opened");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  let closeBtn = document.querySelector(".sidenav");

  if (closeBtn.classList.contains("opened"))
    closeBtn.classList.remove("opened");
}
