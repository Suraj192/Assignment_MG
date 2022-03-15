const form = document.querySelector("#form");
const task = document.querySelector("#task");
const note = document.querySelector("#note");
const container = document.querySelector(".container");

const todoList = (event) => {
  event.preventDefault();
  const todo = task.value;
  const description = note.value;
  if (!todo) {
    alert("please fill out the task");
    return;
  }
  const cards = document.createElement("div");
  cards.classList.add("card");
  const todo_el = document.createElement("div");
  todo_el.classList.add("todo");
  const title = document.createElement("h3");
  title.textContent = todo;
  const para = document.createElement("p");
  para.textContent = description;
  const checkboxs = document.createElement("INPUT");
  checkboxs.setAttribute("type", "checkbox");
  checkboxs.setAttribute("id", "checkbox");

  container.appendChild(cards);
  cards.appendChild(todo_el);
  todo_el.appendChild(title);
  todo_el.appendChild(para);
  todo_el.appendChild(checkboxs);

  const button = document.createElement("BUTTON");
  button.setAttribute("id", "del");
  button.textContent = "X";
  todo_el.appendChild(button);

  button.addEventListener("click", () => {
    container.removeChild(cards);
  });
  task.value = "";
  note.value = "";
};

form.addEventListener("submit", todoList);
