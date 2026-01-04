export interface Todo {
  id: Date;
  text: string;
  deleteSelf: () => void;
}
export interface TodosStoreType {
  getTodos: () => Todo[];
  addTodo: (todoText: string) => void;
}

const todos: Todo[] = [];

const createTodos = (text: string) => {
  const id = new Date();
  return {
    id,
    text,
    deleteSelf() {
      const index = todos.findIndex((item) => {
        return item.id === id;
      });
      todos.splice(index, 1);
    },
  };
};
const TodoStore = {
  getTodos() {
    return todos;
  },
  addTodo(text: string) {
    todos.push(createTodos(text));
  },
};

Object.freeze(TodoStore);

export default TodoStore;
