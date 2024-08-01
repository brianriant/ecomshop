import "./HeroSection.css";
import Button from "../button/Button";
import { useState } from "react";

interface HeroSectionProps {
  onSearch: (
    searchTerm: string,
    category: string,
  ) => void;
  categories: string[];
}

export default function HeroSection({ onSearch, categories }: HeroSectionProps) {
 const [searchTerm, setSearchTerm] = useState<string>("");
 const [selectedCategory, setSelectedCategory] = useState<string>("");

 const handleSearch = () => {
   onSearch(searchTerm, selectedCategory);
 };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onSearch(searchTerm, category);
  };
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">Welcome to Ecomshop</h1>
        <p className="hero__subtitle">
          Your one stop shop for fully fledge e-commerce applications.
        </p>

        <div className="hero__search">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
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
        </div>
      </div>
    </section>
  );
}
