import React from "react";
import { ITodo } from "../../todo/TodoApp";
import { FaTrash } from "react-icons/fa";

const TodoItem = ({
  // itemKey,
  task,
  deleteTodo: handleDeleteTodo,
  handleTaskComplete,
}: {
  task: ITodo;
  deleteTodo: (id: number) => void;
  handleTaskComplete: (id: number) => void;
}) => {
  return (
    <li className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded">
      <span
        className={`text-sm text-gray-700 ${task.completed && "line-through"}`}
      >
        {task.todo}
      </span>
      <div className="flex gap-2">
        <button
          type="button"
          title={!task.completed ? "Task Pending" : "Task Completed"}
          onClick={() => handleTaskComplete(task.id)}
          className={`${
            task.completed
              ? "bg-green-500 hover:bg-green-600"
              : "bg-yellow-300 hover:bg-green-600"
          }text-white  p-2 rounded cursor-pointer`}
        >
          {!task.completed ? "Pending" : "Completed"}
        </button>

        <button
          onClick={() => handleDeleteTodo(task.id)}
          className="text-white bg-red-500 hover:bg-red-600 p-2 rounded"
        >
          <FaTrash size={12} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
