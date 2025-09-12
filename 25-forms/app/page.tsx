import Link from "next/link";

type Todo = {
  id: string;
  title: string;
};

const getTodos = async (): Promise<Todo[]> => {
  const API_URL = "http://localhost:3001/todos";
  const res = await fetch(API_URL, {
    cache: "force-cache",
    next: { tags: ["todos"] },
  });
  const todos = await res.json();
  return todos;
};

const page = async () => {
  const todos = await getTodos();
  return (
    <>
      <Link href="/add">Ürün ekle</Link>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id}: {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default page;
