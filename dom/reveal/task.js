document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  function checkReveal() {
    const windowHeight = window.innerHeight;

    reveals.forEach((reveal) => {
      const revealTop = reveal.getBoundingClientRect().top;

      if (revealTop - windowHeight < -150) {
        reveal.classList.add("reveal_active");
      }
    });
  }

  window.addEventListener("scroll", checkReveal);
  checkReveal();
});
