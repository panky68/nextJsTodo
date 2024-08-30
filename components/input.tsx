import { ChangeEvent, type ComponentPropsWithoutRef, FC } from "react";

type InputProps = {
  label: string;
  type: string;
  addDate: (event: string) => void;
} & ComponentPropsWithoutRef<"input">;

const Input: FC<InputProps> = ({ addDate, label, type, ...props }) => {
  function addDateHandler(event: ChangeEvent<HTMLInputElement>) {
    addDate(event.target.value);
  }

  return (
    <div className="flex flex-col gap-1 pb-4">
      <label className="rounded text-white font-bold" htmlFor={label}>
        {label}
      </label>
      <input
        type={type}
        className="rounded p-2"
        id={label}
        onChange={addDateHandler}
        {...props}
      />
    </div>
  );
};

export default Input;
