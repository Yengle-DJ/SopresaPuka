/* =====================================================
   IR A LOS RECUERDOS
===================================================== */

function irARecuerdos() {

    const recuerdos =
        document.getElementById("recuerdos");

    recuerdos.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   VISOR DE FOTOS
===================================================== */

function abrirVisor(imagen) {

    const visor =
        document.getElementById("visor");

    const imagenVisor =
        document.getElementById("imagen-visor");

    imagenVisor.src = imagen.src;

    visor.classList.add("activo");

    document.body.style.overflow = "hidden";

}


function cerrarVisor() {

    const visor =
        document.getElementById("visor");

    visor.classList.remove("activo");

    document.body.style.overflow = "";

}


/* =====================================================
   CERRAR CON ESC
===================================================== */

document.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Escape") {

            cerrarVisor();

        }

    }
);


/* =====================================================
   CERRAR HACIENDO CLICK FUERA DE LA FOTO
===================================================== */

document
    .getElementById("visor")
    .addEventListener(
        "click",
        function (evento) {

            if (evento.target === this) {

                cerrarVisor();

            }

        }
    );


/* =====================================================
   ANIMACIÓN AL HACER SCROLL
===================================================== */

const elementos =
    document.querySelectorAll(
        ".introduccion, .recuerdos, .fragmentos, .carta-seccion, .final"
    );


const observer =
    new IntersectionObserver(

        function (entradas) {

            entradas.forEach(
                function (entrada) {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


elementos.forEach(
    function (elemento) {

        observer.observe(elemento);

    }
);


/* =====================================================
   MOVIMIENTO SUAVE DE LAS FOTOS
===================================================== */

const fotos =
    document.querySelectorAll(
        ".foto img:not(.hotwheel)"
    );


fotos.forEach(
    function (foto) {

        foto.addEventListener(
            "mousemove",
            function (evento) {

                const rect =
                    foto.getBoundingClientRect();

                const x =
                    evento.clientX - rect.left;

                const y =
                    evento.clientY - rect.top;

                const centroX =
                    rect.width / 2;

                const centroY =
                    rect.height / 2;

                const movimientoX =
                    (x - centroX) / 60;

                const movimientoY =
                    (y - centroY) / 60;

                foto.style.transform =
                    `translate(${movimientoX}px, ${movimientoY}px)`;

            }
        );


        foto.addEventListener(
            "mouseleave",
            function () {

                foto.style.transform = "";

            }
        );

    }
);