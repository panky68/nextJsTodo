import { MdPostAdd, MdMessage } from "react-icons/md";

const MainHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold flex gap-4">
        <MdPostAdd />
        Pankys Todos
      </h1>
      <div className="text-3xl font-bold">
        <button className="flex items-center gap-4">
          <MdMessage />
          New Todo
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
