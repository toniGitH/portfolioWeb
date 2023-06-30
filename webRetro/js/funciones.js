window.onload=inicio;

var visible=true;
var carrito=[];
var sumaTotal=0;
var elementos;
var categBoton;

function inicio(){
    document.querySelector("#filtroSubCat").onchange=filtrar;
    document.querySelector("#iconoCarrito").onclick=verCarrito;
    document.querySelector("#logo").onclick=home;
    document.querySelectorAll(".botonDeMenu")[0].onclick=verTienda;
    document.querySelectorAll(".botonDeMenu")[1].onclick=verBlog;
    actualizarImporte();
    crearListaCategorias();
    crearIconosCat();
}

function home(){
    document.querySelector("#inicio").style.display="block";
    document.querySelector("#blog").style.display="none";
    document.querySelector("main").style.marginTop="130px";
    document.querySelector("#tiendaOnline").style.display="none";
    document.querySelector("#menu").style.display="none";
}

function verTienda(){
    document.querySelector("#menu").style.display="grid";
    document.querySelector("main").style.marginTop="260px";
    document.querySelector("#blog").style.display="none";
    document.querySelector("#inicio").style.display="none";

}

function verBlog(){
    document.querySelector("#tiendaOnline").style.display="none";
    document.querySelector("#inicio").style.display="none";
    document.querySelector("#menu").style.display="none";
    document.querySelector("#blog").style.display="block";
    document.querySelector("main").style.marginTop="130px";

}

function crearListaCategorias(){
    for(let k=0; k<categorias.length; k++) {
        let categoria=categorias[k];
        if (listaCategorias.indexOf(categoria)==-1){
            listaCategorias.push(categoria);
        }
    }
}

function crearIconosCat(){
    for(k=0; k<listaCategorias.length; k++){
        document.querySelector("#menuCat").insertAdjacentHTML("beforeend",`
        <div class="imagenDeMenu">
            <img class="iconoMenu" categ="${listaCategorias[k]}" src="img/iconosCat/${listaCategorias[k]}.png">
            <div class="tituloIcono">${listaCategorias[k]}</div>
        </div>
        `)
        document.querySelectorAll(".iconoMenu")[k].onclick=botonIconosCat;
    }
}

function botonIconosCat(){
    document.querySelector("#tiendaOnline").style.display="grid";
    document.querySelector("#cajaFiltros").style.display="flex";
    document.querySelector("#escaparate").innerHTML="";
    categBoton=this.getAttribute("categ");
    verProductos();
}

function verProductos(){

    for (let k=0; k<imagenes.length; k++){
        if(categBoton==categorias[k]){
            document.querySelector("#escaparate").insertAdjacentHTML("beforeend",`
            <div class="cajaProducto">
                <div class="cajaImagen">
                    <img src="img/productos/${imagenes[k]}">
                </div>
                <div class="cajaDatos">
                    <div class="nombre">${nombres[k]}</div>
                    <div class="descripcion">${descripciones[k]}</div> 
                </div>
                <div class="cajaBotones">
                    <div class="comprar" atributo1="${k}"><img id="imagenBotonComprar" src="img/iconos/carrito.png"></div>
                    <div class="precio">${precios[k]}€</div>
                </div>
            </div>`);

            let hay=document.querySelectorAll(".comprar").length-1;
            document.querySelectorAll(".comprar")[hay].onclick=alCarrito;
        }
    }

    let son=document.querySelectorAll(".comprar").length;
    
    for(let lsc=listaSubCategorias.length; lsc>0; lsc--){
        listaSubCategorias.pop();
    }

    document.querySelector("#filtroSubCat").innerHTML="";
    document.querySelector("#filtroSubCat").insertAdjacentHTML("beforeend", `<option>${categBoton} (Todo)</option>`);
   
    for (let i=0; i<son; i++){
        
        let attr=document.querySelectorAll(".comprar")[i].getAttribute("atributo1");
        let subCategoria=subCategorias[attr];
        if (listaSubCategorias.indexOf(subCategoria)==-1){
            listaSubCategorias.push(subCategoria);
            document.querySelector("#filtroSubCat").insertAdjacentHTML("beforeend", `<option>${subCategoria}</option>`);
        }
    }
}

function filtrar(){
    document.querySelector("#escaparate").innerHTML="";
    let seleccion2=document.querySelector("#filtroSubCat").value;
    if(seleccion2==`${categBoton} (Todo)`){
        verProductos();
    }

    else{
        for (let k=0; k<imagenes.length; k++){
            if(seleccion2==subCategorias[k]){
                document.querySelector("#escaparate").insertAdjacentHTML("beforeend",`
                <div class="cajaProducto">
                    <div class="cajaImagen">
                        <img src="img/productos/${imagenes[k]}">
                    </div>
                    <div class="cajaDatos">
                        <div class="nombre">${nombres[k]}</div>
                        <div class="descripcion">${descripciones[k]}</div> 
                    </div>
                    <div class="cajaBotones">
                        <button class="comprar" atributo1="${k}"><img id="imagenBotonComprar" src="img/iconos/carrito.png"></button>
                        <div class="precio">${precios[k]}€</div>
                    </div>
                </div>`);
                let hay=document.querySelectorAll(".comprar").length-1;
                document.querySelectorAll(".comprar")[hay].onclick=alCarrito;
            }
        }
    }      
}

function alCarrito(){
    let añadido=Number(this.getAttribute("atributo1"));
    document.querySelector("#carrito").insertAdjacentHTML("beforeend",`
        <div class="añadido">
            <div class="añadidoImagen">
                <img src="img/productos/${imagenes[añadido]}">
            </div>
            <div class="añadidoDatos">
                <div class="añadidoPapelera">
                    <img src="img/iconos/papelera20x20.png">
                </div>
                <div class="añadidoPrecio">
                    ${precios[añadido]}€
                </div>
            </div>
        </div>`);
        
    carrito.push(añadido);
    sumaTotal+=precios[añadido];
    actualizarImporte();
    document.querySelectorAll(".añadidoPapelera")[carrito.length-1].onclick=eliminar;
}

function eliminar(){
    hijos=this.parentNode.parentNode.parentNode.children;
    for (let k=0;k<hijos.length;k++){
        if (hijos[k]==this.parentNode.parentNode){
            // Restar el precio de sumaTotal (resta)
            sumaTotal-=precios[carrito[k]];
            // Actualizar la sumaTotal (actualizarImporte())
            actualizarImporte();
            // Borrar el padre del padre del this (remove())
            this.parentNode.parentNode.remove();
            // Borrarlo del array (splice)
            carrito.splice(k,1);
        }
    }
}

function verCarrito(){
    if(visible==true){
        document.querySelector("#productosCarrito").style.display="block";
        visible=false;
    }
    else{
        document.querySelector("#productosCarrito").style.display="none";
        visible=true;
    }
}

function actualizarImporte(){
        document.querySelector("#sumaTotal").innerHTML=`${sumaTotal}<span class="euro">€</span>`;
}
