
/* ========================================
   IR A LOS RECUERDOS
======================================== */
function irARecuerdos() {
    const recuerdos = document.getElementById("recuerdos");

    if (recuerdos) {
        recuerdos.scrollIntoView({ behavior: "smooth" });
    }
}

/* ========================================
   ABRIR EL VISOR DE FOTOS
======================================== */
function abrirVisor(imagen) {
    const visor = document.getElementById("visor");
    const imagenVisor = document.getElementById("imagen-visor");

    if (!visor || !imagenVisor || !imagen) return;

    imagenVisor.src = imagen.src;
    visor.classList.add("activo");
    document.body.style.overflow = "hidden";
}

/* ========================================
   CERRAR EL VISOR
======================================== */
function cerrarVisor() {
    const visor = document.getElementById("visor");

    if (!visor) return;

    visor.classList.remove("activo");
    document.body.style.overflow = "";
}

/* Cerrar la foto con Escape */
document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        cerrarVisor();
    }
});

/* Cerrar al pulsar fuera de la foto */
const visorFotos = document.getElementById("visor");

if (visorFotos) {
    visorFotos.addEventListener("click", function (evento) {
        if (evento.target === this) {
            cerrarVisor();
        }
    });
}

/* ========================================
   ANIMACIÓN AL DESPLAZARSE
======================================== */
const elementos = document.querySelectorAll(
    ".introduccion, .recuerdos, .fragmentos, .carta-seccion, .final, .video-sorpresa"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.15
    });

    elementos.forEach(function (elemento) {
        observer.observe(elemento);
    });
} else {
    elementos.forEach(function (elemento) {
        elemento.classList.add("visible");
    });
}

/* ========================================
   MOVIMIENTO SUAVE DE LAS FOTOS
======================================== */
const fotos = document.querySelectorAll(".foto img:not(.hotwheel)");

fotos.forEach(function (foto) {
    foto.addEventListener("mousemove", function (evento) {
        const rect = foto.getBoundingClientRect();

        const x = evento.clientX - rect.left;
        const y = evento.clientY - rect.top;

        const centroX = rect.width / 2;
        const centroY = rect.height / 2;

        const movimientoX = (x - centroX) / 60;
        const movimientoY = (y - centroY) / 60;

        foto.style.transform =
            `translate(${movimientoX}px, ${movimientoY}px)`;
    });

    foto.addEventListener("mouseleave", function () {
        foto.style.transform = "";
    });
});

/* ========================================
   BOTÓN SORPRESA: MOSTRAR EL VIDEO
======================================== */
const botonSorpresa = document.getElementById("botonSorpresa");
const zonaVideo = document.getElementById("zonaVideo");
const videoSorpresa = document.getElementById("videoSorpresa");

if (botonSorpresa && zonaVideo) {
    botonSorpresa.addEventListener("click", function () {
        const mostrarVideo = zonaVideo.hidden;

        zonaVideo.hidden = !mostrarVideo;

        botonSorpresa.setAttribute(
            "aria-expanded",
            String(mostrarVideo)
        );

        botonSorpresa.innerHTML = mostrarVideo
            ? '<span class="icono-sorpresa" aria-hidden="true">♡</span> Cerrar sorpresa'
            : '<span class="icono-sorpresa" aria-hidden="true">▶</span> Abrir sorpresa';

        if (mostrarVideo) {
            zonaVideo.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        } else if (videoSorpresa) {
            videoSorpresa.pause();
            videoSorpresa.currentTime = 0;
        }
    });
}
