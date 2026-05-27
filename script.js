// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    header.classList.toggle("sticky", window.scrollY > 50);

});


// SIMPLE FADE-IN ANIMATION

const cards = document.querySelectorAll(
    ".service-box, .service-card, .project-card, .value-box"
);

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

});


// DEFAULT STYLES FOR ANIMATION

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";

});
