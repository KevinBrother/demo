define(function() {
  var todos = [];
  return {
    getTodos: function() {
      return todos;
    },
    addTodo: function(text) {
      if (text && text.trim()) {
        todos.push({ text: text.trim(), done: false });
      }
    },
    toggleTodo: function(index) {
      if (todos[index]) {
        todos[index].done = !todos[index].done;
      }
    }
  };
}); 