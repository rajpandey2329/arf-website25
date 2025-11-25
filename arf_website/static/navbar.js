const loginIcon = document.getElementById("loginIcon");
const loginDropdown = document.getElementById("loginDropdown");

loginIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    loginDropdown.style.display =
        loginDropdown.style.display === "block" ? "none" : "block";
});

// close when clicking outside
document.addEventListener("click", (e) => {
    if (!loginDropdown.contains(e.target)) {
        loginDropdown.style.display = "none";
    }
});
