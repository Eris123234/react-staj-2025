import { Menu, ShoppingCart } from "lucide-react";

const Navigation = () => {
  const cartCount = 15;
  return (
    <header className="flex items-center gap-4 px-6 py-4 bg-white">
      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
        <Menu />
      </button>
      <h1 className="text-xl font-semibold flex-1">Store</h1>
      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors relative">
        <ShoppingCart />
        {cartCount > 0 && (
          <div className="absolute bg-red-500 rounded-full text-xs w-5 h-5 flex items-center justify-center text-white top-0 right-0">
            {cartCount}
          </div>
        )}
      </button>
    </header>
  );
};

export default Navigation;
