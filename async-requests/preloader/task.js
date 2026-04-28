document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const itemsContainer = document.getElementById("items");

  loader.classList.add("loader_active");

  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      const valute = data.response.Valute;
      let html = "";

      for (const key in valute) {
        const currency = valute[key];
        html += `
          <div class="item">
            <div class="item__code">${currency.CharCode}</div>
            <div class="item__value">${currency.Value}</div>
            <div class="item__currency">руб.</div>
          </div>
        `;
      }
      itemsContainer.innerHTML = html;
    } else {
      itemsContainer.innerHTML = "<p>Ошибка сервера: " + xhr.status + "</p>";
    }
  };

  xhr.onerror = function () {
    itemsContainer.innerHTML = "<p>Произошла ошибка при загрузке данных.</p>";
  };

  xhr.onloadend = function () {
    loader.classList.remove("loader_active");
  };

  xhr.open(
    "GET",
    "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
  );
  xhr.send();
});
