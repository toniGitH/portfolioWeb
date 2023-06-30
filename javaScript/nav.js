window.onload=inicio;

function inicio(){
    document.querySelector("#menuHamburguesa").onclick=verMenu;
}

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