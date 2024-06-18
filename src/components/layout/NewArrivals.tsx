import React from "react";
import ProductCard from "../product/ProductCard";

const NewArrival: React.FC = () => {
  const products = [
    { id: 1, name: "New Arrival 1", price: 100 },
    { id: 2, name: "New Arrival 2", price: 200 },
    // Add more products as needed
  ];

  return (
    <section className="new-arrival">
      <h2>New Arrival</h2>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
