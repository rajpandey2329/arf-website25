const cards = document.querySelectorAll(".product-card");
function reveal() {
  cards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 120) card.classList.add("reveal");
  });
}
window.addEventListener("scroll", reveal);
reveal();
