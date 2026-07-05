// ==============================
// DESPLAZAMIENTO SUAVE
// ==============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({
            behavior: 'smooth'
        });

    });

});

// ==============================
// EFECTO HEADER AL HACER SCROLL
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,.95)";
        header.style.boxShadow = "0 0 20px #00ff4c";

    } else {

        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "none";

    }

});

// ==============================
// ANIMACIÓN AL APARECER SECCIONES
// ==============================

const secciones = document.querySelectorAll("section");

const mostrar = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.2
});

secciones.forEach((seccion) => {

    seccion.classList.add("oculto");

    mostrar.observe(seccion);

});