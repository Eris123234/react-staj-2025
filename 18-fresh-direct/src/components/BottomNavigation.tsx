import { Bell, Home, Receipt, ShoppingCart, User } from "lucide-react";

const BottomNavigation = () => {
  const navItems = [
    { id: "home", icon: <Home size={24} /> },
    { id: "notifications", icon: <Bell size={24} /> },
    { id: "shoppingCart", icon: <ShoppingCart size={24} /> },
    { id: "receipt", icon: <Receipt size={24} /> },
    { id: "account", icon: <User size={24} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300">
      <div className="flex items-center justify-around py-3 mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="flex items-center justify-center p-3 rounded-xl hover:bg-gray-100 transition-colors text-gray-500 hover:text-black"
          >
            {item.icon}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
