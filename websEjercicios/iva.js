window.onload=inicio;

    var precioSin;
    const PORCENTAJE=0.21;
    var iva;
    var precioCon;
    var sumaTotal=0;

function inicio(){
    document.querySelector("#calcular").onclick=calcular;
    document.querySelector("#historial").onclick=reset;/*15*/
    document.querySelector("#cantidad").onkeydown=teclado;
}

function calcular(){
    precioSin=Number(document.querySelector("#cantidad").value);

    if (precioSin>0){/*Es importante poner este if después de que JS lea si hay o no un valor en precioSin*/
    iva=Number((precioSin * PORCENTAJE).toFixed(2));
    precioCon=Number((precioSin + iva).toFixed(2));
    sumaTotal= Number((sumaTotal+precioCon).toFixed(2));
    document.querySelector("#iva_actual").innerHTML=`El IVA de ${precioSin}€ es de ${iva}€`;
    document.querySelector("#historial").insertAdjacentHTML('beforeend', `<div id="linea"><div>P.V.P.</div> <div class="simb">=</div> <div>${precioSin}€</div> <div class="simb">+</div> <div>${iva}€</div> <div class="simb">=</div> <div>${precioCon}€</div></div>`);
    document.querySelector("#sumatotal").innerHTML=`<div id="total">${sumaTotal}€</div>`;
    document.querySelector("#cantidad").value="";
    }
}

function teclado(f){
    if (f.keyCode==13){
    calcular();
    }
}

function reset(){
	document.querySelector("#cantidad").value="";
	document.querySelector("#iva_actual").innerHTML="";
	document.querySelector("#historial").innerHTML="";
	document.querySelector("#sumatotal").innerHTML="";
	document.querySelector("#cantidad").focus();
	sumaTotal=0;
}