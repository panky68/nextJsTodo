"use client";

import { useState } from "react";
import TodoItem from "./todoItem";
import NewTodo from "@/components/newTodo";

export type TodoListProps = {
  id: string;
  todo: string | undefined;
  date: string | undefined;
};

const TodoList = () => {
  const [enteredTodos, setEnteredTodos] = useState<TodoListProps[]>([]);

  function addTodosHandler(todos: TodoListProps) {
    setEnteredTodos((prevTodos) => [todos, ...prevTodos]);
    console.log(enteredTodos);
  }
  return (
    <>
      <div className="flex items-center justify-center pb-4">
        <NewTodo addTodo={addTodosHandler} />
      </div>
      <ul className=" grid gap-5 grid-cols-[repeat(3,30%)] justify-center">
        {enteredTodos.map((todo) => (
          <TodoItem key={todo.todo} todo={todo.todo} date={todo.date} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
