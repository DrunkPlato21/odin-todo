import './style.css';
import { createTodo } from './todo';
import { createProject, addTodoToProject, getProjectTodos } from './project';
import { renderProjects, renderTodos } from './dom';

// Global state to store all projects
const projects = [];

// Create a default project
const defaultProject = createProject('Default Project');
projects.push(defaultProject); // Add the default project to the global projects array

// Render the initial list of projects
renderProjects(projects);

// Create an example todo and add it to the default project
const exampleTodo = createTodo('Example Todo', 'This is a test todo', '2024-06-14', 'High');
addTodoToProject(defaultProject, exampleTodo);

// Render the todos for the default project
renderTodos(getProjectTodos(defaultProject));

// Make the projects array accessible globally (for now)
window.projects = projects;
