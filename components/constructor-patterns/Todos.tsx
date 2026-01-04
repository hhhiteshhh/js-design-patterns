class Todos {
  todos: string[] = [];
  constructor() {}
  getTodos() {
    return this.todos;
  }
  addTodo(todoText: string) {
    this.todos.push(todoText);
  }
}

// function Todos() {
//   this.todos = [];
//   // this.getTodos = function () {
//   //   return this.todos;
//   // };
//   // this.addTodo = function (todoText) {
//   //   this.todos.push(todoText);
//   // };
// }

// Todos.prototype.getTodos = function () {
//   return this.todos;
// };

// Todos.prototype.addTodo = function (todoText) {
//   this.todos.push(todoText);
// };

export default Todos;
