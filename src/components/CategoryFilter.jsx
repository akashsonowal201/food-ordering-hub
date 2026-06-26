import "./CategoryFilter.css";

const categories = [
  "All",
  "Burger",
  "Pizza",
  "Biryani",
  "Drinks",
  "Dessert"
];

function CategoryFilter({
  selectedCategory,
  setSelectedCategory
}) {
  return (
    <div className="category-filter">

      {categories.map((category) => (
        <button
          key={category}
          className={`category-btn ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default CategoryFilter;