let saludar = () => console.log("Hola mundo")

listarTarea = (nombre) => {
    let ul = document.getElementById("list");
    let li = document.createElement("input");
    let br = document.createElement("br");
    li.setAttribute("type", "checkbox");
    let label = document.createElement('label');
    label.setAttribute("onClick", "clickEliminar(this)")
    label.appendChild(document.createTextNode(nombre));
    ul.appendChild(li);
    ul.appendChild(label);
    ul.appendChild(br);
}

crearTarea = () => {
    let nombreTarea = prompt("ingrese la tarea a listar");
    if (nombreTarea != "") {
        listarTarea(nombreTarea);
    } else {
        alert("No ingreso un nombre para la tarea, inténtelo nuevamente")
    }
}

eliminarTarea = (etiqueta) => {
    let ul = document.getElementById("list");
    ul.removeChild(etiqueta.previousSibling);
    ul.removeChild(etiqueta.nextSibling);
    ul.removeChild(etiqueta);
}

clickEliminar = (etiqueta) => {
    if (confirm("¿Está seguro que desea eliminar la tarea?")) {
        eliminarTarea(etiqueta);
    }
}