import React from "react";
import { FaPlus } from "react-icons/fa";

const AddTodo = ({
  inputRef,
  handleAddTodo,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inputRef: any;
  handleAddTodo: () => void;
}) => {
  return (
    <div className="flex mb-4">
      <input
        type="text"
        placeholder="Add your new todo"
        className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none"
        ref={inputRef}
      />
      <button
        onClick={handleAddTodo}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-md"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default AddTodo;
