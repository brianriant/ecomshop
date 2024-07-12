import ProductCard from "../components/productcard/Productcard";
import showshop from "../assets";
import './HomePage.css'

export default function HomePage() {
  const handleAddToCart = () => {
    alert("Product added to cart!");
  };

  return (
    <div className="product-list">
      <ProductCard
        image={showshop}
        title="Shoe shop"
        price="29999"
        onAddToCart={handleAddToCart}
      />
      <ProductCard
        image={showshop}
        title="Shoe shop"
        price="29999"
        onAddToCart={handleAddToCart}
      />
      <ProductCard
        image={showshop}
        title="Shoe shop"
        price="29999"
        onAddToCart={handleAddToCart}
      />
      <ProductCard
        image={showshop}
        title="Shoe shop"
        price="29999"
        onAddToCart={handleAddToCart}
      />
      <ProductCard
        image={showshop}
        title="Shoe shop"
        price="29999"
        onAddToCart={handleAddToCart}
      />
      <ProductCard
        image={showshop}
        title="Shoe shop"
        price="29999"
        onAddToCart={handleAddToCart}
      />
      {/* Add more ProductCard components as needed */}
    </div>
  )
}
