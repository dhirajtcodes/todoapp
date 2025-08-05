import { ITodo } from "../components/todo/TodoApp";

export const setLocalStorage = (key: string, value: ITodo[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  const todo = JSON.parse(localStorage.getItem(key) ?? "");
  return todo;
};
