// Reveal "Who We Are" text on scroll
const section = document.querySelector(".section");

function reveal() {
    if (section.getBoundingClientRect().top < window.innerHeight - 120) {
        section.classList.add("reveal");
    }
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
