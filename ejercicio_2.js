function leer(){
    //referencia por pseudoclase
    var nombre = document.forms["formulario"].elements[0].value;
    //referencia por id
    var clave = document.getElementById("pass").value;
    var car = document.getElementsByTagName("select")[0].value;
    var gen=document.getElementsByName("genero");
    var i,g;
    for(i=0;i<gen.length;i++){
        if(gen[i].checked){
            g=gen[i].value;
        }
    }
    /*Redeferencia por id :)*/

    var p=document.getElementById("privacidad").checked;
    /*var genero = document.getElementById["radio"][0].value;
    var privacidad = document.forms["formulario"].elements[4].value;*/
    document.getElementById("datos").innerHTML="\<br>Nombre: " + nombre + "\<br>Password: " + clave+ "\<br> Carrera: "+car+"\<br>Tu genero es: "+g+"\<br>Aceptaste los terminos: "+p;

}