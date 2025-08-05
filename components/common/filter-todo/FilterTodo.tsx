import React from "react";

const FilterTodo = ({
  handleFilterTodo,
}: {
  handleFilterTodo: (_item: string) => void;
  todo: string[];
}) => {
  return (
    <div className="mb-3">
      <select
        onChange={(e) => handleFilterTodo(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};

export default FilterTodo;
