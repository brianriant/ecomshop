import { useState } from "react";
import Button from "../button/Button";
import { FaSearch } from "react-icons/fa";
// import { ProductProps } from "../productcard/Productcard";

interface HeroSectionProps {
  onSearch: (searchTerm: string, category: string) => void;
  categories: string[];
}

export default function HeroSection({
  onSearch,
  categories,
}: HeroSectionProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleSearch = () => {
    onSearch(searchTerm, selectedCategory); // Pass search term and category to parent
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onSearch(searchTerm, category); // Pass search term and selected category to parent
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">Welcome to Ecomshop</h1>
        <p className="hero__subtitle">
          Your one stop shop for fully fledged e-commerce applications.
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
            <Button onClick={() => handleCategoryClick("")}>
              All Categories
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategoryClick(category)}>
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
