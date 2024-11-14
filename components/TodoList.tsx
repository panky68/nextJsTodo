"use client";

import { useState } from "react";
import TodoItem from "./todoItem";
import NewTodo from "@/components/newTodo";
import TodoModal from "./todoModal";
import RootLayout from "@/app/layout";
import MainHeader from "./mainHeader";

export type TodoListProps = {
  id: string;
  todo: string | undefined;
  date: string | undefined;
};

const TodoList = () => {
  const [enteredTodos, setEnteredTodos] = useState<TodoListProps[]>([]);
  const [showModal, setShowModal] = useState(false);

  function addTodosHandler(todos: TodoListProps) {
    setEnteredTodos((prevTodos) => [todos, ...prevTodos]);
    console.log(enteredTodos);
  }

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <>
      <MainHeader openModal={showModalHandler} />
      {showModal && (
        <TodoModal closeModal={closeModalHandler}>
          <NewTodo addTodo={addTodosHandler} cancelTodo={closeModalHandler} />
        </TodoModal>
      )}
      <ul className=" grid gap-5 grid-cols-[repeat(3,30%)] justify-center">
        {enteredTodos.map((todo) => (
          <TodoItem key={todo.todo} todo={todo.todo} date={todo.date} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
