import {
  updateTask,
  deleteTasks,
  markCompleted,
} from '../src/modules/crud.js';

import localStorageMock from './mocks/localStorage.js';

global.LocalStorage = localStorageMock;

describe('Task Functions', () => {
  document.body.innerHTML = `
      <ul class="list">
        <li class="task" id="1">
          <input type="checkbox" name="check" id="check" />
          <form id="tasks">
            <input type="text" name="task" id="task" value="Task 1" />
          </form>
        </li>
      </ul>
    `;

  let tasks;
  beforeEach(() => {
    tasks = [
      {
        index: 1,
        description: 'Task 1',
        completed: false,
      },
      {
        index: 2,
        description: 'Task 2',
        completed: true,
      },
      {
        index: 3,
        description: 'Old description',
        completed: true,
      },
    ];
  });

  describe('editTaskDescription', () => {
    test('should update the task description', () => {
      const taskId = 3;
      const newDescription = 'Updated Task 1';
      const updatedTasks = updateTask(taskId, newDescription, tasks);
      expect(updatedTasks[2].description).toBe(newDescription);
    });
  });

  describe('updateTaskCompletedStatus', () => {
    test('should update the task completed status', () => {
      const taskId = 1;
      const updatedTasks = markCompleted(taskId, tasks);
      expect(updatedTasks[0].completed).toBe(true);
    });
  });

  describe('clearCompletedTasks', () => {
    test('should clear all completed tasks', () => {
      const unfinishedTasks = deleteTasks(tasks);
      expect(unfinishedTasks).toHaveLength(1);
    });
  });
});
