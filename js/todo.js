const toDoFrom = document.getElementById("todo-form");
const toDoInput = toDoFrom.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos  = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.append(li);

}

function handleTodoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        "text": newTodo,
        "id": Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

toDoFrom.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
} 