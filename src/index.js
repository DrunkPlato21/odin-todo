import './style.css';
import { format } from 'date-fns';
import { createTodo, toggleTodo, editTodo, deleteTodo } from './todo';
import { createProject, addTodoToProject, getProjectTodos } from './project';
import { renderProjects, renderTodos } from './dom';

// Default project setup
const defaultProject = createProject('Default Project');
renderProjects([defaultProject]);

// Example Todo
const exampleTodo = createTodo('Example Todo', 'This is a test todo', '2024-06-14', 'High');
addTodoToProject(defaultProject, exampleTodo);
renderTodos(getProjectTodos(defaultProject));
