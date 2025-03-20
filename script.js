const tema = document.querySelector(".tema");
const temalight = document.querySelector(".tema-btn-light");
const temaDark = document.querySelector(".tema-btn-dark");
const tempo = document.querySelector(".tempo");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const reiniciar = document.querySelector(".reiniciar");
const linkGithub = document.querySelector(".link-github");
const linkLinkedin = document.querySelector(".link-linkedin");
const body = document.body;

tema.addEventListener("click", mudarTema);
iniciar.addEventListener("click", iniciarTempo);
pausar.addEventListener("click", pausarTempo);
reiniciar.addEventListener("click", reiniciarTempo);

let i = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    const segundos = i % 60;
    const minutos = Math.floor(i / 60) % 60;
    const horas = Math.floor(i / 3600);

    tempo.innerText = `${horas.toString().padStart(2, "0")}:${minutos
      .toString()
      .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
    i++;
  }, 1000);

  iniciar.setAttribute("disabled", "");
  pausar.removeAttribute("disabled", "");
  reiniciar.classList.add("hide");
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute("disabled", "");
  pausar.setAttribute("disabled", "");
  iniciar.innerText = "Continuar";
  reiniciar.classList.remove("hide");
}

function reiniciarTempo() {
  reiniciar.classList.toggle("hide");
  iniciar.innerText = "Iniciar";
  tempo.innerText = "00:00:00";
  i = 0;
}

function mudarTema() {
  body.classList.toggle("light-on-body");

  temaDark.classList.toggle("btn-light-on");
  temalight.classList.toggle("btn-dark-on");
  tempo.classList.toggle("light-on-time");
  tema.classList.toggle("ligth-on-btn-tema");
  iniciar.classList.toggle("light-on-iniciar");
  pausar.classList.toggle("light-on-pausar");
  reiniciar.classList.toggle("light-on-reiniciar");
  linkGithub.classList.toggle("link-github-ligth-on");
  linkLinkedin.classList.toggle("link-linkedin-ligth-on");
}

function ajustarTamanhoTempo() {
  const larguraTela = window.innerWidth;

  if (larguraTela <= 800) {
    tempo.style.fontSize = "80px";
  } else if (larguraTela <= 1200) {
    tempo.style.fontSize = "120px";
  } else {
    tempo.style.fontSize = "190px";
  }
}

window.addEventListener("resize", ajustarTamanhoTempo);

ajustarTamanhoTempo();
