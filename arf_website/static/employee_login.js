/* =====================================================
   EMPLOYEE LOGIN SCRIPT HANDLER
===================================================== */
document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const empID = document.getElementById("empID").value.trim();
    const pass  = document.getElementById("password").value.trim();

    if (empID === "" || pass === "") {
        alert("Please enter both Employee ID and Password.");
        return;
    }

    // UI Feedback
    alert("Logging in... (backend authentication required)");

    // backend AJAX / API authentication later here
    // window.location.href = "/employee/dashboard";
});
