import { HeroSection } from "../../components";
// import productlist from "../../assets";
import "./HomePage.css";
import { useEffect, useState } from "react";
import { ProductProps } from '../../components/productcard/Productcard';
import ProductsPage from "../productpage/ProductPage";


export default function HomePage() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    setProducts(products);
  }, [products]);

  // function handleAddToCart() {
  //   alert("Product added to cart");
  // }

  return (
    <>
      <HeroSection />

      {/* <div className="product-list">
        {productlist.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            onBuy={handleAddToCart}
          />
        ))}
      </div> */}
      <ProductsPage />
    </>
  );
}
