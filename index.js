const navbar = document.querySelector(".navbar");
const toggler = document.getElementById("toggler");

toggler.addEventListener("click", () => {
  navbar.classList.toggle("active");
  toggler.classList.toggle("active-nav");
});