import { createTodo } from './todo';
import { createProject, addTodoToProject, getProjectTodos } from './project';

// Function to render the list of projects
// Takes an array of projects and displays them in the project list section
export function renderProjects(projects) {
  const projectList = document.getElementById('project-list');
  projectList.innerHTML = ''; // Clear the current list
  projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.textContent = project.name; // Display the project name
    projectItem.addEventListener('click', () => {
      renderTodos(getProjectTodos(project)); // Display todos for the clicked project
      currentProject = project; // Set the current project
    });
    projectList.appendChild(projectItem); // Add the project item to the list
  });
}

// Function to render the list of todos
// Takes an array of todos and displays them in the todo list section
export function renderTodos(todos) {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = ''; // Clear the current list
  todos.forEach(todo => {
    const todoItem = document.createElement('div');
    todoItem.textContent = `${todo.title} - ${todo.dueDate}`; // Display the todo title and due date
    todoList.appendChild(todoItem); // Add the todo item to the list
  });
}

let currentProject = null; // Variable to keep track of the currently selected project

// Event listener for the project creation form
// Listens for the form submission, creates a new project, and updates the project list
document.getElementById('project-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  const projectName = document.getElementById('project-name').value; // Get the project name from the input
  if (projectName) {
    const newProject = createProject(projectName); // Create a new project with the given name
    window.projects.push(newProject); // Add the new project to the global projects array
    renderProjects(window.projects); // Re-render the project list to include the new project
  }
});

// Event listener for the todo creation form
// Listens for the form submission, creates a new todo, and updates the todo list for the current project
document.getElementById('todo-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  if (currentProject) {
    // Get the todo details from the input fields
    const title = document.getElementById('todo-title').value;
    const description = document.getElementById('todo-description').value;
    const dueDate = document.getElementById('todo-due-date').value;
    const priority = document.getElementById('todo-priority').value;

    // Create a new todo with the given details
    const newTodo = createTodo(title, description, dueDate, priority);

    // Add the new todo to the current project
    addTodoToProject(currentProject, newTodo);

    // Re-render the todo list to include the new todo
    renderTodos(getProjectTodos(currentProject));
  } else {
    alert('Please select a project first.'); // Alert the user if no project is selected
  }
});
