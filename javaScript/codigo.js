window.onload=inicio;
var nombre;
var proyecto=[`Restaurante "El Español"`, `Máquina Tragaperras`, `Tienda Online "Made in Retro"`, `"El Tocho Chic"- Grid`, `"Luna"- Flexbox`];
var indice;

function inicio(){
    document.querySelectorAll(".entrarEnConstruccion")[0].onclick=webRestaurante;
    document.querySelectorAll(".entrarEnConstruccion")[1].onclick=webTragaperras;
    document.querySelectorAll(".entrarEnConstruccion")[2].onclick=webRetro;
    document.querySelectorAll(".entrarEnResponsive")[0].onclick=webTocho;
    document.querySelectorAll(".entrarEnResponsive")[1].onclick=webLuna;
    crearListaEjercicios();
    document.querySelector("#menuHamburguesa").onclick=verMenu;
}

/* * * * * * FUNCIONALIDADES ESPECÍFICAS PARA LA SECCIÓN DE PROYECTOS EN CURSO * * * * * */

function webRestaurante(){
    nombre="restaurante";
    indice=0;
    limpiar();
    mensaje();
    document.querySelector("#titulo1").innerHTML="JS";
    document.querySelector("#contenido1").innerHTML=`
        <p>variables y arrays</p>
        <p>innerHTML e insertAdjacentHTML</p>
        <p>eventos onclick</p>
        <p>bucles (for)</p>
        <p>condicionales (if)</p>
        <p>"this" y "children"</p>`;
    document.querySelector("#titulo2").innerHTML="CSS3";
    document.querySelector("#contenido2").innerHTML=`
        <p>flexbox</p>
        <p>grid</p>
        <p>position</p>`;
    document.querySelector("#titulo3").innerHTML="HTML5";
    document.querySelector("#contenido3").innerHTML=`
        <p>estructura básica</p>
        <p>JS y CSS insertado en "head"</p>`;
}

function webTragaperras(){
    nombre="tragaperras";
    indice=1;
    limpiar();
    mensaje();
    document.querySelector("#titulo1").innerHTML="JS";
    document.querySelector("#contenido1").innerHTML=`
        <p>variables y arrays</p>
        <p>innerHTML e insertAdjacentHTML</p>
        <p>eventos onclick</p>
        <p>Math.random</p>
        <p>inserción de audios</p>
        <p>bucles (for)</p>
        <p>condicionales (if)</p>
        <p>"this" y "children"</p>`;
    document.querySelector("#titulo2").innerHTML="CSS3";
    document.querySelector("#contenido2").innerHTML=`
        <p>flexbox</p>
        <p>position</p>`;
    document.querySelector("#titulo3").innerHTML="HTML5";
    document.querySelector("#contenido3").innerHTML=`
        <p>estructura básica</p>
        <p>JS y CSS insertado en "head"</p>`;
}

function webRetro(){
    nombre="retro";
    indice=2;
    limpiar();
    mensaje();
    document.querySelector("#titulo1").innerHTML="JS";
    document.querySelector("#contenido1").innerHTML=`
        <p>variables y arrays</p>
        <p>innerHTML e insertAdjacentHTML</p>
        <p>eventos onclick y onchange</p>
        <p>bucles (for)</p>
        <p>condicionales (if)</p>
        <p>"this" y "children"</p>`;
    document.querySelector("#titulo2").innerHTML="CSS3";
    document.querySelector("#contenido2").innerHTML=`
        <p>flexbox</p>
        <p>grid</p>
        <p>position</p>`;
    document.querySelector("#titulo3").innerHTML="HTML5";
    document.querySelector("#contenido3").innerHTML=`
        <p>estructura básica</p>`;
}

/* * * * * * FUNCIONALIDADES ESPECÍFICAS PARA LA SECCIÓN DE MAQUETAS RESPONSIVE * * * * * */

function webTocho(){
    nombre="tocho";
    indice=3;
    limpiar();
    mensaje();
    document.querySelector("#col1").style.display="none";
    document.querySelector("#titulo2").innerHTML="CSS3";
    document.querySelector("#contenido2").innerHTML=`
        <p>grid</p>
        <p>mediaqueries</p>`;
    document.querySelector("#titulo3").innerHTML="HTML5";
    document.querySelector("#contenido3").innerHTML=`
        <p>estructura básica</p>
        <p>CSS insertado en "head"</p>`;
}

function webLuna(){
    nombre="luna";
    indice=4;
    limpiar();
    mensaje();
    document.querySelector("#titulo1").innerHTML="JS";
    document.querySelector("#contenido1").innerHTML=`
        <p>menu "hamburguesa"</p>`;
    document.querySelector("#titulo2").innerHTML="CSS3";
    document.querySelector("#contenido2").innerHTML=`
        <p>flexbox</p>
        <p>mediaqueries</p>`;
    document.querySelector("#titulo3").innerHTML="HTML5";
    document.querySelector("#contenido3").innerHTML=`
        <p>estructura básica</p>
        <p>JS y CSS insertado en "head"</p>`;
}

/* * * * * * FUNCIONALIDADES COMUNES A SECCIONES EN CONSTRUCCIÓN Y RESPONSIVES* * * * * */

