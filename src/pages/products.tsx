import { useQuery } from "@tanstack/react-query";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductsList = () => {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
  });

  if (isLoading) return <h1>loading...</h1>;
  if (error) return <h1>Error loading products</h1>;

  return (
    <div className="grid grid-cols-3 gap-3 flex-wrap p-4">
      {data?.map((product) => (
        <div key={product.id} className="border p-10 rounded">
          <img src={product.image} alt={product.title} className="w-50 h-50 object-contain mb-10" />
          <h2>{product.title}</h2>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
