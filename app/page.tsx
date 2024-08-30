import TodoList from "@/components/TodoList";

const Home = () => {
  return (
    <>
      <p>Pankys Todos</p>

      <main className="pt-12">
        <TodoList />
      </main>
    </>
  );
};

export default Home;
