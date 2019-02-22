function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
var m = "Masculino";
var f = "Femenino";
while (!( sexo == "m" || sexo == "f")){

sexo = prompt( "Ingrese un sexo correcto");
   
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN