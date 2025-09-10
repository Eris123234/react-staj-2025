import { Star } from "lucide-react";
import { Product } from "../page";

const getProduct = async (id: string): Promise<Product> => {
  const API_URL = "https://fakestoreapi.com/products/" + id;
  const res = await fetch(API_URL);
  const product = await res.json();
  return product;
};

type Props = {
  params: Promise<{ id: string }>;
};

const page = async ({ params }: Props) => {
  const { id } = await params;
  const product = await getProduct(id);
  return (
    <div className="flex gap-8 p-8 max-w-3xl mx-auto">
      <img src={product.image} className="w-48 object-contain" alt="" />
      <div className="grid self-start gap-1">
        <span className="text-2xl">{product.title}</span>
        <span className="text-base text-gray-500">{product.description}</span>
        {/* Rating container */}
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
        <span className="text-3xl text-orange-600">{product.price} TL</span>
      </div>
    </div>
  );
};

export default page;
