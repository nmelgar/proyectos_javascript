// insert date
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth(); // Note: Months are zero-based (0 = January, 1 = February, etc.)
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

let actualDate = `${day}/${month}/${year}`;
console.log(actualDate);

let modifyDate = document.getElementById("currente-date");
modifyDate.textContent = actualDate;

function addTodo() {
  // parent for the todos (todo individual)
  let todosContainer = document.getElementById("todos-container");

  //container for individual to do
  let todoIndividual = document.createElement("div");
  todoIndividual.id = "todo-individual";

  // first child of individual to do
  let checkbokInput = document.createElement("input");
  checkbokInput.type = "checkbox";
  checkbokInput.id = "todo1";
  checkbokInput.name = "todo1";
  checkbokInput.value = "todo1";

  // second child of individual to do
  let checkbokLabel = document.createElement("label");
  checkbokLabel.textContent = "todo text";
  checkbokLabel.setAttribute("for", "todo1");

  // third child of individual to do
  let todoCategory = document.createElement("p");
  todoCategory.id = "todo-category";
  todoCategory.textContent = "category1";

  todosContainer.appendChild(todoIndividual);
  todoIndividual.appendChild(checkbokInput);
  todoIndividual.append(checkbokLabel);
  todoIndividual.appendChild(todoCategory);
}

addTodo();

