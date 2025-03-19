const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");
const reiniciar = document.querySelector(".reiniciar");

iniciar.addEventListener("click", iniciarTempo);
pausar.addEventListener("click", pausarTempo);
reiniciar.addEventListener("click", reiniciarTempo); //dbl -> dar dois cliques pra ocorrer

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
  }, 100);
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

function ajustarTamanhoTempo() {
  const larguraTela = window.innerWidth;

  if (larguraTela <= 800) {
    tempo.style.fontSize = "80px";
  } else if (larguraTela <= 1200) {
    tempo.style.fontSize = "120px";
  } else {
    tempo.style.fontSize = "250px";
  }
}

window.addEventListener("resize", ajustarTamanhoTempo);

ajustarTamanhoTempo();
