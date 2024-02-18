const e = document.getElementById("email");
const o = document.getElementById("discord");
const i = document.getElementById("button-copy-email");
const n = document.getElementById("button-copy-discord");

i?.addEventListener("click", () => {
  if (e) {
    navigator?.clipboard.writeText(e.value);
    let t = document.getElementById("tooltip-email");
    t.innerHTML = "Copiado";
  }
});

n?.addEventListener("click", () => {
  if (o) {
    navigator?.clipboard.writeText(o.value);
    let t = document.getElementById("tooltip-discord");
    t.innerHTML = "Copiado";
  }
});

i?.addEventListener("mouseleave", () => {
  let t = document.getElementById("tooltip-email");
  t.innerHTML = "Copiar";
});

n?.addEventListener("mouseleave", () => {
  let t = document.getElementById("tooltip-discord");
  t.innerHTML = "Copiar";
});
