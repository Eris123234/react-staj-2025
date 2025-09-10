import ProductCard from "./_components/ProductCard";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const getProducts = async (): Promise<Product[]> => {
  const API_URL = "https://fakestoreapi.com/products";
  const res = await fetch(API_URL);
  const products = await res.json();
  return products;
};

const page = async () => {
  const products = await getProducts();
  return (
    <ul className="grid max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 mx-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default page;
