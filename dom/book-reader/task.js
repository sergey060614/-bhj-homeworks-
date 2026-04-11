document.addEventListener("DOMContentLoaded", function () {
  const fontSizeLinks = document.querySelectorAll(".font-size");
  const bookElement = document.getElementById("book");

  fontSizeLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      fontSizeLinks.forEach((lnk) => lnk.classList.remove("font-size_active"));

      this.classList.add("font-size_active");

      bookElement.classList.remove("book_fs-big", "book_fs-small");

      const size = this.getAttribute("data-size");
      if (size === "big") {
        bookElement.classList.add("book_fs-big");
      } else if (size === "small") {
        bookElement.classList.add("book_fs-small");
      }
    });
  });
});
