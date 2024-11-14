import Link from "next/link";
import { FC } from "react";
import { MdPostAdd, MdMessage } from "react-icons/md";

type MainHeaderProps = {
  openModal: () => void;
};

const MainHeader: FC<MainHeaderProps> = ({ openModal }) => {
  return (
    <div className="flex items-center justify-between border-b-2 border-b-[#ece1fa] border-solid pb-4 mb-4">
      <Link href="/">
        <h1 className="text-3xl font-bold flex gap-4">
          <MdPostAdd />
          Pankys Todos
        </h1>
      </Link>

      <div className="text-3xl font-bold">
        <button className="flex items-center gap-4" onClick={openModal}>
          <MdMessage />
          New Todo
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
