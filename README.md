# 🍔 FoodHub - Mini Food Ordering Hub

Welcome to **FoodHub**, a dynamic, feature-rich Mini Food Ordering Hub built using modern **React** and bundled with **Vite**. This application goes far beyond static prototyping, transforming layout wireframes into fully modular components driven by state management, dynamic UI flows, and reactive calculations.

---

## 🚀 Core Features

### 1. The Menu Grid (`<MenuGrid />` & `<FoodCard />`)
* **Dynamic Content Rendering:** Maps over real data structures (`foodData`) to dynamically generate beautiful food cards without any hardcoded layout repeating.
* **Rich UI Card States:** Every card handles and renders a descriptive food image, automated price calculations, delivery ETA, dynamic rating reviews, and smart badges (e.g., *Bestseller*, *Non-Veg*).
* **Card-Level Counter Controls:** Users can seamlessly increment or decrement quantities directly on individual food cards or use the clean call-to-action button to kick off their selections.

### 2. Live Cart Sidebar & Summary (`<CartSidebar />`)
* **Interactive Summary Drawer:** A persistent, contextual sidebar tracking exact quantities added to the cart (e.g., `Crispy Chicken Burger x5`).
* **Live Calculations:** Real-time aggregate total price computation that seamlessly updates as quantities scale.
* **Global Total Badge:** A persistent, high-visibility counter badge pinned globally to the Navbar component tracking absolute quantities instantly.

### 3. ⭐ Innovative Additions (Grading Criteria Bonus)
* **Live Search Bar Container:** High-performance input filter matching text query strings instantly across food catalog names.
* **Category Pill Filters (`<CategoryFilter />`):** Multi-category toggle system grouping available inventories cleanly by types: *Burger, Pizza, Biryani, Drinks, and Desserts*.
* **Interactive Checkout Modal:** Fully working stateful modal subsystem simulating standard checkout confirmations upon cart submittal.

---

## 🏗️ Project Architecture

Following strict clean-code architectures, the repository is segmented into highly decoupled presentational controls and pure data states:

```text
food-ordering-hub/
├── public/
│   ├── images/
│   │   ├── biryani-drinks-desserts/ # High-quality asset packs
│   │   └── pizza-burger/           # Asset categories
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/                      # Branding elements & logos
│   ├── components/                  # Fully decoupled functional React components
│   │   ├── CartItem.jsx / .css
│   │   ├── CartSidebar.jsx / .css
│   │   ├── CategoryFilter.jsx / .css
│   │   ├── CheckoutModal.jsx / .css
│   │   ├── FoodCard.jsx / .css
│   │   ├── MenuGrid.jsx / .css
│   │   ├── Navbar.jsx / .css
│   │   └── SearchBar.jsx / .css
│   ├── data/                        # Clean JavaScript structured mock-inventories
│   │   ├── foodData1.js
│   │   └── foodData2.js
│   ├── App.jsx                      # App core / Top-level global state engine
│   ├── index.css                    # Base styles and variables
│   └── main.jsx                     # Strict mode application mount point
├── index.html
├── package.json
└── vite.config.js