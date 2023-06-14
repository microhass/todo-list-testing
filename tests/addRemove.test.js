
import { addItem, deleteItem } from './modules/crud.js';

jest.mock('./modules/storage.js');


describe('CRUD Functions', () => {
  // 
  describe('addItem', () => {
    it('should add an item to the list', () => {
      
      const listContainer = document.createElement('div');
      listContainer.innerHTML = `
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      `;

      
      addItem('Item 3', listContainer);

      
      const itemList = listContainer.querySelectorAll('li');
      expect(itemList.length).toBe(3);
      expect(itemList[2].textContent).toBe('Item 3');
    });
  });

  
  describe('deleteItem', () => {
    it('should delete an item from the list', () => {
      
      const listContainer = document.createElement('div');
      listContainer.innerHTML = `
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      `;

      
      deleteItem(2, listContainer);

      
      const itemList = listContainer.querySelectorAll('li');
      expect(itemList.length).toBe(2);
      expect(itemList[0].textContent).toBe('Item 1');
      expect(itemList[1].textContent).toBe('Item 3');
    });
  });
});
