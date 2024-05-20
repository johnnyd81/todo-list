//required DOM variables
const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search");

//the function below is called to add a new todo to the DOM
const addHtml = (todo) => {
  let html = `
  <li
  class="list-group-item d-flex justify-content-between align-items-center"
>
  <span>${todo}</span>
  <button class="dltBtn delete btn btn-danger">Remove</button>
</li>
  `;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let todo = addForm.add.value.trim(); //trim method removes any whitespace after a todo is entered

  if (todo.length > 5 && todo.length < 65) {
    //sets a condition on the length of a todo
    addHtml(todo);
  } else {
    alert(
      "The todo has to be longer than 5 letters and shorter than 65 letters."
    );
  }

  addForm.reset(); //clears the input field after a todo is added
});

list.addEventListener("click", (e) => {
  //handler that removes a todo from the DOM
  if (e.target.nodeName === "BUTTON") {
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
  //filters todos to find matching letters and displays them
  Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", (e) => {
  e.preventDefault();

  const term = search.searchTerm.value.trim();

  filterTodos(term);
});
