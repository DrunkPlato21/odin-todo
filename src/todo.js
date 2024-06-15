// Function to create a new todo
// Takes a title, description, due date, and priority, and returns a todo object
export function createTodo(title, description, dueDate, priority) {
  return { title, description, dueDate, priority, completed: false };
}

// Function to toggle the completion status of a todo
// Takes a todo and toggles its completed property
export function toggleTodo(todo) {
  todo.completed = !todo.completed;
}

// Function to edit the details of a todo
// Takes a todo and an object with the new details, and updates the todo
export function editTodo(todo, newDetails) {
  Object.assign(todo, newDetails);
}

// Function to delete a todo from a list of todos
// Takes an array of todos and a todo, and removes the todo from the array
export function deleteTodo(todos, todo) {
  const index = todos.indexOf(todo);
  if (index > -1) {
    todos.splice(index, 1);
  }
}
