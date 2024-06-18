import React from "react";
import ProductCard from "../product/ProductCard";

const ExploreProducts: React.FC = () => {
  const products = [
    { id: 1, name: "Explore Product 1", price: 100 },
    { id: 2, name: "Explore Product 2", price: 200 },
    // Add more products as needed
  ];

  return (
    <section className="explore-products">
      <h2>Explore Our Products</h2>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ExploreProducts;
