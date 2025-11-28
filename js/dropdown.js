// Dropdown menu

const dropdownMenu = document.querySelector(".dropdown-menu");
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("drop-down")) {
    dropdownMenu.classList.toggle("show");
  } else if (!e.target.classList.contains("drop-down")) {
    dropdownMenu.classList.remove("show");
  }
});
