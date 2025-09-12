"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createTodo(formData: FormData) {
  const title = formData.get("title");

  const API_URL = "http://localhost:3001/todos";
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      ContentType: "application/json",
    },
    body: JSON.stringify({
      title,
    }),
  });

  revalidateTag("todos");
  redirect("/");
}
