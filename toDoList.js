const toDoList = document.querySelector('.toDoList');
const taskForm = document.querySelector('.taskForm');
const inputTask = document.getElementById('toDoInput');
const inputDeadline = document.getElementById('deadlineInput');

const insertTask = (task) => {
  toDoList.insertAdjacentHTML('beforeend', `
    <div class="taskBox">
        <div class="taskInfo">
            <div class="taskName">
                <h3>${task.task}</h3>
            </div>
            <div class="taskState">
                <button class="completedBtn" onclick="event.target.parentNode.parentNode.parentNode.remove()">&#10003;</button>
            </div>
        </div>
        <div class="taskDeadline">
            <p>Due on: ${task.deadline}</p>
        </div>
    </div>
  `);
}

const addTask = (event) => {
  event.preventDefault();
  const newTask = {
    task: inputTask.value,
    deadline: inputDeadline.value
  }
  insertTask(newTask);
  inputTask.value = '';
  inputDeadline.value = '';
}

taskForm.addEventListener('submit', (event) => addTask(event));

