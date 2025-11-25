const revealItems = document.querySelectorAll(".contact-form, .map-section");
function revealOnScroll() {
  revealItems.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 120) {
      el.classList.add("reveal");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
