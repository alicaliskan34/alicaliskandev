let navbar = document.querySelector(".navbar");
let menuButton = document.querySelector(".menubutton");
let content = document.querySelector(".content");


menuButton.addEventListener("click", () => {

    if (menuButton.innerHTML === `<i class="fa-solid fa-bars"></i>`) {
        menuButton.innerHTML = `<i class="fa-solid fa-x"></i>`;
        content.style.transform = "translateX(-5000px)"
        navbar.style.transform = "translateX(0px)";

    } else if (menuButton.innerHTML === `<i class="fa-solid fa-x"></i>`) {
        menuButton.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        navbar.style.transform = "translateX(-5000px)"
        content.style.transform = "translateX(0px)"

    }

});

window.addEventListener("resize", () => {
    if (window.innerWidth > 600) { // Ekran genişliği 650 pikselden büyükse
        navbar.style.transform = "translateX(0px)"; // Navbar'ı eski haline getir
        menuButton.innerHTML = `<i class="fa-solid fa-bars"></i>`; // Menü butonunu eski haline getir
        content.style.transform = "translateX(0px)"; // İçeriği eski haline getir
    } else { // Ekran genişliği 650 pikselden küçükse
        navbar.style.transform = "translateX(-5000px)"; // Navbar'ı eski haline getir
    }
});

window.onload = function() {
    var navbar = document.querySelector('.navbar');
    if (window.innerWidth <= 650) {
        navbar.style.transform = 'translateX(-5000px)';
    }
};

window.addEventListener('resize', function() {
    var navbar = document.querySelector('.navbar');
    if (window.innerWidth <= 650) {
        navbar.style.transform = 'translateX(-5000px)';
    } else {
        navbar.style.transform = 'translateX(0)';
    }
});
