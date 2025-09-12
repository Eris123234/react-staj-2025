"use client";

const page = () => {
  return (
    <button
      className="p-4 m-4 bg-blue-500 text-white rounded
      hover:bg-blue-600 cursor-pointer
      active:bg-blue-700
    "
      onClick={() => alert("Hello World")}
    >
      Click me
    </button>
  );
};

export default page;
