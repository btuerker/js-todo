import TodoForm from './TodoForm'

export default function NewTodoButton(id) {
  const newTodoButton = document.createElement('button');
  newTodoButton.innerHTML = '+';
  newTodoButton.className = "new-todo-btn"
  newTodoButton.addEventListener('click', () => TodoForm(id));

  return newTodoButton;
}