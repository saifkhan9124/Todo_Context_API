import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./Context";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
// hello world
  const upDateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prev))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todos)=>));
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, upDateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todo List
          </h1>
          <div className="mb-4"></div>
          <div className="flex flex-wrap gap-y-3"></div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
