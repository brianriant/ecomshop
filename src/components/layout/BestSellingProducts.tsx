import React from "react";
import ProductCard from "../product/ProductCard";

const BestSellingProducts: React.FC = () => {
  const products = [
    { id: 1, name: "Best Product 1", price: 100 },
    { id: 2, name: "Best Product 2", price: 200 },
    // Add more products as needed
  ];

  return (
    <section className="best-selling-products">
      <h2>Best Selling Products</h2>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSellingProducts;
