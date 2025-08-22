import RecipeCard from "./RecipeCard";

const PopularRecipes = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <h1 className="text-2xl font-semibold">Popular Recipes</h1>
      <div className="flex gap-4">
        {/* Kolon 1 */}
        <div className="flex flex-1 flex-col">
          <RecipeCard id={"1"} />
        </div>

        {/* Kolon 2 */}
        <div className="flex flex-1 flex-col">
          <RecipeCard id={"2"} />
        </div>
      </div>
    </div>
  );
};

export default PopularRecipes;
