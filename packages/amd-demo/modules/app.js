define(['todo', 'dom', 'jquery'], function(todo, dom, $) {
  return {
    init: function() {
      var appEl = document.getElementById('todo-app');
      $('h1').css('color', '#1976d2');
      dom.render(appEl, todo.getTodos());
      dom.bindAdd(function(text) {
        todo.addTodo(text);
        dom.render(appEl, todo.getTodos());
      });
      dom.bindToggle(function(index) {
        todo.toggleTodo(index);
        dom.render(appEl, todo.getTodos());
      });
    }
  };
}); 