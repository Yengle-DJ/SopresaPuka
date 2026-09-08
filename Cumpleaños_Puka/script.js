/* ========================= */
/* ABRIR SORPRESA */
/* ========================= */

function abrirSorpresa() {

    const contenedor = document.querySelector(".contenedor");

    contenedor.innerHTML = `

        <div class="apertura">

            <div class="regalo-grande">
                🎁
            </div>

            <h1 class="texto-apertura">
                Preparando tu sorpresa...
            </h1>

            <div class="cargando">
                <div class="barra-cargando"></div>
            </div>

        </div>

    `;

    setTimeout(function() {

        contenedor.innerHTML = `

            <div class="apertura-final">

                <div class="regalo-abierto">
                    🎁
                </div>

                <h1>
                    🎉 Puka's secret 🎉
                </h1>

            </div>

        `;

        crearConfeti();

    }, 2500);


    setTimeout(function() {

        mostrarCarta();

    }, 4000);
}


/* ========================= */
/* CARTA */
/* ========================= */

function mostrarCarta() {

    const contenedor =
        document.querySelector(".contenedor");

    contenedor.innerHTML = `

        <h1>🎉 ¡SORPRESA, PUKA! 🎉</h1>

        <div class="carta">

            <h2>💌 Para mi Puka</h2>

            <button
                class="boton-musica"
                onclick="reproducirMusica()">

                🎵 Reproducir música

            </button>

            <audio id="musica" loop>

                <source
                    src="musica/cancion.mp3"
                    type="audio/mpeg">

            </audio>

            <div class="galeria">

                <img
                    src="fotos/foto1.jpg"
                    alt="Recuerdo 1">

                <img
                    src="fotos/foto2.jpg"
                    alt="Recuerdo 2">

                <img
                    src="fotos/foto3.jpg"
                    alt="Recuerdo 3">

            </div>

            <div class="carta-texto">

                <h3>Para mi Puka favorita ❤️</h3>

                <p>
                    No sé muy bien por dónde empezar, porque siento que
                    podría escribir muchísimo y aun así me faltarían
                    palabras para explicar todo lo que significas para mí.
                </p>

                <p>
                    Desde que llegaste al colegio tenias como una chispa,
                    me caíste muy bien. En ese momento jamás imaginé
                    que con el tiempo ibas a convertirte en mi mejor amigo.
                    Simplemente empezamos a compartir momentos, hablar,
                    reírnos, tomar y hacer tonterías, y sin darme cuenta
                    terminaste convirtiéndote en una de las personas
                    más importantes para mí.
                </p>

                <p>
                    Puede que llevemos pocos años de amistad, pero eso
                    realmente no importa. El tiempo no siempre determina
                    lo especial que puede llegar a ser una persona.
                    Y tú, en poco tiempo, lograste ganarte
                    un lugar enorme en mi corazón.
                </p>

                <p>
                    Hemos pasado por muchísimas cosas juntos. Hemos
                    compartido experiencias que probablemente algún día
                    recordaremos y nos dará risa pensar en todo lo que
                    hacíamos. El año pasado incluso nos hicimos ese
                    tatuaje temporal del ave fénix en el pecho, se borro 10min despues.
                    También hemos jugado, hemos salido, hemos hecho un
                    montón de tonterías y hemos vivido momentos que ahora
                    forman parte de nuestros recuerdos.
                </p>

                <p>
                    Pero más allá de todas esas experiencias, hay algo
                    que para mí vale muchísimo más: siempre estuviste ahí.
                </p>

                <p>
                    En los buenos momentos y también en los malos. Cuando
                    todo estaba bien y cuando las cosas no estaban tan bien.
                    Y creo que eso es una de las cosas que más valoro
                    de nuestra amistad.
                </p>

                <p>
                    Quizás no siempre te lo digo, o a veces prefiero
                    molestarte antes que ponerme sentimental,
                    pero quiero que sepas que eres una persona increíble
                    y que para mí eres el mejor del mundo.
                </p>

                <p>
                    Siempre vas a tener un lugar en mi corazón y siempre
                    voy a apoyarte en todo lo que pueda. Quiero verte
                    cumplir tus metas, conseguir todo aquello que te
                    propongas y seguir creciendo como persona.
                </p>

                <p>
                    Y espero que podamos seguir acumulando muchos más
                    recuerdos juntos. Que podamos mirar atrás dentro
                    de muchos años y decir:
                    “Mira todo lo que hemos vivido”.
                </p>

                <p>
                    Espero que cumplas muchos, muchísimos años más.
                    Que la vida te dé momentos increíbles y que nunca
                    te falten razones para ser feliz.
                </p>

                <p>
                    Y sí, también espero que algún día podamos llegar
                    a vivir juntos con Michi, porque obviamente
                    todavía nos quedan demasiadas cosas por hacer
                    y demasiadas historias por vivir.
                </p>

                <p>
                    Quiero que sepas que, pase el tiempo que pase,
                    siempre vas a ser mi Puka favorita y nunca te
                    cambiaría por nadie. ❤️
                </p>

                <p>
                    Gracias por llegar a mi vida sin que ninguno
                    de los dos supiera todo lo que iba a venir después.
                </p>

                <p>
                    Gracias por cada risa, cada conversación, cada
                    tontería, cada experiencia y cada momento que terminó
                    convirtiéndose en un recuerdo inolvidable.
                </p>

                <p>
                    Y sobre todo, gracias por ser tú.
                </p>

                <p class="despedida">
                    Te quiero muchísimo, Puka. ❤️
                </p>

                <p class="cumple">
                    Feliz cumpleaños. 🎂
                </p>

                <p>
                    Por tus 18, por todo lo que has vivido y por todo
                    lo que todavía nos falta vivir.
                </p>

                <p class="frase-final">
                    Y recuerda:
                    <br><br>

                    <strong>
                        esto no es el final de nuestra historia,
                        es apenas otro capítulo.
                    </strong>
                </p>

                <p>
                    Todavía nos quedan muchísimos recuerdos por crear. 🫶✨
                </p>

            </div>

            <button
                class="boton-continuar"
                onclick="mostrarRecuerdos()">

                📸 Ver nuestros recuerdos

            </button>

        </div>

    `;

    crearConfeti();

    mostrarFotos();
}


