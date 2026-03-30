const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const valueElement = dropdown.querySelector(".dropdown__value");
  const listElement = dropdown.querySelector(".dropdown__list");

  const toggleList = () => {
    listElement.classList.toggle("dropdown__list_active");
  };

  valueElement.addEventListener("click", toggleList);

  dropdown.addEventListener("click", (event) => {
    const target = event.target;

    if (target.closest(".dropdown__link")) {
      event.preventDefault();

      valueElement.textContent = target.textContent.trim();

      listElement.classList.remove("dropdown__list_active");
    }
  });
});
