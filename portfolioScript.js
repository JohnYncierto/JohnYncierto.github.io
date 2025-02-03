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

    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.5  // Trigger when 50% of the section is in view
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });

    // Background Parallax Effect
    document.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        document.body.style.backgroundPosition = `center ${scrollPosition * 0.1}px`;
    });
});


function sendEmail() {
    window.location.href = "mailto:jhyncierto@gmail.com";
}
