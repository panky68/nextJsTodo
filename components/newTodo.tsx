import { FC, FormEvent, useState } from "react";
import Input from "@/components/input";
import TextArea from "@/components/textArea";
import { TodoListProps } from "./TodoList";

type NewTodoProps = {
  addTodo: (data: TodoListProps) => void;
  cancelTodo: () => void;
};

const NewTodo: FC<NewTodoProps> = ({ addTodo, cancelTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState<string>();
  const [enteredDate, setEnteredDate] = useState<string>();

  function addTodoHandler(enteredTodo: string) {
    setEnteredTodo(enteredTodo);
  }

  function addDateHandler(enteredDate: string) {
    setEnteredDate(enteredDate);
  }

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addTodo({
      id: new Date().toISOString(),
      todo: enteredTodo,
      date: enteredDate,
    });
    cancelTodo();
    (event.target as HTMLFormElement).reset(); // reset the form elements after submit
  }

  return (
    <form
      className="bg-[#6233b9] p-4 text-black w-[400px]"
      onSubmit={submitHandler}
    >
      <TextArea label="New Todo" col={5} row={5} addTodo={addTodoHandler} />
      <Input label="Date" type="date" addDate={addDateHandler} />
      <div className="flex justify-between pt-4">
        <button className=" bg-[#a990fb] text-[#2a2630] cursor-pointer hover:bg-white p-2 rounded">
          Add
        </button>
        <button
          type="button"
          className=" bg-[#a990fb] text-[#2a2630] cursor-pointer hover:bg-white p-2 rounded"
          onClick={cancelTodo}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewTodo;
