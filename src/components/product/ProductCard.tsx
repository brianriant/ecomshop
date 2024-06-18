import React from 'react'

interface Product {
  id: number;
  name: string;
  price: number;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard:React.FC<ProductCardProps> = ({product}) => {
  return (
    <div className="product-card">
      <img
        src="{`../../assets/images/product-${product.id}.jpg`}"
        alt="{product.name}"
      />
      <h3>{product.name}</h3>
      <p>{product.price} </p>
      {product.discount && <span>Discount: {product.discount}% </span>}
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard
