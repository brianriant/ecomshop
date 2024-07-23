
import { useEffect, useState } from "react";
import './ProductPage.css'
import { ProductCard } from "../../components";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  }
  image: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading,setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if(!response.ok){
          throw new Error('Network response not ok')
        }
        const productsData = await response.json();
        setProducts(productsData);
        setLoading(false)
      }catch(error) {
        setError('Failed to fetch poducts');
        setLoading(false);
      }
    };

    getProducts();
  },[]);
   
  if (loading) {
    return <div>⚡⚡🤝Loading...</div>
  }
 if (error) {
    return <div>{error}</div>
  }

   function handleAddToCart() {
     alert("Product added to cart");
   }

  return (
    <section className="products__page">
      <h1 className="products__h1">Other Products</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
}