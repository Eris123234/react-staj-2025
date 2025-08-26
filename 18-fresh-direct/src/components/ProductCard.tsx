import { Plus } from "lucide-react";
import { useState } from "react";
import type { Product } from "./Products";

type Props = {
  product: Product;
};

const ProductCard = ({
  product: { name, description, price, image, inBasket = false },
}: Props) => {
  const [isInBasket, setIsInBasket] = useState(inBasket);

  const handleAddToBasket = () => {
    setIsInBasket(!isInBasket);
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-4 relative max-w-64">
      {/* Basket Badge */}

      <div
        className={` ${
          isInBasket ? "opacity-100" : "opacity-0"
        } transition duration-200 absolute top-3 left-3 right-3 px-3 text-center py-1 bg-green-100 text-green-500 text-xs font-medium rounded-full`}
      >
        In Basket
      </div>

      {/* Image */}
      <div className="aspect-square mb-3 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain rounded-xl"
        />
      </div>

      {/* Texts */}
      <div className="space-y-2">
        <h3 className="font-semibold text-black text-lg">{name}</h3>
        <p className="text-gray-500 text-sm">{description}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-black font-bold text-lg">
            ${price.toFixed(2)}
          </span>

          <button
            onClick={handleAddToBasket}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              isInBasket
                ? "bg-green-200 text-green-500"
                : "bg-green-500 text-white hover:bg-green-700"
            }`}
          >
            <Plus
              size={20}
              className={
                isInBasket ? "rotate-45 transition-all" : "transition-all"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
