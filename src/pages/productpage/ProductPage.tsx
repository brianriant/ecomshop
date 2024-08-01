import { useEffect, useState } from "react";
import "./ProductPage.css";
import { ProductProps } from "../../components/productcard/Productcard";
import { ProductCard, HeroSection } from "../../components";
import Loader from "../../components/loader/Loader";
import { fetchProducts } from "../../api/productApi";


export default function ProductsPage() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProductsAndCategories = async () => {
      try {
        const { products: fetchedProducts, categories: fetchedCategories } =
          await fetchProducts();
        setProducts(fetchedProducts);
        setCategories(fetchedCategories);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error){
          setError(error.message);
        }else {
          setError(
            "An unknown error occurred"
          )
        }
        setLoading(false);
      }
    };

    loadProductsAndCategories();
  }, []);

  const handleSearch = async (searchTerm: string, category: string) => {
    setLoading(true);
    try {
      const { products: allProducts } = await fetchProducts();
      const filteredProducts = allProducts.filter((product) => {
        return (
          (searchTerm
            ? product.title.toLowerCase().includes(searchTerm.toLowerCase())
            : true) && (category ? product.category === category : true)
        );
      });
      setProducts(filteredProducts);
      setLoading(false);
    } catch (error) {
      setError("Failed to filter products");
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div className="status">{error}</div>;
  }

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div className="status">{error}</div>;
  }


  return (
    <section className="products__page">
      <HeroSection onSearch={handleSearch} categories={categories} />
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
            onBuy={() => alert("product bought 🤝😁")}
          />
        ))}
      </div>
    </section>
  );
}
