import CartItem from "./CartItem";
import './CartSidebar.css'

function CartSidebar({
  cart,
  totalItems,
  totalPrice,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  openCheckout,
  closeCart
}) {
  return (
    <aside className="cart-sidebar">

      <div className="cart-header">

        <h2 className="cart-heading">
          🛒 Cart ({totalItems})
        </h2>

        <button
          className="close-cart"
          onClick={closeCart}
        >
          ✕
        </button>

      </div>

      <div className="cart-items">

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <p>Add some delicious food 🍕</p>
          </div>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          ))
        )}

      </div>

      <div className="cart-summary">

        <div className="summary-row">
          <span>Total Items</span>
          <span>{totalItems}</span>
        </div>

        <div className="summary-row">
          <span>Total Price</span>
          <span>₹{totalPrice}</span>
        </div>

        <button
          className="checkout-btn"
          onClick={openCheckout}
          disabled={cart.length === 0}
        >
          Proceed to Checkout
        </button>

      </div>

    </aside>
  );
}

export default CartSidebar;