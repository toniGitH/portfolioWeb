window.onload=inicio;
        
        function inicio(){
            document.getElementById("opcPortfolio").style.color="rgb(112, 112, 112)";

            //document.querySelector("#wordpress").onmouseover=revelarWP;
            //document.querySelector("#wordpress").onmouseout=ocultarWP;
            document.querySelector("#wordpress").onclick=verWP;

            //document.querySelector("#codigo").onmouseover=revelarCodigo;
            //document.querySelector("#codigo").onmouseout=ocultarCodigo;
            document.querySelector("#codigo").onclick=verCodigo;

            //document.querySelector("#seo").onmouseover=revelarSEO;
            //document.querySelector("#seo").onmouseout=ocultarSEO;
            document.querySelector("#seo").onclick=verSEO;

            //document.querySelector("#tcn").onmouseover=revelarTCN;
            //document.querySelector("#tcn").onmouseout=ocultarTCN;
            document.querySelector("#tcn").onclick=verTCN;

            document.querySelector("#menuHamburguesa").onclick=verMenu;

        }

// ---- FUNCIONES PARA LA SECCIÓN DE WEBS CON WORDPRESS ---- //

        function revelarWP(){
            document.querySelector("#tituloWP").style.visibility="visible";
        }
        function ocultarWP(){
            document.querySelector("#tituloWP").style.visibility="hidden";
        }
        function verWP(){
            location.href="wp.html";
        }

// ---- FUNCIONES PARA LA SECCIÓN DE WEBS CON CÓDIGO ---- //

        function revelarCodigo(){
            document.querySelector("#tituloCodigo").style.visibility="visible";
        }
        function ocultarCodigo(){
            document.querySelector("#tituloCodigo").style.visibility="hidden";
        }
        function verCodigo(){
            location.href="codigo.html";
        }

// ---- FUNCIONES PARA LA SECCIÓN DE SEO ---- //

        function revelarSEO(){
            document.querySelector("#tituloSEO").style.visibility="visible";
        }
        function ocultarSEO(){
            document.querySelector("#tituloSEO").style.visibility="hidden";
        }
        function verSEO(){
            location.href="seo.html";
        }

// ---- FUNCIONES PARA LA SECCIÓN DE TCN ---- //

        function revelarTCN(){
            document.querySelector("#tituloTCN").style.visibility="visible";
        }
        function ocultarTCN(){
            document.querySelector("#tituloTCN").style.visibility="hidden";
        }
        function verTCN(){
            location.href="todocasinuevo.html";
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