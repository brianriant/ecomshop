import { HeroSection, ProductCard } from "../../components";
import productlist from "../../assets";
import "./HomePage.css";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(products);
  }, [products]);

  function handleAddToCart() {
    alert("Product added to cart");
  }

  return (
    <>
      <HeroSection />
      <div className="product-list">
        {productlist.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
}