/* ========================= */
/* CONFETI */
/* ========================= */

function crearConfeti() {

    for (let i = 0; i < 80; i++) {

        const confeti =
            document.createElement("div");

        confeti.classList.add("confeti");

        confeti.style.left =
            Math.random() * 100 + "vw";

        confeti.style.animationDelay =
            Math.random() * 2 + "s";

        confeti.style.backgroundColor =
            [
                "#e63946",
                "#2563eb",
                "#9333ea",
                "#facc15",
                "#ffffff"
            ][Math.floor(Math.random() * 5)];

        document.body.appendChild(confeti);

        setTimeout(function() {

            confeti.remove();

        }, 5000);
    }
}


/* ========================= */
/* VISOR DE FOTOS */
/* ========================= */

function mostrarFotos() {

    const fotos =
        document.querySelectorAll(
            ".galeria img, .recuerdos img"
        );

    fotos.forEach(function(foto) {

        foto.addEventListener(
            "click",
            function() {

                const ventana =
                    document.createElement("div");

                ventana.classList.add("visor");

                ventana.innerHTML = `

                    <button class="cerrar">
                        ✕
                    </button>

                    <img
                        src="${foto.src}"
                        alt="Foto ampliada">

                `;

                document.body.appendChild(ventana);

                ventana
                    .querySelector(".cerrar")
                    .addEventListener(
                        "click",
                        function() {

                            ventana.remove();

                        }
                    );

                ventana.addEventListener(
                    "click",
                    function(evento) {

                        if (evento.target === ventana) {

                            ventana.remove();

                        }

                    }
                );

            }
        );

    });
}


/* ========================= */
/* MÚSICA */
/* ========================= */

