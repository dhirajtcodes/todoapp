"use client";
import React, { useEffect, useRef, useState } from "react";
import TodoList from "../common/todo-list/TodoList";
import AddTodo from "../common/add-todo/AddTodo";
import ClearTodo from "../common/clear-todo/ClearTodo";
import FilterTodo from "../common/filter-todo/FilterTodo";
import { getLocalStorage, setLocalStorage } from "../../utils/localstorage";

export interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

const TodoApp: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<string[]>([]);
  const [filterValue, setFilterValue] = useState<string>("all");

  /** Fetch Todo List */
  const fetchTodoData = async () => {
    const localData = getLocalStorage("todoList");

    if (localData && localData.length) {
      setTodoList(localData);
      setFilter(localData.map((item: ITodo) => item.todo));
      return;
    }

    const response = await fetch("https://dummyjson.com/todos");
    const data = await response.json();
    setTodoList(data.todos);
    setFilter(data.todos.map((item: ITodo) => item.todo));
    setLocalStorage("todoList", data.todos);
  };

  useEffect(() => {
    fetchTodoData();
  }, []);

  useEffect(() => {
    setLocalStorage("todoList", todoList);
  }, [todoList]);

  const handleAddTodo = () => {
    const inputValue = inputRef.current && inputRef.current.value;
    if (!inputValue?.length) {
      alert("Please add some task");
      return;
    }
    setTodoList((prev) => [
      {
        id: Math.random() * 5 * 5,
        todo: inputValue,
        completed: false,
        userId: Math.floor(Math.random() * 10 * 10),
      },
      ...prev,
    ]);
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    const isConfirmed =
      window && window.confirm("Are you sure you want to delete?");

    if (isConfirmed) {
      setTodoList([]);
    } else {
      console.log("Canceled");
    }
  };

  const handleFilterTodo = (item: string) => {
    setFilterValue(item);
    if (item === "all") {
      fetchTodoData();
      return;
    }
  };

  const handleTaskComplete = (id: number) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  return (
    <div className="w-1/2 p-5  mx-auto mt-10 h-1/2">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Todo App</h1>

      <FilterTodo handleFilterTodo={handleFilterTodo} todo={filter} />
      <AddTodo inputRef={inputRef} handleAddTodo={handleAddTodo} />
      <TodoList
        todoList={todoList}
        handleDeleteTodo={handleDeleteTodo}
        filterValue={filterValue}
        handleTaskComplete={handleTaskComplete}
      />
      <div className="mt-5 flex justify-between items-center text-sm text-gray-600">
        <span>You have {todoList.length} pending tasks</span>
        <ClearTodo handleClearAll={handleClearAll} />
      </div>
    </div>
  );
};

export default TodoApp;
