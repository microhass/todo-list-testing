import renderTask from '../src/modules/renderTask.js';

describe('App can render tasks', () => {
  const tasks = [
    {
      index: 1,
      description: 'Complete testing',
      completed: false,
    },
  ];

  test('Add one new item to the list', () => {
    document.body.innerHTML = '<div>'
      + '  <ul class="list"><li></li><div></div></ul>'
      + '</div>';
    renderTask(tasks);
    const list = document.querySelectorAll('.list li');
    expect(list).toHaveLength(1);
  });
});
