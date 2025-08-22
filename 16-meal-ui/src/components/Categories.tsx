import {
  Beef,
  CookingPot,
  Drumstick,
  Egg,
  Fish,
  Flame,
  Ham,
  Hamburger,
  HandPlatter,
  IceCream,
  Shell,
  Soup,
  Vegan,
} from "lucide-react";

const categories = [
  { icon: Flame, name: "Popular" },
  { icon: Ham, name: "Beef" },
  { icon: Beef, name: "Chicken" },
  { icon: IceCream, name: "Dessert" },
  { icon: Shell, name: "Shell" },
  { icon: Drumstick, name: "Lamb" },
  { icon: Soup, name: "Misc." },
  { icon: Hamburger, name: "Pasta" },
  { icon: Fish, name: "Seafood" },
  { icon: CookingPot, name: "Side" },
  { icon: HandPlatter, name: "Starter" },
  { icon: Vegan, name: "Vegan" },
  { icon: Egg, name: "Breakfast" },
  { icon: Drumstick, name: "Goat" },
];

const Categories = () => {
  return (
    <div
      className="flex max-w-full gap-6 overflow-y-scroll px-4 py-2"
      style={{ scrollbarWidth: "none" }}
    >
      {categories.map((category, index) => {
        const bgClassName = index === 0 ? "bg-yellow-400" : "bg-gray-100";
        const className = `${bgClassName} flex min-w-16 flex-col items-center rounded-3xl bg-gray-100 px-2 py-6`;
        return (
          <div className="flex flex-col items-center gap-2">
            <div className={className}>{<category.icon strokeWidth={2} />}</div>
            {category.name}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
