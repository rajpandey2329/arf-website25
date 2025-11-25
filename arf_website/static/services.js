// === Smooth scroll reveal for cards ===
const cards = document.querySelectorAll(".s-card");

const revealOnScroll = () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect().top;
        const revealPoint = window.innerHeight - 100;

        if (rect < revealPoint) {
            card.classList.add("reveal");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// === 3D Hover tilt effect ===
cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 18;
        const rotateX = ((y / rect.height) - 0.5) * -18;

        card.style.transform = `translateY(-12px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px) rotateX(0deg) rotateY(0deg)";
    });
});
