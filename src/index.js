
import './style.css';

class Task {
  constructor(text, date) {
    this.text = text;
    this.date = date;
    this.completed = false;
  }

  toggleCompletion() {
    this.completed = !this.completed;
  }
}

class TaskManager {
  constructor() {
    this.taskArr = [];
    this.list = document.getElementById('list');
    this.btn = document.getElementById('list-btn');
    this.input = document.createElement('input');
    this.input.id = 'task';
    this.input.type = 'text';
    this.input.classList.add('input-field');

    this.addCancelDiv = document.createElement('div');
    this.createButtons();

    this.btn.addEventListener('click', () => this.addTaskInput());
  }

  createButtons() {
    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add';
    addBtn.classList.add('add-button');

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('cancel-button');

    addBtn.addEventListener('click', () => this.createTask());
    cancelBtn.addEventListener('click', () => this.removeTaskInput());

    this.addCancelDiv.appendChild(addBtn);
    this.addCancelDiv.appendChild(cancelBtn);
  }

  addTaskInput() {
    this.list.appendChild(this.input);
    this.list.appendChild(this.addCancelDiv);
  }

  removeTaskInput() {
    this.list.removeChild(this.input);
    this.list.removeChild(this.addCancelDiv);
  }

  createTask() {
    const taskText = this.input.value.trim();
    if (taskText) {
      const addDate = document.createElement('input');
      addDate.type = 'date';

      const task = new Task(taskText, addDate.value);

      this.taskArr.push(task);

      const taskDiv = document.createElement('div');
      taskDiv.classList.add('task-title');

      // Left Side: Checkbox and Task Title
      const leftSideTask = document.createElement('div');
      leftSideTask.style.display = 'flex';
      leftSideTask.style.alignItems = 'center';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.style.marginRight = '6px';
      checkbox.addEventListener('change', () => {
        task.toggleCompletion();
        this.updateTaskAppearance(task, taskDiv);
      });

      const taskTitle = document.createElement('div');
      taskTitle.innerText = task.text;

      leftSideTask.appendChild(checkbox);
      leftSideTask.appendChild(taskTitle);

      // Right Side: Date and Delete Button
      const rightSideTask = document.createElement('div');
      rightSideTask.style.display = 'flex';
      rightSideTask.style.alignItems = 'center';

      const deleteTask = document.createElement('button');
      deleteTask.textContent = 'Delete';
      deleteTask.style.marginRight = '6px';
      deleteTask.addEventListener('click', () => this.deleteTask(task, taskDiv));

      rightSideTask.appendChild(addDate);
      rightSideTask.appendChild(deleteTask);

      taskDiv.appendChild(leftSideTask);
      taskDiv.appendChild(rightSideTask);

      this.list.removeChild(this.input);
      this.list.removeChild(this.addCancelDiv);
      this.updateTaskAppearance(task, taskDiv);

      this.list.appendChild(taskDiv);

      this.input.value = '';
    }
}

  updateTaskAppearance(task, taskDiv) {
    if (task.completed) {
      taskDiv.style.textDecoration = 'line-through';
      taskDiv.style.color = 'lightgray';
    } else {
      taskDiv.style.textDecoration = 'none';
      taskDiv.style.color = 'black';
    }
  }

  deleteTask(task, taskDiv) {
    const index = this.taskArr.indexOf(task);
    if (index !== -1) {
      this.taskArr.splice(index, 1);
    }

    this.list.removeChild(taskDiv);
  }
}

const taskManager = new TaskManager();
