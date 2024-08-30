import { FC } from "react";

type TodoItemProps = {
  todo: string | undefined;
  date: string | undefined;
};

const TodoItem: FC<TodoItemProps> = ({ todo, date }) => {
  return (
    <li className="gap-4 bg-yellow-300 text-black shadow-[0_0_10px_rgba(0,0,0,0.3)] p-4 rounded shadow">
      <h1 className="text-xl font-bold pb-2">Todo</h1>
      <p>{todo}</p>
      <p>{date}</p>
    </li>
  );
};

export default TodoItem;
