function Mostrar() {
    //tomo el mes 
    var mesDelAño = document.getElementById('mes').value;

    //alert (mesDelAño);

    switch (mesDelAño) {

        case ("Enero"):
        case ("Marzo"):
        case ("Abril"):

            alert("Este mes tiene 30 dias");
            break;

        case ("Febrero"):

            alert("Este mes tiene 28 dias");
            break;

        default:

            alert("Este mes tiene 31 dias");
            break;
    }




}//FIN DE LA FUNCIÓN