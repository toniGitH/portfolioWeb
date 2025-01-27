// Este script se encarga de generar el footer de la web, que será el mismo en todas las páginas.
document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear(); // Obtener el año actual
    const footerContent = `
        <footer>
            <p class="copy">&copy; ${currentYear} <span id="punto">·</span> Antonio González Ariza</p>
            <p class="copy"><span id="punto">·</span></p> 
            <p class="copy">Todos los derechos reservados</p>
            <p class="enlacePrivacidad"><a class="enlacePrivacidad" href="privacidad.html">Privacidad</a></p>
            <div id="back2Top"><img src="img/iconos/arrowUp.png" draggable="false"></div>
        </footer>
    `;
    document.getElementById("footer").innerHTML = footerContent;
});

