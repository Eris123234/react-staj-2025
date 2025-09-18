import { Heart, LayoutGrid, Plus, Search, User } from "lucide-react";
import Link from "next/link";

const BottomNav = () => {
  return (
    <div className="bg-white pb-4 px-12 flex justify-between text-slate-500">
      <Link href={"#"} className="border-t-4 pt-4 px-2 border-orange-500">
        <LayoutGrid />
      </Link>
      <Link href={"#"} className="border-t-4 pt-4 px-2 border-orange-500/0">
        <Search />
      </Link>
      <Link
        href={"#"}
        className="mt-4  bg-orange-500 rounded-full text-white p-1.5"
      >
        <Plus />
      </Link>
      <Link href={"#"} className="border-t-4 pt-4 px-2 border-orange-500/0">
        <Heart />
      </Link>
      <Link href={"#"} className="border-t-4 pt-4 px-2 border-orange-500/0">
        <User />
      </Link>
    </div>
  );
};

export default BottomNav;
