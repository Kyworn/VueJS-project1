function addTodo() {
  var valueList = document.getElementById('todo-add').value;
  app7.todos.push({text: valueList});
  document.getElementById('todo-add').value = "";
}

var app7 = new Vue({
  el: '#app-7',
  data: {
    todos: [

    ]
  }
})
