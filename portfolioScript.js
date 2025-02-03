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
            event.preventDefault(); // Prevent the default anchor jump

            const targetId = this.getAttribute("href").substring(1); 
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Smoothly scroll to the target section
                window.scrollTo({
                    top: targetElement.offsetTop - 60, 
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    document.body.style.backgroundPosition = `center ${scrollPosition * 0.5}px`; 
});