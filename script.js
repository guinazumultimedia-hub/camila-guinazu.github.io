// =============================
// ANIMACIÓN FONDO
// =============================

const canvasBg = document.getElementById("bg");

if (canvasBg) {

  const ctxBg = canvasBg.getContext("2d");

  function resizeBg() {
    canvasBg.width = window.innerWidth;
    canvasBg.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeBg);
  resizeBg();

  function drawBackground() {

    ctxBg.clearRect(0, 0, canvasBg.width, canvasBg.height);

    const gradient = ctxBg.createLinearGradient(0, 0, canvasBg.width, canvasBg.height);
    gradient.addColorStop(0, "#12317b");
    gradient.addColorStop(1, "#63B980");

    ctxBg.strokeStyle = gradient;
    ctxBg.lineWidth = 2;
    ctxBg.globalAlpha = 0.35;

    for (let i = 0; i < 70; i++) {

      ctxBg.beginPath();

      for (let x = 0; x < canvasBg.width; x++) {

        let y =
          canvasBg.height / 2 +
          Math.sin(x * 0.002 + Date.now() * 0.00015 + i * 0.25) * 120 +
          Math.sin(i * 0.4 + Date.now() * 0.0002) * 60 +
          i * 12 - 250;

        if (x === 0) ctxBg.moveTo(x, y);
        else ctxBg.lineTo(x, y);

      }

      ctxBg.stroke();
    }

    requestAnimationFrame(drawBackground);
  }

  drawBackground();

}


// =============================
// MENU HAMBURGUESA
// =============================

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    toggle.classList.remove("active");
  });
});


// =============================
// ANIMACIÓN SOBRE MI
// =============================

const texto = document.querySelector(".texto-inicio");
const foto = document.querySelector(".foto-inicio");
const sobreContenido = document.querySelector(".sobre-contenido");

if (texto && foto && sobreContenido) {

  const observerSobreMi = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        texto.classList.add("visible");
        foto.classList.add("visible");
      }

    });

  });

  observerSobreMi.observe(sobreContenido);

}


// =============================
// PROGRAMAS
// =============================

const programas = document.querySelectorAll(".logo-item");
const tituloProgramas = document.querySelector(".titulo-programas");

if (programas.length > 0 && tituloProgramas) {

  const observerProgramas = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        programas.forEach(logo => {
          logo.classList.add("visible");
        });

      }

    });

  });

  observerProgramas.observe(tituloProgramas);

}


// =============================
// PROYECTOS
// =============================

const items = document.querySelectorAll(".item");
const preview = document.getElementById("preview-img");

if (items.length > 0 && preview) {

  items.forEach(item => {

    item.addEventListener("mouseenter", () => {

      const img = item.getAttribute("data-img");

      preview.src = img;
      preview.style.opacity = 1;

    });

    item.addEventListener("mouseleave", () => {

      preview.style.opacity = 0;

    });

  });

}


// =============================
// FORMULARIO
// =============================

const form = document.querySelector(".form-contacto");
const mensaje = document.getElementById("mensaje-exito");

if (form && mensaje) {

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    const data = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: data
    })
      .then(() => {

        mensaje.style.display = "block";
        mensaje.style.opacity = "1";

        form.reset();

      })
      .catch(() => {
        alert("Hubo un error al enviar el mensaje.");
      });

  });

}