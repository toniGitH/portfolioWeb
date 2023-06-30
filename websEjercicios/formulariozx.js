
    window.onload=inicio;

    function inicio(){
            document.querySelector(".ojos img").onclick=visualizar;
    }

    function visualizar(){

        // si el atributo es password
        if (document.querySelector("#pass").getAttribute("type")=="password"){
                document.querySelector("#pass").setAttribute("type","text");
                document.querySelector(".ojos img").src="img/ojocerrado20x20.png";
        }

        // si el atributo es text
        else {
                document.querySelector("#pass").setAttribute("type","password");
                document.querySelector(".ojos img").src="img/ojoabierto20x20.png";
        }

    }
