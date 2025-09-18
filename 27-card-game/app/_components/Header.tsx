import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <div>
      <span className="text-xl">Trending</span>
      <div className="flex items-center gap-1">
        <span className="text-3xl font-semibold">Questions</span>
        <ChevronDown className="mt-1.5" />
      </div>
    </div>
  );
};

export default Header;
