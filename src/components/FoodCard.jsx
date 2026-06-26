import "./FoodCard.css";

function FoodCard({  
  food,
  cart ,
  addToCart,
  increaseQuantity,
  decreaseQuantity}) {
  
  const cartItem = cart?.find(
    item => String(item.id) === String(food.id)
  );
  return (
    <div className="food-card">

      <div className="food-image-container">

        <img
          src={food.image}
          alt={food.name}
          className="food-image"
        />

        {food.bestseller && (
          <span className="bestseller-badge">
            🔥 Bestseller
          </span>
        )}

        <span
          className={
            food.isVeg ? "veg-badge" : "nonveg-badge"
          }
        >
          {food.isVeg ? "🟢 Veg" : "🔴 Non-Veg"}
        </span>

      </div>

      <div className="food-content">

        <h3 className="food-name">
          {food.name}
        </h3>

        <div className="food-rating">

          <span className="rating-score">
            ⭐ {food.rating}
          </span>

          <span className="rating-reviews">
            ({food.reviews}K Reviews)
          </span>

        </div>

        <p className="delivery-time">
          🚴 {food.deliveryTime}
        </p>

        <p className="food-description">
          {food.description}
        </p>

        <div className="food-footer">

          <span className="food-price">
            ₹{food.price}
          </span>

         {cartItem ? (

          <div className="quantity-selector">

            <button
              className="quantity-btn"
              onClick={() => decreaseQuantity(food.id)}
            >
              −
            </button>

            <span className="quantity-number">
              {cartItem.quantity}
            </span>

            <button
              className="quantity-btn"
              onClick={() => increaseQuantity(food.id)}
            >
              +
            </button>

          </div>

        ) : (

          <button
            className="add-cart-btn"
            onClick={() => addToCart(food)}
          >
            Add to Cart
          </button>

        )}

        </div>

      </div>

    </div>
  );
}

export default FoodCard;