function mensaje(){
    document.querySelector("#velo").style.display="flex";
    document.querySelector("#velo").insertAdjacentHTML("beforeend", `
    <div id="contenedorMensaje"></div>
    `);
    crearMensaje();
}

function crearMensaje(){
    document.querySelector("#contenedorMensaje").insertAdjacentHTML("beforeend",`
    <div class="botonCerrarVelo"><img class="iconoCerrar" src="img/iconos/cerrar.png" draggable="false"></div>
    <div class="aviso">
        <p>¡AVISO!</p>
        <p>El documento que vas a ver es un solo un ejercicio.</p>
        <p>No es una web real.</p>    
    </div>
    <div class="cajaMensaje">
        <div class="cajaTituloProyecto">
            <div class="proyecto">PROYECTO:</div>
            <div class="nombreProyecto">${proyecto[indice]}</div>
        </div>        
        <div class="caracteristicasProyecto">
            <div class="columna" id="col1">
                <div class="tituloColumna" id="titulo1">JS (poner con JS)</div>
                <div class="contenidoColumna" id="contenido1">contenido columna 1 (poner con JS)</div>
            </div>
            <div class="columna" id="col2">
                <div class="tituloColumna" id="titulo2">CSS (poner con JS)</div>
                <div class="contenidoColumna" id="contenido2">contenido columna 2 (poner con JS)</div>
            </div>
            <div class="columna" id="col3">
                <div class="tituloColumna" id="titulo3">HTML (poner con JS)</div>
                <div class="contenidoColumna" id="contenido3">contenido columna 3 (poner con JS)</div>
            </div>
        </div>
        <div class="enlaceWeb"><p>ACCEDER</p></div>
    </div>
    `);
    document.querySelector("#titulo1").style.color="#DE9C25";
    document.querySelector("#titulo2").style.color="#254BDD";
    document.querySelector("#titulo3").style.color="#DD4B25";
    document.querySelector(".botonCerrarVelo").onclick=cerrarVelo;
    document.querySelector(".enlaceWeb").onclick=verWeb;
}

function limpiar(){
    document.querySelector("#velo").innerHTML="";
    document.querySelector("#velo").style.display="none";
}

function cerrarVelo(){
    limpiar();
}

function verWeb(){
    if (nombre=="restaurante"){
        window.open('webRestaurante/restaurante.html', '_blank', 'noopener noreferrer');
        limpiar();
    }
    if (nombre=="tragaperras"){
        window.open('webTragaperras/tragaperras.html', '_blank', 'noopener noreferrer');
        limpiar(); 
    }
    if (nombre=="retro"){
        window.open('webRetro/retro.html', '_blank', 'noopener noreferrer');
        limpiar();
    }
    if (nombre=="tocho"){
        window.open('webTocho/tocho.html', '_blank', 'noopener noreferrer');
        limpiar();
    }
    if (nombre=="luna"){
        window.open('webLuna/luna.html', '_blank', 'noopener noreferrer');
        limpiar();
    }
}

/* * * * * * FUNCIONALIDADES ESPECÍFICAS PARA LA SECCIÓN DE EJERCICIOS SENCILLOS * * * * * */

function crearListaEjercicios(){
    let cuantos=nombres.length;
    for (let k=0; k<cuantos; k++){
    document.querySelector("#cajaEjercicios").insertAdjacentHTML("beforeend", `
    <div class="linea">
        <div class="numeroEjercicio">Ejercicio ${k+1}:</div>
        <div class="tituloEjercicio">${nombres[k]}</div>
        <div class="iconoEjercicio">${iconos[k]}</div>
        <div class="fotoEjercicio"><img src="websEjercicios/portadas/${imagenes[k]}" draggable="false"></div>
        <div class="enlaceEjercicio" url="${urls[k]}"><div>ENTRAR</div></div>
    </div>
    <hr/>
    `);
    document.querySelectorAll(".enlaceEjercicio")[k].onclick=verEjercicio;
    }
}

function verEjercicio(){
    let enlace=this.getAttribute("url");
    window.open(`websEjercicios/${enlace}`, '_blank', 'noopener noreferrer');

}

// ---- FUNCIONES PARA EL MENU HAMBURGUESA ---- //

function verMenu(){
    document.querySelector("#veloMenu").style.display="block";
    document.querySelector("#veloMenu").insertAdjacentHTML("beforeend", `
    <img id="cerrarNav" src="img/iconos/cerrar.png">
    `);
    document.querySelector("#cerrarNav").onclick=cerrarMenu;
    document.querySelector("#veloMenu").insertAdjacentHTML("beforeend", `
    <div id="cajaMenuResponsive">
        <a href="index.html" id="opcInicioResponsive">INICIO</a>
        <hr>
        <a href="portfolio.html" id="opcPortfolioResponsive">PORTFOLIO</a>
        <hr>
        <a href="blog.html" id="opcBlogResponsive">BLOG</a>
        <hr>
        <a href="about.html" id="opcAboutResponsive">SOBRE MÍ</a>
    </div>
    `);
}

function cerrarMenu(){
    document.querySelector("#veloMenu").style.display="none";
    document.querySelector("#veloMenu").innerHTML="";
}