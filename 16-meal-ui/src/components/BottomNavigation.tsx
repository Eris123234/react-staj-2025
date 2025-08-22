import { Bookmark, Home, PlusCircle } from "lucide-react";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 p-4 border-t bg-white border-slate-200 shadow-xl w-full flex justify-around">
      <button className="p-4 bg-yellow-300 rounded-full">
        <Home />
      </button>
      <button>
        <PlusCircle color="gray" />
      </button>
      <button>
        <Bookmark color="gray" />
      </button>
    </div>
  );
};

export default BottomNavigation;
