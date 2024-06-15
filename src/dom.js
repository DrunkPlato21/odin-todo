export function renderProjects(projects) {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';
    projects.forEach(project => {
      const projectItem = document.createElement('div');
      projectItem.textContent = project.name;
      projectList.appendChild(projectItem);
    });
  }
  
  export function renderTodos(todos) {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach(todo => {
      const todoItem = document.createElement('div');
      todoItem.textContent = `${todo.title} - ${todo.dueDate}`;
      todoList.appendChild(todoItem);
    });
  }
  