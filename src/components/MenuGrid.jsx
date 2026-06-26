import "./MenuGrid.css";
import FoodCard from "./FoodCard";

function MenuGrid({
  foods,
  cart,
  addToCart,
  increaseQuantity,
  decreaseQuantity
}) {
  return (
    <section className="menu-grid">
      {foods.length > 0 ? (
        foods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            cart={cart}
            addToCart={addToCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))
      ) : (
        <div className="no-food">
          <h2>No food found 🍽️</h2>
          <p>Try another search.</p>
        </div>
      )}
    </section>
  );
}

export default MenuGrid;