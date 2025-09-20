// Contraseña y teclado
const correctPassword = "1803";
const display = document.getElementById("inputDisplay");
let input = "";

function enterDigit(digit) {
  if (input.length < 4) {
    input += digit;
    updateDisplay();
    if (input.length === 4) {
      if (input === correctPassword) {
        window.location.href = "flores-amarillas.html";
      } else {
        setTimeout(() => {
          alert("Contraseña incorrecta, intenta de nuevo");
          input = "";
          updateDisplay();
        }, 100);
      }
    }
  }
}

function deleteDigit() {
  if (input.length > 0) {
    input = input.slice(0, -1);
    updateDisplay();
  }
}

function updateDisplay() {
  if (!display) return;
  if (input.length === 0) {
    display.textContent = "••••";
  } else {
    display.textContent = input.padEnd(4, "•");
  }
}

// Botón principal: reproduce audio
const flowerBtn = document.querySelector(".flower-btn");
const audio = document.getElementById("id_audio");
if (flowerBtn && audio) {
  flowerBtn.onclick = () => {
    audio.play();
    audio.volume = 0.5;
  };
}

// Lluvia de flores
function lluviaDeFlores() {
  const cantidad = 200;
  for (let i = 0; i < cantidad; i++) {
    setTimeout(() => {
      crearFlorLluvia();
    }, i * 120);
  }
}

function crearFlorLluvia() {
  const flor = document.createElement("img");
  flor.src = "icono.png";
  flor.className = "flor-lluvia";
  flor.style.left = Math.random() * 100 + "vw";
  flor.style.animationDuration = 2 + Math.random() * 2 + "s";
  flor.style.position = "fixed";
  flor.style.top = "-60px";
  flor.style.zIndex = 9999;

  document.body.appendChild(flor);

  flor.addEventListener("animationend", () => {
    flor.remove();
  });
}

// --- Modal del botón MARIA ---
const btnMaria = document.querySelector('.flower-maria');
const modal = document.getElementById('ventanita');
const closeModalBtn = document.getElementById('cerrar-ventanita');

// Abrir modal y lluvia de flores al presionar MARIA
if (btnMaria && modal) {
  btnMaria.addEventListener('click', () => {
    lluviaDeFlores();
    modal.style.display = 'flex'; // Centrado si usas flex en CSS
  });
}

// Cerrar modal al presionar la X
if (closeModalBtn && modal) {
  closeModalBtn.onclick = function () {
    modal.style.display = 'none';
  };
}

// Cerrar modal al hacer clic fuera del contenido (en el overlay)
if (modal) {
  modal.addEventListener('click', function (event) {
    // Solo cierra si el clic fue en el overlay, NO en el contenido del modal
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}