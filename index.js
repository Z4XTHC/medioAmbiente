// Obtener todos los elementos de audio con la clase "reproductor"
const reproductores = document.getElementsByClassName("reproductor");

// Función para reproducir el siguiente audio
function reproducirSiguiente() {
  // Obtener el elemento de audio actual
  const audioActual = this;

  // Verificar si se ha terminado la reproducción
  if (audioActual.currentTime >= audioActual.duration) {
    // Obtener el siguiente elemento de audio
    const siguiente = audioActual.nextElementSibling;
    if (siguiente !== null && siguiente.tagName === "AUDIO") {
      siguiente.play();
    }
  }
}

// Agregar el evento "timeupdate" a cada elemento de audio
for (let i = 0; i < reproductores.length; i++) {
  reproductores[i].addEventListener("timeupdate", reproducirSiguiente);
}

const toggleMenu = () => {
    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute('src');
    const iconName = src === 'assets/burger-menu.svg' ?
        'assets/close.svg'
        :
        'assets/burger-menu.svg';


    burgerMenu.setAttribute(
        'src',
        iconName
    );

    const navigation = document.querySelector('.navigation');

    navigation.classList.toggle(
        'navigation--mobile'
    );
};

// MODAL
// Get the modal
var modal = document.getElementById("acercaDe");
var overlay = document.getElementById("modalOverlay");

// Get the button that opens the modal
var btn = document.getElementById("btn_acercaDe");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  overlay.style.display = "block"; // Mostrar el overlay junto con el modal
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  overlay.style.display = "none"; // Ocultar el overlay cuando se cierra el modal
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    overlay.style.display = "none"; // Ocultar el overlay si se hace clic fuera del modal
  }
}