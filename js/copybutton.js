const emailTeams = document.getElementById("teams-email");
const emailContacto = document.getElementById("email");
const buttonCopyTeams = document.getElementById("button-copy-teams");
const buttonCopyEmail = document.getElementById("button-copy-email");

buttonCopyTeams?.addEventListener("click", () => {
  if (emailTeams) {
    navigator?.clipboard.writeText(emailTeams.value);
    let tooltipTeams = document.getElementById("tooltip-teams");
    tooltipTeams.innerHTML = "Copiado";
  }
});

buttonCopyEmail?.addEventListener("click", () => {
  if (emailContacto) {
    navigator?.clipboard.writeText(emailContacto.value);
    let tooltipEmail = document.getElementById("tooltip-email");
    tooltipEmail.innerHTML = "Copiado";
  }
});

buttonCopyTeams?.addEventListener("mouseleave", () => {
  let tooltipTeams = document.getElementById("tooltip-teams");
  tooltipTeams.innerHTML = "Copiar";
});

buttonCopyEmail?.addEventListener("mouseleave", () => {
  let tooltipEmail = document.getElementById("tooltip-email");
  tooltipEmail.innerHTML = "Copiar email";
});
