function addTodo() {
  var valueList = document.getElementById('todo-add').value;
  todoList.todos.push({text: valueList});
  document.getElementById('todo-add').value = "";
}

var todoList = new Vue({
  el: '#todo-list',
  data: {
    todos: [

    ]
  }
})
