import React, { useState } from "react";

import { useTodo } from "../Context";

const TodoItem = ({ todo }) => {
  const [isTodoEditAble, setIsTodoEditAble] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { upDateTodo, deleteTodo, toggleCompleted } = useTodo;



  const editTodo=()=>{
    upDateTodo(todo.id,{...todo,todo:todoMsg})
    setIsTodoEditAble(false)
  }

  const t
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black `}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg`}
      />
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"></button>
    </div>
  );
};

export default TodoItem;
