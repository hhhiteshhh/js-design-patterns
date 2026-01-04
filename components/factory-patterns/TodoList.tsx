import { Dispatch, SetStateAction } from "react";
import { Todo, TodosStoreType } from "./Todos";

const TodoList = ({
  todos,
  setTodos,
  store,
}: {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  store: TodosStoreType;
}) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li
            className="rounded-sm text-sm w-full bg-slate-100 p-1.5 ring-0 ring-gray-800 mb-2"
            key={index}
            onClick={() => {
              todo.deleteSelf();
              setTodos([...store.getTodos()]);
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <div>
        <button
          className="mt-4 rounded-md hover:bg-gray-700 text-white px-3 py-1 shadow-md bg-blue-400"
          onClick={() => {
            store.addTodo("Test Todo " + (Math.random() * 300).toFixed());
            setTodos([...store.getTodos()]);
            console.log(store.getTodos());
          }}
        >
          Add Todo!
        </button>
      </div>
    </div>
  );
};

export default TodoList;
