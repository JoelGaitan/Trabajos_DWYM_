document.addEventListener("DOMContentLoaded", function() {
    let boton = document.getElementById("updateButton");
    let descripcion = document.querySelector(".description");
  
    if (boton && descripcion) {
      boton.addEventListener("click", function() {
        // Correo falso y actualizado
        let correoFalso = "joel.gaitan@example.com";
        let correoReal = "jgaitan10963@universidadean.edu.co";
  
        if (descripcion.innerHTML.includes(correoFalso)) {
          descripcion.innerHTML = descripcion.innerHTML.replace(correoFalso, correoReal);
          alert("La información ha sido actualizada correctamente.");
        } else {
          alert("La información ya está actualizada.");
        }
      });
    } else {
      console.error("No se encontró el botón o la descripción.");
    }
  });
  