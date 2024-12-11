
function guardarDatosLS() {
    const tar = document.getElementById("Tarea").value ;
    const des = document.getElementById("Descripcion").value ;
    const est = document.getElementById("Estado").value ;
    localStorage.setItem(tar, tar);
    localStorage.setItem("d"+tar, des);
    localStorage.setItem("e"+tar, est);
}

function consultarTarea() {
    const tar = document.getElementById("Tarea").value ;
    const des = localStorage.getItem("d"+tar);
    const est = localStorage.getItem("e"+tar);
    document.getElementById("Descripcion").value = des;
    document.getElementById("Estado").value = est;
}

function actualizarTarea() {
    const tar = document.getElementById("Tarea").value ;
    const des = document.getElementById("Descripcion").value ;
    const est = document.getElementById("Estado").value ;
    localStorage.setItem(tar, tar);
    localStorage.setItem("d"+tar, des);
    localStorage.setItem("e"+tar, est);
}

function eliminarTarea() {
    const tar = document.getElementById("Tarea").value ;
    localStorage.removeItem(tar);
    localStorage.removeItem("d"+tar);
    localStorage.removeItem("e"+tar);
}
   