const form = document.getElementById("subscribeForm");
const msg = document.querySelector(".form-msg");

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    
    msg.style.color = "#0045d4";
    msg.textContent = "Processing, please wait...";

    let response = await fetch("/subscribe", {
        method: "POST",
        body: new FormData(form)
    });

    let result = await response.text();

    msg.style.color = "green";
    msg.textContent = "Thank you! Your subscription preferences have been saved.";
    form.reset();
});
