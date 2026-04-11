document.addEventListener("DOMContentLoaded", () => {
  const rotators = document.querySelectorAll(".rotator");

  rotators.forEach((rotator) => {
    const cases = Array.from(rotator.querySelectorAll(".rotator__case"));

    let currentIndex = cases.findIndex((el) =>
      el.classList.contains("rotator__case_active")
    );

    function nextCase() {
      cases[currentIndex].classList.remove("rotator__case_active");

      currentIndex = (currentIndex + 1) % cases.length;

      cases[currentIndex].classList.add("rotator__case_active");
    }

    setInterval(nextCase, 1000);
  });
});
