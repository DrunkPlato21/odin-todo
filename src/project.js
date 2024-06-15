// Function to create a new project
// Takes a project name and returns a project object with an empty todos array
export function createProject(name) {
  return { name, todos: [] };
}

// Function to add a todo to a project
// Takes a project and a todo, and adds the todo to the project's todos array
export function addTodoToProject(project, todo) {
  project.todos.push(todo);
}

// Function to get all todos from a project
// Takes a project and returns its todos array
export function getProjectTodos(project) {
  return project.todos;
}
