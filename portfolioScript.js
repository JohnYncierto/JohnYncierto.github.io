document.addEventListener("DOMContentLoaded", function () {
    // Navbar Scroll Effect
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Background Parallax Effect
    document.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        document.body.style.backgroundPosition = `center ${scrollPosition * 0.3}px`;
    });
});


function sendEmail() {
    window.location.href = "mailto:jhyncierto@gmail.com";
}
