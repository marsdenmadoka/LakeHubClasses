const todos = [
  {
    text: "Buy house",
    completed: false,
  },
  {
    text: "Go shopping",
    completed: true,
  },
  {
    text: "Design interiors",
    completed: true,
  },
  {
    text: "Go to the music store",
    completed: false,
  },
  {
    text: "Go to gym",
    completed: true,
  },
];

const filters = {
  searchText: "",
};

const renderTodos = function (todosItem, filterData) {
  const filteredTodos = todosItem.filter(function (todo) {
    return todo.text
      .toLowerCase()
      .includes(filterData.searchText.toLowerCase());
  });

  const inCompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.getElementById("todos").innerHTML = "";

  const summary = document.createElement("h2");
  summary.textContent = `You have ${inCompleteTodos.length} todos left`;
  document.getElementById("todos").appendChild(summary);

  filteredTodos.forEach(function (todo) {
    const p = document.createElement("p");
    p.textContent = todo.text;
    document.getElementById("todos").appendChild(p);
  });
};

renderTodos(todos, filters);

document
  .getElementById("search-text")
  .addEventListener("input", function (event) {
    filters.searchText = event.target.value;
    renderTodos(todos, filters);
  });
