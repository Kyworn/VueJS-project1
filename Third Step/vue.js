function addTodo() {
  var valueList = document.getElementById('todo-add').value;
  if (valueList !== ""){
    todoList.todos.push({text: valueList});
    valueList = "";
  }
}

function deleteTodo() {
  var valueList = document.getElementById('todo-delete').value;
  if (valueList !== ""){
    Vue.delete(todoList.todos, valueList - 1);
    valueList = "";
  }
}

var todoList = new Vue({
  el: '#todo-list',
  data: {
    todos: []
  }
})
