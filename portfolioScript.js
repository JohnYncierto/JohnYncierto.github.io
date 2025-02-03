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
    // Navbar scroll effect (change appearance when scrolling)
    const navbar = document.querySelector(".nav-center"); 
    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled"); // Add class when scrolled
            } else {
                navbar.classList.remove("scrolled"); // Remove class when at the top
            }
        });
    }

    // Smooth scrolling for nav links
    document.querySelectorAll(".navLink").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default jump
            const targetId = this.getAttribute("href").substring(1); // Remove #
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            } else {
                console.error("Section not found: " + targetId);
            }
        });
    });
});

document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    document.body.style.backgroundPosition = `center ${scrollPosition * 0.5}px`; // Adjust speed
});