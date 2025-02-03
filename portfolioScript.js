document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mouseover", function () {
            this.classList.add("hover");
        });
        button.addEventListener("mouseout", function () {
            this.classList.remove("hover");
        });
    });
});

document.querySelectorAll(".navLink").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default jump
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

function sendEmail() {
    window.location.href = "mailto:jhyncierto@gmail.com";
}