document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("tasks__form");
  const input = document.getElementById("task__input");
  const addButton = document.getElementById("tasks__add");
  const listContainer = document.getElementById("tasks__list");

  function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
      return;
    }

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    // Создаем блок для текста задачи
    const titleElement = document.createElement("div");
    titleElement.classList.add("task__title");
    titleElement.textContent = taskText;

    const removeLink = document.createElement("a");
    removeLink.classList.add("task__remove");
    removeLink.href = "#";
    removeLink.textContent = "×";

    taskElement.appendChild(titleElement);
    taskElement.appendChild(removeLink);

    listContainer.appendChild(taskElement);

    removeLink.addEventListener("click", function (e) {
      e.preventDefault();
      listContainer.removeChild(taskElement);
    });

    input.value = "";
  }

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });

  if (addButton) {
    addButton.addEventListener("click", function (e) {
      e.preventDefault();
      addTask();
    });
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      addTask();
    });
  }
});
