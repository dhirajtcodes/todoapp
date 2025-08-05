import React from "react";
import { ITodo } from "../../todo/TodoApp";
import TodoItem from "../todo-item/TodoItem";

const TodoList = ({
  todoList,
  handleDeleteTodo,
  filterValue,
  handleTaskComplete,
}: {
  todoList: ITodo[];
  handleDeleteTodo: (id: number) => void;
  filterValue: string;
  handleTaskComplete: (id: number) => void;
}) => {
  const filteredTodos = todoList?.filter((item) => {
    if (filterValue === "all") return true;
    if (filterValue === "completed") return item.completed;
    if (filterValue === "pending") return !item.completed;
  });
  return (
    <ul className="space-y-2 overflow-y-auto h-96">
      {filteredTodos?.length ? (
        filteredTodos.map((task) => (
          <div key={task.id}>
            <TodoItem
              task={task}
              deleteTodo={handleDeleteTodo}
              handleTaskComplete={handleTaskComplete}
            />
          </div>
        ))
      ) : (
        <div> Please add Todo List</div>
      )}
    </ul>
  );
};

export default TodoList;
