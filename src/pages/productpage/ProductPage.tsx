
import { useEffect, useState } from "react";
import './ProductPage.css'

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  image: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading,setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products")
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


  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-discount">
            Discount: {product.discountPercentage}%
          </p>
          <p className="product-rating">Rating: {product.rating}</p>
          <p className="product-stock">Stock: {product.stock}</p>
          <p className="product-brand">Brand: {product.brand}</p>
          <p className="product-sku">SKU: {product.sku}</p>
          <p className="product-weight">Weight: {product.weight}g</p>
          <p className="product-dimensions">
            Dimensions: {product.dimensions.width} x {product.dimensions.height}{" "}
            x {product.dimensions.depth} cm
          </p>
        </div>
      ))}
    </div>
  );
}