function reproducirMusica() {

    const musica =
        document.getElementById("musica");

    if (musica) {

        musica.play();

    }
}


/* ========================= */
/* RECUERDOS */
/* ========================= */

function mostrarRecuerdos() {

    const contenedor =
        document.querySelector(".contenedor");

    contenedor.innerHTML = `

        <h1>📸 Nuestros recuerdos</h1>

        <p>
            Algunos momentos que siempre voy a recordar ❤️
        </p>

        <div class="recuerdos">

            <img
                src="fotos/foto1.jpg"
                alt="Recuerdo 1">

            <img
                src="fotos/foto2.jpg"
                alt="Recuerdo 2">

            <img
                src="fotos/foto3.jpg"
                alt="Recuerdo 3">

        </div>

        <button
            class="boton-nivel"
            onclick="mostrarNivel18()">

            🎮 Continuar

        </button>

    `;

    mostrarFotos();
}


/* ========================= */
/* NIVEL 18 */
/* ========================= */

function mostrarNivel18() {

    const contenedor =
        document.querySelector(".contenedor");

    contenedor.innerHTML = `

        <div class="nivel18">

            <div class="icono-nivel">
                🎮
            </div>

            <div class="texto-desbloqueado">
                🔓 NIVEL DESBLOQUEADO
            </div>

            <h1>
                NIVEL 18
            </h1>

            <div class="linea-nivel"></div>

            <h2>
                ¡FELICIDADES, PUKA! 🎉
            </h2>

            <p>
                Has completado el nivel 17.
            </p>

            <div class="estadisticas">

                <div class="estadistica">

                    <span>🎂</span>

                    <strong>18</strong>

                    <small>
                        NUEVO NIVEL
                    </small>

                </div>

                <div class="estadistica">

                    <span>⭐</span>

                    <strong>∞</strong>

                    <small>
                        AVENTURAS
                    </small>

                </div>

                <div class="estadistica">

                    <span>❤️</span>

                    <strong>MAX</strong>

                    <small>
                        BUENOS MOMENTOS
                    </small>

                </div>

            </div>

            <p class="mensaje-nivel">
                Nuevas aventuras están esperando...
            </p>

            <button
                class="boton-desbloquear"
                onclick="mostrarMensajeSecreto()">

                🔓 Desbloquear siguiente nivel

            </button>

        </div>

    `;

    crearConfeti();
}


/* ========================= */
/* MENSAJE SECRETO */
/* ========================= */

function mostrarMensajeSecreto() {

    const contenedor =
        document.querySelector(".contenedor");

    contenedor.innerHTML = `

        <div class="secreto">

            <div class="candado">
                🔐
            </div>

            <h1>
                Espera...
            </h1>

            <p>
                Encontraste una zona secreta. 👀
            </p>

            <div class="carta-secreta">

                <span>
                    💌 MENSAJE SECRETO
                </span>

                <p>
                    Puka, todavía quedan muchas cosas
                    por descubrir en esta página...
                </p>

                <p>
                    Y esta es solo una pequeña parte
                    de todo lo que quería decirte. ❤️
                </p>

            </div>

            <button
                class="boton-final"
                onclick="mostrarFinal()">

                ❤️ Ver la última sorpresa

            </button>

        </div>

    `;
}


/* ========================= */
/* FINAL */
/* ========================= */

function mostrarFinal() {

    const contenedor =
        document.querySelector(".contenedor");

    contenedor.innerHTML = `

        <div class="final">

            <div class="corazon-grande">
                ❤️
            </div>

            <h1>
                Feliz cumpleaños, Puka
            </h1>

            <p>
                Gracias por formar parte de tantos momentos
                que hicieron mi vida un poquito más bonita.
            </p>

            <p>
                Espero que este nuevo año venga lleno de
                cosas increíbles para ti. ✨
            </p>

            <h2>
                ¡Te quiero mucho, Puka! ❤️
            </h2>

            <p class="firma">
                — De alguien que te quiere muchísimo 🫶
            </p>

        </div>

    `;

    crearConfeti();
}