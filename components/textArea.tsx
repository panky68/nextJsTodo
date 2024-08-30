import { ChangeEvent, type ComponentPropsWithoutRef, FC } from "react";

type TextAreaProps = {
  label: string;
  col: number;
  row: number;
  addTodo: (event: string) => void;
} & ComponentPropsWithoutRef<"textarea">;

const TextArea: FC<TextAreaProps> = ({
  addTodo,
  label,
  col,
  row,
  ...props
}) => {
  function addTodoHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    addTodo(event.target.value);
  }
  return (
    <div className="flex flex-col gap-1 pb-4">
      <label className="rounded text-white font-bold" htmlFor={label}>
        {label}
      </label>
      <textarea
        className="rounded p-2"
        id={label}
        rows={row}
        cols={col}
        {...props}
        onChange={addTodoHandler}
      />
    </div>
  );
};

export default TextArea;
