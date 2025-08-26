import { Apple, Beef, Carrot, Fish } from "lucide-react";
import { useState } from "react";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("vegetables");

  interface Category {
    id: string;
    name: string;
    icon: React.ReactNode;
  }

  const categories: Category[] = [
    {
      id: "vegetables",
      name: "Vegetables",
      icon: <Carrot size={20} />,
    },
    {
      id: "fruits",
      name: "Fruits",
      icon: <Apple size={20} />,
    },
    {
      id: "meat",
      name: "Meat",
      icon: <Beef size={20} />,
    },
    {
      id: "fish",
      name: "Fish",
      icon: <Fish size={20} />,
    },
  ];
  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="flex gap-4 px-6 py-3 overflow-x-auto scrollbar-hide"
    >
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`flex items-center gap-2 px-4 py-3 rounded-xl whitespace-nowrap transition-all ${
            activeCategory === category.id
              ? "bg-green-500 text-white shadow"
              : "text-gray-500 hover:text-gray-500"
          }`}
        >
          {/* Icon */}
          <span
            className={
              activeCategory === category.id ? "text-white" : "text-gray-500"
            }
          >
            {category.icon}
          </span>
          {/* Text */}
          <span className="font-medium">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Categories;
