import { Star } from "lucide-react";
import Link from "next/link";
import { Product } from "../page";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={"/" + product.id}>
      <div className="grid gap-4 p-4 border border-gray-300 rounded shadow max-w-sm place-self-center">
        <img src={product.image} className="h-32 place-self-center" />
        <div className="grid gap-1">
          <div className="flex gap-1">
            <span className="font-semibold line-clamp-2">
              {product.title.substring(0, 10)}
              <span className="text-gray-500 font-normal ml-2 ">
                {product.description}
              </span>
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-sm">{product.rating.rate}</span>
            <span className="text-sm">({product.rating.count})</span>
            <div className="flex gap-1">
              {Array.from({ length: product.rating.rate }, (v, i) => i).map(
                (i) => (
                  <Star
                    size={14}
                    key={i}
                    className="text-orange-400"
                    fill="oklch(75% 0.183 55.934)"
                  />
                )
              )}
              {Array.from({ length: 6 - product.rating.rate }, (v, i) => i).map(
                (i) => (
                  <Star size={14} key={i} className="text-orange-400" />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
