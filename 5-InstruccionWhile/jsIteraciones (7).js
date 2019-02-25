function Mostrar() {

	var contador = 0;
	var acumulador = 0;
	var numero;
	var respuesta;
	var promedio;
	do {
		numero = parseInt(prompt("Ingrese numero: "));
		acumulador = acumulador + numero;
		contador = contador + 1;

		respuesta = prompt("Quiere continuar ?");


	}

	while (respuesta == "s");

	promedio = contador / acumulador;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN