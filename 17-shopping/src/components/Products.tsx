import { ArrowUpDown, Menu } from "lucide-react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="grid mt-4 p-4 gap-4">
      <span className="text-2xl font-semibold">Shop</span>
      <div className="flex justify-between">
        <a href="#" className="flex  gap-1 items-center">
          <Menu />
          <span>Show sidebar</span>
        </a>
        <ArrowUpDown />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
