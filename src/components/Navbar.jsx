import "./Navbar.css";

function Navbar({ totalItems, openCart }) {
  return (
    <header className="navbar">

      <div className="logo">
        <h1>🍽️ FoodHub</h1>
        <p>Fresh & Delicious</p>
      </div>

      <button
        className="cart-icon"
        onClick={openCart}
      >
        🛒

        {totalItems > 0 && (
          <span className="cart-badge">
            {totalItems}
          </span>
        )}
      </button>

    </header>
  );
}

export default Navbar;