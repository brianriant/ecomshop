import { useEffect, useState } from "react";
import "./ProductPage.css";
import { ProductProps } from "../../components/productcard/Productcard";
import { ProductCard, HeroSection } from "../../components";
import Loader from "../../components/loader/Loader";


export default function ProductsPage() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://ecomshop-nodeendpoint.vercel.app/products"
        );
        console.log(response)
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        const productsData = await response.json();
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch poducts");
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <Loader/>
  }
  if (error) {
    return <div className="status">{error}</div>;
  }

  function handleAddToCart() {
    alert("product bought ✔☑");
  }

  return (
    <section className="products__page">
      <HeroSection />
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            description={product.description}
            price={product.price}
            onBuy={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
}
