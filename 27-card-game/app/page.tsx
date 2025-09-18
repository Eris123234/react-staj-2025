import {
  ChevronDown,
  Heart,
  LayoutGrid,
  Plus,
  Search,
  User,
} from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-gradient-to-b  
    from-[#1F4EC5] via-[#CFC5F9] to-[#FBEFDF]"
    >
      <div
        className="flex-1
      p-8 pt-12 text-white flex flex-col gap-6
    "
      >
        {/* Header */}
        <div>
          <span className="text-xl">Trending</span>
          <div className="flex items-center gap-1">
            <span className="text-3xl font-semibold">Questions</span>
            <ChevronDown className="mt-1.5" />
          </div>
        </div>

        {/* Info and Card container */}
        <div className="flex flex-col flex-1 gap-4 relative">
          {/* Swipe info Container */}
          <div className="text-sm bg-black/35 rounded-full py-2 px-4 text-center">
            Swipe left/right to check more
          </div>

          {/* Card */}
          <div className="flex flex-1  bg-white rounded-3xl border-1 border-slate-400/20 shadow-2xl shadow-black/10">
            <div className="flex flex-col justify-between gap-4 px-8 py-12 ">
              <div className="">
                {/* Tags */}
                <div className="flex gap-2">
                  <span className="font-base text-blue-500">#ui</span>
                  <span className="font-base text-blue-500">#ux</span>
                  <span className="font-base text-blue-500">#interaction</span>
                </div>

                {/* Question */}
                <span className="text-slate-700 font-semibold text-2xl ">
                  Why do people clear the screen multiple times when using a
                  calculator?
                </span>

                {/* Answers & Viewed */}
                <div className="flex gap-8 text-slate-500">
                  <span>10 answers</span>
                  <span>12k views</span>
                </div>
              </div>

              {/* Question Creator */}
              <div className="flex gap-4">
                <img
                  className="rounded-full w-12 h-12 bg-blue-500"
                  src="https://api.dicebear.com/9.x/notionists/svg?seed=George"
                  alt="avatar"
                />
                <div className="grid">
                  <span className="text-slate-900 text-base font-semibold">
                    Donat Twerski
                  </span>
                  <span className="text-slate-500 text-sm ">
                    UX designer @uigate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navbar */}
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
    </div>
  );
};

export default page;
