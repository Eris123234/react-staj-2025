"use client";

import { useState, useTransition } from "react";
import { z } from "zod";
import { createTodo } from "./actions";

const schema = z.object({
  title: z
    .string()
    .min(3, "En az 3 karakter olmalı")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "En az bir özel karakter içermeli"),
});

const page = () => {
  const [errors, setErrors] = useState<string[] | undefined>();
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const values = { title: formData.get("title") as string };

    const parsed = schema.safeParse(values);

    if (!parsed.success) {
      setErrors(parsed.error.issues.map((issue) => issue.message));
      return;
    }

    startTransition(async () => {
      await createTodo(formData);
    });
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 m-4">
      <input
        className={`px-2 py-1 border border-gray-400 focus:outline-4 ${
          errors && "border-2 border-red-500"
        }`}
        type="text"
        name="title"
        defaultValue={""}
      />

      {errors && (
        <ul className="text-red-500">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <button
        className="place-self-start px-2 py-1 bg-blue-500 text-white rounded
      hover:bg-blue-600 cursor-pointer
      active:bg-blue-700
    "
      >
        {isPending ? "Ekleniyor" : "Click me"}
      </button>
    </form>
  );
};

export default page;
