/**
 * video animacion
 */
// video.js
document.addEventListener("DOMContentLoaded", function () {
  const videoPlayers = document.querySelectorAll(".video-player");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function handleScroll() {
    videoPlayers.forEach(function (video) {
      const article = video.closest("article");

      if (isElementInViewport(article) && video.paused) {
        video.play();
      } else if (!isElementInViewport(article) && !video.paused) {
        video.pause();
      }
    });
  }

  function handleVideoEnded(event) {
    const video = event.target;
    video.currentTime = 0; // Reiniciar el video al principio
    video.play();
  }

  // Agregar eventos para reiniciar el video al finalizar su reproducción
  videoPlayers.forEach(function (video) {
    video.addEventListener("ended", handleVideoEnded);
  });

  // Agregar el evento scroll al documento
  document.addEventListener("scroll", handleScroll);

  // Detener la reproducción cuando el usuario navega fuera de la página
  window.addEventListener("beforeunload", function () {
    videoPlayers.forEach(function (video) {
      video.pause();
    });
  });
});











