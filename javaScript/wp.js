window.onload=inicio;

var contador=0;
var fotos;
var web=[artesania, japan, ahora];
var nombre;
var artesania=["artesania0.jpg","artesania1.jpg","artesania2.jpg","artesania3.jpg","artesania4.jpg","artesania5.jpg","artesania6.jpg","artesania7.jpg","artesania8.jpg","artesania9.jpg"];
var japan=["japan0.png","japan1.png","japan2.png","japan3.png","japan4.png","japan5.png","japan6.png","japan7.png","japan8.png","japan9.png","japan10.png","japan11.png","japan12.png","japan13.png","japan14.png","japan15.png","japan16.png","japan17.png"];
var ahora=["ahora0.jpg", "ahora1.jpg", "ahora2.jpg", "ahora3.jpg","ahora4.jpg", "ahora5.jpg", "ahora6.jpg", "ahora7.jpg","ahora8.jpg", "ahora9.jpg", "ahora10.jpg", "ahora11.jpg","ahora12.jpg", "ahora13.jpg", "ahora14.jpg"];

function inicio(){
    document.querySelectorAll(".galeriaWP")[0].onclick=galeriaArtesania;
    document.querySelectorAll(".verWeb")[0].onclick=webArtesania;
    document.querySelectorAll(".galeriaWP")[1].onclick=galeriaJapan;
    document.querySelectorAll(".verWeb")[1].onclick=webJapan;
    document.querySelectorAll(".galeriaWP")[2].onclick=galeriaAhora;
    document.querySelectorAll(".verWeb")[2].onclick=webAhora;
    document.querySelector("#menuHamburguesa").onclick=verMenu;

}

// ----- GALERÍAS DE IMÁGENES DE WEBS CON WORDPRESS ----- //

    // ACTIVADORES DE LAS GALERÍAS DE IMÁGENES //

function galeriaArtesania(){
    nombre="webArtesania";
    web=artesania;
    fotos=artesania.length;
    verGaleria();
}

function galeriaJapan(){
    nombre="webJapan";
    web=japan;
    fotos=japan.length;
    verGaleria();
}

function galeriaAhora(){
    nombre="webAhora";
    web=ahora;
    fotos=ahora.length;
    verGaleria();
}

    // FUNCIONALIDADES DE LAS GALERÍAS DE IMÁGENES // 

function verGaleria(){
    document.querySelector("#velo").style.display="block";
    document.querySelector("#galeriaFotosWP").style.display="flex";
    document.querySelector("#galeriaFotosWP").insertAdjacentHTML("beforeend", `
        <div id="botonCerrarGaleria"><img id="iconoCerrar" src="img/iconos/cerrar.png" draggable="false"></div>      
        <div id="slider"><img id="imagenGaleriaFotosWP" src="img/galerias/${nombre}/${web[contador]}" draggable="false"></div>
        <div class="botoneraGaleria">
            <div class="controlGaleria" id="menos"><img class="iconoGaleria "src="img/iconos/atras.png" draggable="false"></div>
            <div class="controlGaleria" id="mas"><img class="iconoGaleria "src="img/iconos/adelante.png" draggable="false"></div>
        </div>
    `);
    document.querySelector("#mas").onclick=avanzar;
    document.querySelector("#menos").onclick=retroceder;
    document.querySelector("#botonCerrarGaleria").onclick=cerrar;
}

function avanzar(){
    contador++;
    if(contador>fotos-1){
       contador=0;
    }
    document.querySelector("#imagenGaleriaFotosWP").src=`img/galerias/${nombre}/${web[contador]}`;
}

function retroceder(){
    contador--;
    if(contador<0){
       contador=fotos-1;
    }
    document.querySelector("#imagenGaleriaFotosWP").src=`img/galerias/${nombre}/${web[contador]}`;
}

function cerrar(){
    document.querySelector("#velo").style.display="none";
    document.querySelector("#galeriaFotosWP").innerHTML="";
    document.querySelector("#galeriaFotosWP").style.display="none";
    contador=0;
    document.querySelector("#contenedorVerWeb").innerHTML="";
    document.querySelector("#contenedorVerWeb").style.display="none";
}

// ----- ACCESO A LAS WEBS HECHAS CON WORDPRESS ----- //

function webArtesania(){
    nombre="webArtesania";
    enlaceWP();
}

function webJapan(){
    nombre="webJapan";
    enlaceWP();
}

function webAhora(){
    nombre="webAhora";
    enlaceWP();
}

function enlaceWP(){
    if (nombre=="webArtesania"){
        window.open('http://artesa308:9QNN1C54@www.artesaniavikinga.com.mialias.net', '_blank', 'noopener noreferrer'); 
    } else if (nombre=="webJapan"){
        window.open('http://japano208:MeOKPEG7@www.japan.com.mialias.net/', '_blank', 'noopener noreferrer'); 
    } else if (nombre=="webAhora"){
        window.open('http://ahoram162:l22iOvsd@www.ahorameves.com.mialias.net/', '_blank', 'noopener noreferrer'); 
    }
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