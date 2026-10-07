

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    // Prevenimos que el formulario se envíe automáticamente por defecto
    event.preventDefault();
    
    // Obtenemos los valores de los campos principales
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let edad = document.getElementById("edad").value.trim();
    
    // Verificamos si algún campo está vacío o no se seleccionó
    if (nombre === "" || apellido === "" || correo === "" || telefono === "" || edad === "") {
        alert("Por favor, complete todos los datos y acepte los términos antes de continuar.");
        return; // Detiene la ejecución para que no salga el mensaje de éxito
    }
    // Si todo está lleno correctamente, recién muestra la notificación de éxito
    alert("Datos enviados con éxito");
    event.target.reset();
});

function limpiar(){
    document.getElementById("miFormulario").reset();
    alert("Datos limpiados");
}

