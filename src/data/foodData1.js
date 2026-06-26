const foodData1 = [
  // BURGERS
  
  {
    id: 1,
    name: "Chicken Bhurji Burger",
    category: "Burger",
    price: 179,
    image: "/images/pizza-burger/Chicken-Bhurji-Burger.avif",
    description: "Juicy grilled chicken patty loaded with spicy bhurji, lettuce and creamy mayo.",
    rating: 4.7,
    reviews: 132,
    deliveryTime: "20-25 min",
    isVeg: false,
    bestseller: true
  },

  {
    id: 2,
    name: "Crispy Chicken Burger",
    category: "Burger",
    price: 169,
    image: "/images/pizza-burger/Crispy-Chicken-Burger.avif",
    description: "Golden crispy chicken fillet served with fresh lettuce and signature sauce.",
    rating: 4.6,
    reviews: 118,
    deliveryTime: "20-25 min",
    isVeg: false,
    bestseller: false
  },

  {
    id: 3,
    name: "Crispy Chicken Burger Peri Peri Meal",
    category: "Burger",
    price: 259,
    image: "/images/pizza-burger/Crispy-Chicken-Burger-Peri-Peri-Meal.avif",
    description: "Spicy peri peri chicken burger served as a complete meal.",
    rating: 4.8,
    reviews: 245,
    deliveryTime: "25-30 min",
    isVeg: false,
    bestseller: true
  },

  {
    id: 4,
    name: "Grilled Chicken Burger",
    category: "Burger",
    price: 199,
    image: "/images/pizza-burger/Grilled-Chicken-Burger.avif",
    description: "Tender grilled chicken breast with fresh vegetables and smoky sauce.",
    rating: 4.7,
    reviews: 164,
    deliveryTime: "20-25 min",
    isVeg: false,
    bestseller: true
  },

  {
    id: 5,
    name: "McAloo Tikki Burger",
    category: "Burger",
    price: 119,
    image: "/images/pizza-burger/McAloo-Tikki-Burger.avif",
    description: "Classic Indian potato tikki burger with creamy mayonnaise.",
    rating: 4.5,
    reviews: 318,
    deliveryTime: "15-20 min",
    isVeg: true,
    bestseller: true
  },

  {
    id: 6,
    name: "Non Veg Burger Duos",
    category: "Burger",
    price: 329,
    image: "/images/pizza-burger/Non-Veg-Burger-Duos.avif",
    description: "Two delicious chicken burgers perfect for sharing.",
    rating: 4.8,
    reviews: 141,
    deliveryTime: "25-30 min",
    isVeg: false,
    bestseller: false
  },

  {
    id: 7,
    name: "Veg Nikku Singh Burger",
    category: "Burger",
    price: 149,
    image: "/images/pizza-burger/Veg-Nikku-Singh-Burger.avif",
    description: "Crunchy veggie burger topped with fresh onions and spicy sauce.",
    rating: 4.4,
    reviews: 97,
    deliveryTime: "15-20 min",
    isVeg: true,
    bestseller: false
  },
  // PIZZAS  
  {
    id: 8,
    name: "Chicken Dominator Pizza",
    category: "Pizza",
    price: 459,
    image: "/images/pizza-burger/Chicken-Dominator-pizza.png",
    description: "Loaded with chicken toppings and extra cheese for meat lovers.",
    rating: 4.9,
    reviews: 462,
    deliveryTime: "30-35 min",
    isVeg: false,
    bestseller: true
  },

  {
    id: 9,
    name: "Chicken Golden Delight Pizza",
    category: "Pizza",
    price: 419,
    image: "/images/pizza-burger/Chicken-Golden-Delight-Pizza.png",
    description: "Golden baked pizza topped with juicy chicken and mozzarella.",
    rating: 4.8,
    reviews: 238,
    deliveryTime: "30-35 min",
    isVeg: false,
    bestseller: true
  },

  {
    id: 10,
    name: "Chicken Pepperoni Pizza",
    category: "Pizza",
    price: 449,
    image: "/images/pizza-burger/Chicken-Pepperoni-pizza.png",
    description: "Classic pepperoni pizza topped with premium chicken slices.",
    rating: 4.9,
    reviews: 529,
    deliveryTime: "30-35 min",
    isVeg: false,
    bestseller: true
  },

  {
    id: 11,
    name: "Chicken Sausage Pizza",
    category: "Pizza",
    price: 399,
    image: "/images/pizza-burger/CHICKEN-SAUSAGE-pizza.png",
    description: "Delicious pizza loaded with seasoned chicken sausages.",
    rating: 4.7,
    reviews: 198,
    deliveryTime: "30-35 min",
    isVeg: false,
    bestseller: false
  },

  {
    id: 12,
    name: "Double Cheese Margherita Pizza",
    category: "Pizza",
    price: 349,
    image: "/images/pizza-burger/Double-Cheese-Margherita-pizza.jpg",
    description: "A cheesy delight with double mozzarella and rich tomato sauce.",
    rating: 4.8,
    reviews: 389,
    deliveryTime: "25-30 min",
    isVeg: true,
    bestseller: true
  },

  {
    id: 13,
    name: "Indi Chicken Tikka Pizza",
    category: "Pizza",
    price: 449,
    image: "/images/pizza-burger/Indi-Chicken-Tikka-pizza.png",
    description: "Indian-style chicken tikka with capsicum and spicy seasoning.",
    rating: 4.9,
    reviews: 346,
    deliveryTime: "30-35 min",
    isVeg: false,
    bestseller: true
  },

  {
    id: 14,
    name: "Non Veg Supreme Pizza",
    category: "Pizza",
    price: 479,
    image: "/images/pizza-burger/Non-Veg-Supreme-pizza.png",
    description: "Loaded with chicken, sausage and delicious premium toppings.",
    rating: 4.8,
    reviews: 302,
    deliveryTime: "30-35 min",
    isVeg: false,
    bestseller: true
  },

  {
    id: 15,
    name: "Pepper Barbecue Onion Pizza",
    category: "Pizza",
    price: 329,
    image: "/images/pizza-burger/PEPPER-BARBECUE -ONION-pizza.jpg",
    description: "Smoky barbecue sauce with onions and melted cheese.",
    rating: 4.5,
    reviews: 146,
    deliveryTime: "25-30 min",
    isVeg: true,
    bestseller: false
  },

  {
    id: 16,
    name: "Pepper Barbecue Chicken Pizza",
    category: "Pizza",
    price: 419,
    image: "/images/pizza-burger/PEPPER-BARBECUE-CHICKEN-pizaa.png",
    description: "Grilled chicken with smoky barbecue flavor and cheese.",
    rating: 4.8,
    reviews: 278,
    deliveryTime: "30-35 min",
    isVeg: false,
    bestseller: true
  },

  {
    id: 17,
    name: "Peppy Paneer Pizza",
    category: "Pizza",
    price: 359,
    image: "/images/pizza-burger/Peppy-Paneer-pizza.jpg",
    description: "Soft paneer cubes with capsicum, onions and spicy seasoning.",
    rating: 4.7,
    reviews: 226,
    deliveryTime: "25-30 min",
    isVeg: true,
    bestseller: true
  },
];

export default foodData1;