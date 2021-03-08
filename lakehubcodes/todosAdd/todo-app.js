let todos = []; //object

const filters = {
  searchText: "",
  hideCompleted: false,
};

const todosJSON = localStorage.getItem("todos");

if (todosJSON !== null) {
  todos = JSON.parse(todosJSON);
}

const renderTodos = function (todosItem, filterData) {
  const filteredTodos = todosItem.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filterData.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });
 
  const inCompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed; 
  });

  document.getElementById("todos").innerHTML = "";

  const summary = document.createElement("h2");//heading two size
  summary.textContent = `You have ${inCompleteTodos.length} todos left`;//display our browser
  document.getElementById("todos").appendChild(summary)


  filteredTodos.forEach(function (todo) { //loop to displaying all todos
    const p = document.createElement("p"); //paragraph 
    p.textContent = todo.text;
    document.getElementById("todos").appendChild(p);//dispalying in our html
  });
};

renderTodos(todos, filters); //main line the life

document
  .getElementById("search-text")
  .addEventListener("input", function (event) {
    filters.searchText = event.target.value;
    renderTodos(todos, filters);
  });

  
document.getElementById("newtodo").addEventListener("submit", function (event) {
  event.preventDefault()
  todos.push({ //adding data to array
    text: event.target.elements.text.value,//getting value from the text form id
    completed: false,
  });
  localStorage.setItem("todos", JSON.stringify(todos));//temporary storage in Json form
  renderTodos(todos, filters);
  event.target.elements.text.value = "";
});


document
  .getElementById("hide-completed")
  .addEventListener("change", function (event) {//change a js function in the browser
    filters.hideCompleted = event.target.checked; //assign the value of hide complete according to the event at the is check..check the console to understand beter the event
    //is true when checked and false when unchecked
    console.log(event)
    renderTodos(todos, filters);
  });

  //message = `Hello, ${name}.`;