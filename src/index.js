import './style.css';

const list = document.getElementById('list');

const btn = document.getElementById('list-btn');
btn.addEventListener('click', taskManager);


function taskManager() {

    const input = document.createElement('input');
    input.id='task'
    input.type = 'text';

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add';

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';

    list.appendChild(input);
    list.appendChild(addBtn);
    list.appendChild(cancelBtn)

    addBtn.addEventListener('click', createTask);
    cancelBtn.addEventListener('click', removeTask);

    function createTask() {
        const task = document.createElement('div');
    
        const check = document.createElement('input');
        check.type = 'checkbox';
        task.appendChild(check);
    
        task.innerText = input.value;
    
        const deleteTask = document.createElement('button');
        deleteTask.textContent = "delete";
        task.appendChild(deleteTask);
    
        list.removeChild(input);
        list.removeChild(addBtn);
        list.removeChild(cancelBtn);
        list.appendChild(task);
    }
    

    function removeTask() {
        list.removeChild(input);
        list.removeChild(addBtn);
        list.removeChild(cancelBtn);
    };
}




