const form = document.querySelector("#form");
const task = document.querySelector("#task");
const note = document.querySelector("#note");
const container = document.querySelector(".container");

const consoleFunction = () => {
  console.log(form);
  console.log(task.value);
};

consoleFunction();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const todo = task.value;
  const description = note.value;
  if (!todo) {
    alert("please fill out the task");
    return;
  }
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="parent"><div class="card">
      <div class="todo">
        <h3>${todo}</h3>
        <p>${description}</p>
      </div>
      <div>
        <input type="checkbox" name="checkbox" id="checkbox" />
      </div>
    </div></div>`
  );
  // const deleteCards = document.querySelectorAll("#delete");
  // deleteCards.forEach((deletecard) => {
  //   deletecard.addEventListener("click", (event) => {
  //     document.querySelector(".card").remove();
  //   });
  // });
});
