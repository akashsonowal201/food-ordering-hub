import './CheckoutModal.css'
function CheckoutModal({
  isOpen,
  cart,
  totalItems,
  totalPrice,
  closeModal
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">

      <div className="checkout-modal">

        <h2>Order Summary</h2>

        <div className="checkout-items">

          {cart.map((item) => (
            <div
              className="checkout-item"
              key={item.id}
            >
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}

        </div>

        <hr />

        <div className="checkout-total">

          <p>Total Items: {totalItems}</p>

          <h3>Total: ₹{totalPrice}</h3>

        </div>

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={closeModal}
          >
            Cancel
          </button>

          <button
            className="place-order-btn"
            onClick={() => {
              alert("🎉 Order Placed Successfully!");
              closeModal();
            }}
          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
}

export default CheckoutModal;