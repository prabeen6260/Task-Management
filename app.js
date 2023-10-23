$(document).ready(function () {
    const taskList = $('#taskList');
    const taskNameInput = $('#taskName');
    const addTaskButton = $('#addTaskButton');
    const prioritySelect = $('#priority');
    const dueDateInput = $('#dueDate');
    const labelsInput = $('#labels');
    const userAccountInfo = $('#userAccountInfo');
    const logoutButton = $('#logoutButton');

    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        userAccountInfo.text('Logged in as User123');
    } else {
        userAccountInfo.text('Not logged in');
    }

    addTaskButton.click(function () {
        const taskName = taskNameInput.val().trim();
        const priority = prioritySelect.val();
        const dueDate = dueDateInput.val();
        const labels = labelsInput.val().split(',');

        if (taskName === '') {
            alert('Please enter a task name.');
            return;
        }

        const taskItem = $('<li>').text(taskName);
        taskItem.addClass(priority + '-priority');
        if (dueDate) {
            taskItem.append(`<span class="due-date">Due: ${dueDate}</span>`);
        }

        // Add labels to the task
        if (labels.length > 0) {
            labels.forEach(label => {
                const labelSpan = $('<span class="label">').text(label.trim());
                taskItem.append(labelSpan);
            });
        }

        // Add Edit and Delete buttons
        const editButton = $('<button class="edit-button">Edit</button>');
        const deleteButton = $('<button class="delete-button">Delete</button>');

        editButton.click(function () {
            // Implement task editing logic here
            // You can allow users to edit task details.
        });

        deleteButton.click(function () {
            taskItem.remove(); // Remove the task from the list
        });

        taskItem.append(editButton, deleteButton);
        taskList.append(taskItem);

        taskNameInput.val('');
        prioritySelect.val('medium');
        dueDateInput.val('');
        labelsInput.val('');
    });

    // User logout functionality
    logoutButton.click(function () {
        localStorage.setItem('isLoggedIn', 'false');
        userAccountInfo.text('Not logged in');
    });
});
