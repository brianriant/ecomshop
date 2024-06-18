import React from "react";
import ProductCard from "../product/ProductCard";

const FlashSales: React.FC = () => {
  const products = [
    { id: 1, name: "Product 1", price: 100, discount: 20 },
    { id: 2, name: "Product 2", price: 40, discount: 20 },
    { id: 3, name: "Product 3", price: 60, discount: 20 },
  ];
  return (
    <section className="flash-sales">
      <h2>Flash Sales</h2>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FlashSales;
