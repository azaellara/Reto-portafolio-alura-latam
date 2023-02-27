// Obtén el formulario y los campos de entrada
const form = document.querySelector('#form');
const nombreInput = document.querySelector('#nombre');
const errorNombre = document.getElementById("error-nombre");
const correoInput = document.querySelector('#correo');
const errorcorreo = document.getElementById("error-correo");
const asuntoInput = document.querySelector('#asunto');
const errorasunto = document.getElementById("error-asunto");
const mensajeInput = document.querySelector('#mensaje');
const errormensaje = document.getElementById("error-mensaje");

// Agrega un controlador de eventos para el envío del formulario
form.addEventListener('submit', (e) => {
  // Verifica que los campos de entrada sean válidos antes de enviar el formulario
  if (!validarNombre() || !validarCorreo() || !validarAsunto() || !validarMensaje()) {
    e.preventDefault(); // Detiene el envío del formulario si hay errores
  }
});

function validarNombre() {
  const nombre = nombreInput.value.trim();
  if (nombre === '') {
    mostrarError(nombreInput, 'Debes ingresar un nombre.');
    return false;
  } else {
    mostrarExito(nombreInput);
    return true;
  }
}

function validarCorreo() {
  const correo = correoInput.value.trim();
  if (correo === '') {
    mostrarError(correoInput, 'Debes ingresar un correo electrónico.');
    return false;
  } else if (!esCorreoValido(correo)) {
    mostrarError(correoInput, 'Debes ingresar un correo electrónico válido.');
    return false;
  } else {
    mostrarExito(correoInput);
    return true;
  }
}

function esCorreoValido(correo) {
  // Utiliza una expresión regular para verificar que el correo electrónico tenga un formato válido
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo);
}

function validarAsunto() {
  const asunto = asuntoInput.value.trim();
  if (asunto === '') {
    mostrarError(asuntoInput, 'Debes ingresar un asunto.');
    return false;
  } else {
    mostrarExito(asuntoInput);
    return true;
  }
}

function validarMensaje() {
  const mensaje = mensajeInput.value.trim();
  if (mensaje === '') {
    mostrarError(mensajeInput, 'Debes ingresar un mensaje.');
    return false;
  } else {
    mostrarExito(mensajeInput);
    return true;
  }
}

function mostrarError(input, mensaje) {
  // Agrega la clase "error" al campo de entrada y muestra el mensaje de error
  const errorMensaje = input.nextElementSibling;
  input.classList.add('error');
  errorMensaje.innerText = mensaje;
  errorMensaje.style.visibility = 'visible';
}

function mostrarExito(input) {
  // Elimina la clase "error" del campo de entrada y oculta cualquier mensaje de error
  const errorMensaje = input.nextElementSibling;
  input.classList.remove('error');
  errorMensaje.innerText = '';
  errorMensaje.style.visibility = 'hidden';
}
