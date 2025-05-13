define(function() {
  function render(container, todos) {
    container.innerHTML = `
      <input id="todo-input" type="text" placeholder="添加新任务..." />
      <button id="add-btn">添加</button>
      <ul>
        ${todos.map((todo, i) => `
          <li data-index="${i}" style="cursor:pointer;${todo.done ? 'text-decoration:line-through;' : ''}">
            ${todo.text}
          </li>
        `).join('')}
      </ul>
    `;
  }

  function bindAdd(callback) {
    document.addEventListener('click', function(e) {
      if (e.target && e.target.id === 'add-btn') {
        var input = document.getElementById('todo-input');
        if (input && input.value) {
          callback(input.value);
          input.value = '';
        }
      }
    });
  }

  function bindToggle(callback) {
    document.addEventListener('click', function(e) {
      if (e.target && e.target.tagName === 'LI' && e.target.parentNode.tagName === 'UL') {
        var idx = e.target.getAttribute('data-index');
        if (idx !== null) {
          callback(Number(idx));
        }
      }
    });
  }

  return {
    render: render,
    bindAdd: bindAdd,
    bindToggle: bindToggle
  };
}); 