// Function to switch between pages
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show the selected page
    document.getElementById(pageId).classList.add('active');
}

// Reuse your Task Tracker code here
function addTask() {
    const input = document.getElementById('taskInput');
    if (input.value === '') return;
    
    const li = document.createElement('li');
    li.innerHTML = `${input.value} <button onclick="this.parentElement.remove()">X</button>`;
    document.getElementById('taskList').appendChild(li);
    input.value = '';
}
