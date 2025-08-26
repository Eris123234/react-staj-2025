import cabbageImage from "../assets/cabbage.jpg";
import carrotsImage from "../assets/carrots.jpg";
import potatoesImage from "../assets/potatoes.jpg";
import tomatoesImage from "../assets/tomatoes.jpg";
import ProductCard from "./ProductCard";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  inBasket?: boolean;
};

const Products = () => {
  const products: Product[] = [
    {
      id: "1",
      name: "Cabbage",
      description: "Indian Product",
      price: 11.25,
      image: cabbageImage,
      inBasket: false,
    },
    {
      id: "2",
      name: "Bangla Tomato",
      description: "Deshi Product",
      price: 7.9,
      image: tomatoesImage,
      inBasket: false,
    },
    {
      id: "3",
      name: "Carrot",
      description: "Deshi Fresh Product",
      price: 5.8,
      image: carrotsImage,
      inBasket: true,
    },
    {
      id: "4",
      name: "Potato",
      description: "Indian Product",
      price: 12.3,
      image: potatoesImage,
      inBasket: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 px-6 pb-24">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Products;
