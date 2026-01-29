function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value;

    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    `;

    document.getElementById('taskList').appendChild(li);
    input.value = ''; // Clear input after adding
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}
