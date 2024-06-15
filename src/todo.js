export function createTodo(title, description, dueDate, priority) {
    return { title, description, dueDate, priority, completed: false };
  }
  
  export function toggleTodo(todo) {
    todo.completed = !todo.completed;
  }
  
  export function editTodo(todo, newDetails) {
    Object.assign(todo, newDetails);
  }
  
  export function deleteTodo(todos, todo) {
    const index = todos.indexOf(todo);
    if (index > -1) {
      todos.splice(index, 1);
    }
  }
  