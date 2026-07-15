// --- JS PARA HISTORIA 3: Formulario de Registro ---
const formulario = document.getElementById("form-registro");
const mensajeExito = document.getElementById("mensaje-exito");
const inputCorreo = document.getElementById("input-correo");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que la página se recargue por completo

  // Simular el registro exitoso en pantalla
  mensajeExito.textContent = `¡Gracias por suscribirte con ${inputCorreo.value}! Revisa tu bandeja de entrada.`;
  mensajeExito.style.display = "block"; // Muestra el elemento con el mensaje

  formulario.reset(); // Limpia el input del correo
});

// --- JS PARA HISTORIA 4: Calculadora Interactiva ---
const selectServicio = document.getElementById("select-servicio");
const precioTotal = document.getElementById("precio-total");

selectServicio.addEventListener("change", function () {
  const costo = selectServicio.value; // Obtiene el "value" numérico de la opción seleccionada
  precioTotal.textContent = `$${costo}`; // Actualiza el texto en la interfaz
});

// --- JS PARA HISTORIA 5: Acordeón de FAQs ---
const preguntas = document.querySelectorAll(".faq-pregunta");

preguntas.forEach((pregunta) => {
  pregunta.addEventListener("click", () => {
    const itemPadre = pregunta.parentElement; // Encuentra el contenedor ".faq-item"

    // Cierra los otros acordeones abiertos para que solo uno esté activo a la vez
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== itemPadre) {
        item.classList.remove("activo");
      }
    });

    // Alterna la clase "activo" en el elemento actual al hacer clic
    itemPadre.classList.toggle("activo");
  });
});
