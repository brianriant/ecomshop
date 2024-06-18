import React from "react";

const categories = [
  { id: 1, name: "phones" },
  { id: 2, name: "Computers" },
  { id: 3, name: "Printers" },
];

const CategoryBrowse: React.FC = () => {
  return (
    <section className="category-browse">
      <h2>Browse By Category</h2>
      <div className="categories">
        {categories.map((category) => (
          <div key={category.id} className="category">
            {category.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryBrowse;
