import "./HeroSection.css";
import Button from "../button/Button";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchProducts } from "../../api/productApi";
import { ProductProps } from "../productcard/Productcard";

interface HeroSectionProps {
  onSearch: (
    searchTerm: string,

    category: string
  ) => void;

  categories: string[];
}

export default function HeroSection({
  onSearch,
  categories,
}: HeroSectionProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [, setSelectedCategory] = useState<string>("");

  const [searchResults, setSearchResults] = useState<ProductProps[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchProducts().then((data) => {
      setSearchResults(data.products);

      categories = data.categories;
    });
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      return;
    }

    setLoading(true);

    fetchProducts().then((data) => {
      const filteredProducts = data.products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(filteredProducts);

      setLoading(false);
    });
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);

    fetchProducts().then((data) => {
      const filteredProducts = data.products.filter(
        (product) => product.category === category
      );

      setSearchResults(filteredProducts);
    });
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">Welcome to Ecomshop</h1>

        <p className="hero__subtitle">
          Your one stop shop for fully fledge e-commerce applications.
        </p>

        <div className="hero__search">
          <div className="search__hero">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />

            <Button variant="primary" onClick={handleSearch}>
              <FaSearch />
            </Button>
          </div>

          <div className="hero__filter">
            <Button
              onClick={() => handleCategoryClick("")}
              children="All Categories"
            />

            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategoryClick(category)}
                children={category}
              />
            ))}
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {searchResults.map((product) => (
                <li key={product.id}>{product.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}