import "./CartItem.css";

function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
}) {
  return (
    <div className="cart-item">

      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />

      <div className="cart-item-info">

        <h4>{item.name}</h4>

        <p className="cart-price">
          ₹{item.price}
        </p>

        <div className="cart-controls">

          <button
            className="quantity-btn"
            onClick={() => decreaseQuantity(item.id)}
          >
            −
          </button>

          <span className="quantity">
            {item.quantity}
          </span>

          <button
            className="quantity-btn"
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>

        </div>

      </div>

      <button
        className="remove-btn"
        onClick={() => removeFromCart(item.id)}
      >
        🗑
      </button>

    </div>
  );
}

export default CartItem;