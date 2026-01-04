import TodoList from "./TodoList";

function LiveExample() {
  return (
    <div className="flex justify-around">
      <div className="mt-4">
        <TodoList />
      </div>
      <div className="mt-4">
        <TodoList />
      </div>
    </div>
  );
}

export default LiveExample;
