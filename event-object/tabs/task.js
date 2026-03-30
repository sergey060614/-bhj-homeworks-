const tabContainers = document.querySelectorAll(".tab__navigation");

tabContainers.forEach((container) => {
  const tabs = Array.from(container.querySelectorAll(".tab"));

  const tabContentsContainer = container.nextElementSibling;
  const contents = Array.from(
    tabContentsContainer.querySelectorAll(".tab__content")
  );

  container.addEventListener("click", (event) => {
    const clickedTab = event.target.closest(".tab");

    if (clickedTab) {
      const index = tabs.indexOf(clickedTab);

      tabs.forEach((tab) => tab.classList.remove("tab_active"));

      contents.forEach((content) =>
        content.classList.remove("tab__content_active")
      );

      tabs[index].classList.add("tab_active");
      contents[index].classList.add("tab__content_active");
    }
  });
});
