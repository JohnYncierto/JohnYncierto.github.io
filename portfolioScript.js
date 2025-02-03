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

function sendEmail() {
    window.location.href = "mailto:jhyncierto@gmail.com";
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".navLink").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Stop default jump
            const targetId = this.getAttribute("href").substring(1); // Remove #
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});