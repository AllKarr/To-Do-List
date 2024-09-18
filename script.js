// Get elements
const taskInput = document.getElementById('taskInput');
const priorityInput = document.getElementById('priorityInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task event listener
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
  const taskValue = taskInput.value;
  const priorityValue = priorityInput.value;

  if (taskValue.trim() === '') {
    alert('Please enter a task.');
    return;
  }

  // Create new list item
  const li = document.createElement('li');
  li.classList.add(priorityValue);

  // Add task description and mark it as completed
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskValue;
  taskSpan.addEventListener('click', () => {
    taskSpan.classList.toggle('completed');
  });

  // Add delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  // Append task and delete button to the list item
  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);

  // Append the list item to the task list
  taskList.appendChild(li);

  // Clear the input field after adding the task
  taskInput.value = '';
}

// Function to sort tasks by priority (high > medium > low)
function sortTasks() {
  const tasksArray = Array.from(taskList.children);

  tasksArray.sort((a, b) => {
    const priorities = ['low', 'medium', 'high'];
    return priorities.indexOf(b.className) - priorities.indexOf(a.className);
  });

  // Clear the list and re-append the sorted tasks
  taskList.innerHTML = '';
  tasksArray.forEach(task => taskList.appendChild(task));
}

// Call sort function whenever a task is added
addTaskBtn.addEventListener('click', sortTasks);
