import { Clock, Star } from "lucide-react";
import bg1 from "../assets/chicken.jpeg";
import bg2 from "../assets/crepes.jpeg";

type Props = {
  id: string;
};

const RecipeCard = ({ id }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div
        className="flex h-60 flex-col justify-between gap-4 rounded-2xl p-4"
        style={{
          backgroundImage: `url(${id === "1" ? bg1 : bg2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex items-center justify-center gap-1 self-start rounded-full bg-black/30 px-3 py-1 text-white">
          <Clock size={12} />
          <span className="text-sm">15 mins</span>
        </div>
        <div className="flex items-center justify-center gap-1 self-end rounded-full bg-yellow-400 px-6 py-1 text-black">
          <Star fill="black" size={16} />
          <span className="text-base">4.8</span>
        </div>
      </div>
      {/* Yazılar */}
      <div className="flex flex-col gap-0">
        <span className="text-base font-semibold text-gray-500">
          Chicken Curry
        </span>
        <span className="text-sm text-gray-500">Asian</span>
      </div>
    </div>
  );
};

export default RecipeCard;
