function showAlert() {
    alert("Thank you for choosing G-Wearables!\n\nRedirecting you to the product page.");
}

function showMessage() {
    alert("Product added to cart successfully!");
}

window.onload = function () {
    console.log("Welcome to G-Wearables!");
};

const cards = document.querySelectorAll(".container");
cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

const heroButton = document.querySelector(".hero-btn");
heroButton.addEventListener("mouseover", () => {
    heroButton.style.transform = "scale(1.08)";
});

heroButton.addEventListener("mouseout", () => {
    heroButton.style.transform = "scale(1)";
});