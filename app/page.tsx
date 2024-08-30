import TodoItem from "../components/todoItem";

const Home = () => {
  return (
    <>
      <p>Pankys Todos</p>
      <main className="pt-12 grid gap-5 grid-cols-[repeat(3,30%)] justify-center">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </main>
    </>
  );
};

export default Home;
