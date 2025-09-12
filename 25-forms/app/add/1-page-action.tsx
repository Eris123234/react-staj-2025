"use client";

import { createTodo } from "./actions";

const page = () => {
  return (
    <form action={createTodo}>
      <input type="text" name="title" defaultValue={" alınacak"} required />
      <button
        className="p-4 m-4 bg-blue-500 text-white rounded
      hover:bg-blue-600 cursor-pointer
      active:bg-blue-700
    "
      >
        Click me
      </button>
    </form>
  );
};

export default page;
