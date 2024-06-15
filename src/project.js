export function createProject(name) {
    return { name, todos: [] };
  }
  
  export function addTodoToProject(project, todo) {
    project.todos.push(todo);
  }
  
  export function getProjectTodos(project) {
    return project.todos;
  }
  