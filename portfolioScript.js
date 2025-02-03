document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("nav"); 

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Button hover effect
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mouseover", function () {
            this.classList.add("hover");
        });
        button.addEventListener("mouseout", function () {
            this.classList.remove("hover");
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll(".navLink").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Background scrolling effect
    document.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        document.body.style.backgroundPosition = `center ${scrollPosition * 0.3}px`;
    });
});


function sendEmail() {
    window.location.href = "mailto:jhyncierto@gmail.com";
}
