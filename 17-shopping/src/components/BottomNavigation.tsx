import { Filter, Heart, Menu, ShoppingCart, User } from "lucide-react";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 w-full flex justify-around bg-white shadow border-gray-100 border-t py-2">
      <button className="grid place-items-center">
        <Menu />
        <span>Menu</span>
      </button>
      <button className="grid place-items-center">
        <Filter />
        <span>Filters</span>
      </button>
      <button className="grid place-items-center">
        <Heart />
        <span>Wishlist</span>
      </button>
      <button className="grid place-items-center">
        <ShoppingCart />
        <span>Cart</span>
      </button>
      <button className="grid place-items-center">
        <User />
        <span>Account</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
