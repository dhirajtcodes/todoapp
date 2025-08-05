import React from "react";

const ClearTodo = ({ handleClearAll }: { handleClearAll: () => void }) => {
  return (
    <button
      onClick={handleClearAll}
      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded text-sm"
    >
      Clear All
    </button>
  );
};

export default ClearTodo;
