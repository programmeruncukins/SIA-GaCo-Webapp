document.getElementById("editProfileForm").addEventListener("submit", function(e){
    e.preventDefault();

    const popup = document.getElementById("savedPopup");
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(err => {
                console.log('Service Worker registration failed:', err);
            });
    });
}

// ===== ACCESS CONTROL =====
document.addEventListener("DOMContentLoaded", () => {
    // šeit nosauc lapas, kuras prasa loginu
    const protectedPages = ["profile.html", "clients profile.html", "admin profile.html"];

    // iegūst pašreizējo faila nosaukumu
    const currentPage = window.location.pathname.split("/").pop();

    const loggedIn = localStorage.getItem("loggedIn"); // vai kāds tavs login flag

    // ja lapa ir aizsargāta un nav ielogojies
    if (protectedPages.includes(currentPage) && !loggedIn) {
        window.location.href = "login.html"; // novirza uz login page
    }
});
