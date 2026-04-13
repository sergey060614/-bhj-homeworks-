document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".has-tooltip");

  links.forEach((link) => {
    const tooltipText = link.getAttribute("title");
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = tooltipText;
    link.parentNode.insertBefore(tooltip, link.nextSibling);
    link.removeAttribute("title");

    link.addEventListener("click", function (e) {
      e.preventDefault();
      tooltip.classList.toggle("tooltip_active");

      const { top, left, width } = link.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;

      tooltip.style.top = `${top + window.scrollY + link.offsetHeight}px`;
      tooltip.style.left = `${left + (width - tooltip.offsetWidth) / 2}px`;
    });
  });
});
