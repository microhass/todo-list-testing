
import {
    editTaskDescription,
    updateTaskCompletedStatus,
    clearCompletedTasks,
  } from '../src/modules/crud.js';
  
  
  import localStorageMock from '../src/mocks/localStorageMock';
  

  global.localStorage = localStorageMock;
  
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
  
    describe('editTaskDescription', () => {
      test('should update the task description', () => {
        const taskId = 1;
        const newDescription = 'Updated Task 1';
  
        
        editTaskDescription(taskId, newDescription);
  
        
        const updatedTasks = JSON.parse(localStorage.getItem('todos'));
  
        
        expect(updatedTasks[0].description).toBe(newDescription);
      });
    });
  
    describe('updateTaskCompletedStatus', () => {
      test('should update the task completed status', () => {
        const taskId = 1;
        const newCompletedStatus = true;
  
        
        updateTaskCompletedStatus(taskId, newCompletedStatus);
  
        
        const updatedTasks = JSON.parse(localStorage.getItem('todos'));
  
        
        expect(updatedTasks[0].completed).toBe(newCompletedStatus);
      });
    });
  
    describe('clearCompletedTasks', () => {
      test('should clear all completed tasks', () => {
        
        const tasks = [
          {
            index: 1,
            description: 'Task 1',
            completed: true,
          },
          {
            index: 2,
            description: 'Task 2',
            completed: false,
          },
          {
            index: 3,
            description: 'Task 3',
            completed: true,
          },
        ];
  
    
        localStorage.setItem('todos', JSON.stringify(tasks));
  
        
        clearCompletedTasks();
  
        
        const updatedTasks = JSON.parse(localStorage.getItem('todos'));
  
        
        const completedTasks = updatedTasks.filter((task) => task.completed);
        expect(completedTasks).toHaveLength(0);
      });
    });
  });
  