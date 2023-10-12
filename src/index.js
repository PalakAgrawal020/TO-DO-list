import './style.css';

const list = document.getElementById('list');

const btn = document.getElementById('list-btn');
btn.addEventListener('click', taskManager);


function taskManager() {

    const input = document.createElement('input');
    input.id='task'
    input.type = 'text';
    input.classList.add('input-field');

    const AddCancelDiv = document.createElement('div');

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add';
    addBtn.classList.add('add-button');

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('cancel-button');

    AddCancelDiv.appendChild(addBtn);
    AddCancelDiv.appendChild(cancelBtn)

    list.appendChild(input);
    list.appendChild(AddCancelDiv);

    addBtn.addEventListener('click', createTask);
    cancelBtn.addEventListener('click', removeTask);

    function createTask() {
        const task = document.createElement('div');
        task.classList.add('task-title');

        const leftSideTask = document.createElement('div');
        leftSideTask.innerText = input.value;

        const rightSideTask = document.createElement('div');
        const check = document.createElement('input');
        check.type = 'checkbox';
        check.addEventListener('change', function() {
            if (check.checked) {
                task.style.textDecoration = 'line-through';
                task.style.color = 'lightgray';
            } else {
                task.style.textDecoration = 'none';
                task.style.color = 'black';
            }
        });
        rightSideTask.appendChild(check);
        

        const addDate = document.createElement('input');
        addDate.type = 'date';
        rightSideTask.appendChild(addDate);
    
        const deleteTask = document.createElement('button');
        deleteTask.textContent = "delete";
        deleteTask.addEventListener('click', () => {
            task.remove();
        })
        rightSideTask.appendChild(deleteTask);

        task.appendChild(leftSideTask);
        task.appendChild(rightSideTask);
    
        list.removeChild(input);
        list.removeChild(AddCancelDiv);
        list.appendChild(task);
    }
    

    function removeTask() {
        list.removeChild(input);
        list.removeChild(AddCancelDiv);
    };
}




