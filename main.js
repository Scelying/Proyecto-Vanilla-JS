let saludar = () => console.log("Hola mundo")

listarTarea = (nombre) => {
    let ul = document.getElementById("list");
    let li = document.createElement("input");
    let br = document.createElement("br");
    li.setAttribute("type", "checkbox");
    let label = document.createElement('label');
    label.appendChild(document.createTextNode(nombre));
    ul.appendChild(li);
    ul.appendChild(label);
    ul.appendChild(br);
}

crearTarea = () => {
    let nombreTarea = prompt("ingrese la tarea a listar");
    listarTarea(nombreTarea);
}

eliminarTarea = () => {
    let ul = document.getElementById("list");
    let br = ul.lastChild;
    console.log(br);
    ul.removeChild(br);
    let label = ul.lastChild;
    console.log(label);
    ul.removeChild(label);
    let chbox = ul.lastChild;
    console.log(chbox);
    ul.removeChild(chbox);
    
}