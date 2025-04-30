function Sumar(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var res= parseInt(num1) + parseInt(num2);
    document.getElementById("resultado").innerHTML=res;
}

function Restar(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var res= parseInt(num1) - parseInt(num2);
    document.getElementById("resultado").innerHTML=res;
}

function Multiplicar(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var res= parseInt(num1) * parseInt(num2);
    document.getElementById("resultado").innerHTML=res;
}

function Dividir(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var res= parseInt(num1) / parseInt(num2);
    document.getElementById("resultado").innerHTML=res;
}