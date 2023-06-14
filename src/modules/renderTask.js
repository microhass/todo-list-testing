const renderTask = (tasks) => {
  let taskListHTML = '';
  tasks.forEach((task) => {
    taskListHTML += `
    <li class='task' id=${task.index} draggable="true">
        <input type="checkbox" ${
  task.completed && 'checked'
} name="check" id="check" />
        <form id="tasks">
        <input
            type="text"
            name="task"
            id="task"
            value="${task.description}"
        />
        </form>
    </li>
`;
  });

  return taskListHTML;
};

export default renderTask;
