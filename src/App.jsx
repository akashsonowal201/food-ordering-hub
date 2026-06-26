import { useState, useEffect } from "react";
import CartSidebar from "./components/CartSidebar";
import CheckoutModal from "./components/CheckoutModal";
import "./App.css";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import MenuGrid from "./components/MenuGrid";

import foodData1 from "./data/foodData1";
import foodData2 from "./data/foodData2";

function App() {

  const foodData = [...foodData1, ...foodData2];

  const [searchText, setSearchText] = useState("");

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  const filteredFoods = foodData.filter((food) => {
    const search = searchText.toLowerCase();

    const matchesSearch =
      food.name.toLowerCase().includes(search) ||
      food.category.toLowerCase().includes(search) ||
      food.description.toLowerCase().includes(search);

      const matchesCategory =
        selectedCategory === "All" ||
        food.category === selectedCategory;

      return matchesSearch && matchesCategory;
  });

  function addToCart(food) {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === food.id);

      if (existingItem) {
        return prevCart.map(item =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...food, quantity: 1, id: food.id }];
    });
}

  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  }
  function decreaseQuantity(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }
  function removeFromCart(id) {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  }

  const totalItems = cart.reduce(
  (total, item) => total + item.quantity,
  0
);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function openCheckout() {
    setIsCheckoutOpen(true);
  }

  return (
    <div className="app">

    <Navbar
      totalItems={totalItems}
      openCart={() => setIsCartOpen(true)}
    />

      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="main-content">

        <MenuGrid
          foods={filteredFoods}
          cart={cart}
          addToCart={addToCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />

        {isCartOpen && (
          <CartSidebar
            cart={cart}
            totalItems={totalItems}
            totalPrice={totalPrice}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
            openCheckout={openCheckout}
            closeCart={() => setIsCartOpen(false)}
          />
        )}
      </div>
        <CheckoutModal
          isOpen={isCheckoutOpen}
          cart={cart}
          totalItems={totalItems}
          totalPrice={totalPrice}
          closeModal={() => setIsCheckoutOpen(false)}
        />

    </div>
  );
}

export default App;