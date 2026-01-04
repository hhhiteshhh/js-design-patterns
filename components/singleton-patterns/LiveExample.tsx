"use client";
import { useState } from "react";
import TodoList from "./TodoList";
import todosInstance from "./Todos";

function LiveExample() {
  const [todos, setTodos] = useState(todosInstance.getTodos());
  return (
    <div className="flex justify-around">
      <div className="mt-4">
        <TodoList todos={todos} store={todosInstance} setTodos={setTodos} />
      </div>
      <div className="mt-4">
        <TodoList todos={todos} store={todosInstance} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default LiveExample;
