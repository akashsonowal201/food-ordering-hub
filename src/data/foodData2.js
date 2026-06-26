const foodData2 = [
  // BIRYANI

  {
    id: 19,
    name: "Chicken Boneless Dum Biryani",
    category: "Biryani",
    price: 339,
    image: "/images/biryani-drinks-desserts/Chicken-Boneless-Dum-Biryani.jpg",
    description: "Tender boneless chicken cooked with fragrant basmati rice and aromatic spices.",
    rating: 4.8,
    reviews: 274,
    deliveryTime: "30-40 min",
    isVeg: false,
    bestseller: true
  },

  {
    id: 20,
    name: "Chicken Hyderabadi Dum Biryani",
    category: "Biryani",
    price: 329,
    image: "/images/biryani-drinks-desserts/Chicken-Hyderabadi-Dum-Biryani.jpg",
    description: "Traditional Hyderabadi-style dum biryani slow cooked with rich spices.",
    rating: 4.9,
    reviews: 418,
    deliveryTime: "30-40 min",
    isVeg: false,
    bestseller: true
  },

  {
    id: 21,
    name: "Egg Hyderabadi Dum Biryani",
    category: "Biryani",
    price: 249,
    image: "/images/biryani-drinks-desserts/Egg-Hyderabadi-Dum-Biryani.jpg",
    description: "Classic dum biryani served with perfectly cooked eggs.",
    rating: 4.5,
    reviews: 187,
    deliveryTime: "25-35 min",
    isVeg: false,
    bestseller: false
  },

  {
    id: 22,
    name: "Mutton Biryani Combo",
    category: "Biryani",
    price: 459,
    image: "/images/biryani-drinks-desserts/Mutton-Biryani-Combo.jpg",
    description: "Premium mutton biryani served with raita and salan.",
    rating: 4.9,
    reviews: 361,
    deliveryTime: "35-45 min",
    isVeg: false,
    bestseller: true
  },

  {
    id: 23,
    name: "Paneer Biryani Combo",
    category: "Biryani",
    price: 269,
    image: "/images/biryani-drinks-desserts/Paneer-Biryani-Combo.jpg",
    description: "Flavorful paneer biryani served with raita and fresh salad.",
    rating: 4.6,
    reviews: 154,
    deliveryTime: "25-35 min",
    isVeg: true,
    bestseller: false
  },

  {
    id: 24,
    name: "Paneer Hyderabadi Dum Biryani",
    category: "Biryani",
    price: 279,
    image: "/images/biryani-drinks-desserts/Paneer-Hyderabadi-Dum-Biryani.jpg",
    description: "Soft paneer cubes layered with aromatic basmati rice and spices.",
    rating: 4.7,
    reviews: 201,
    deliveryTime: "30-35 min",
    isVeg: true,
    bestseller: true
  },
  // DRINKS

  {
    id: 25,
    name: "BA's Best Pina Colada",
    category: "Drinks",
    price: 169,
    image: "/images/biryani-drinks-desserts/BAs-Best-Pina-Colada.webp",
    description: "Creamy pineapple and coconut mocktail served chilled.",
    rating: 4.7,
    reviews: 132,
    deliveryTime: "10-15 min",
    isVeg: true,
    bestseller: true
  },

  {
    id: 26,
    name: "Beergarita",
    category: "Drinks",
    price: 189,
    image: "/images/biryani-drinks-desserts/Beergarita.webp",
    description: "Refreshing citrus-inspired chilled mocktail.",
    rating: 4.5,
    reviews: 91,
    deliveryTime: "10-15 min",
    isVeg: true,
    bestseller: false
  },

  {
    id: 27,
    name: "Fresh Tomato Michelada",
    category: "Drinks",
    price: 159,
    image: "/images/biryani-drinks-desserts/Fresh-Tomato-Michelada.webp",
    description: "Tangy tomato-based refreshing beverage with herbs.",
    rating: 4.6,
    reviews: 118,
    deliveryTime: "10-15 min",
    isVeg: true,
    bestseller: false
  },

  {
    id: 28,
    name: "Mai Tai",
    category: "Drinks",
    price: 179,
    image: "/images/biryani-drinks-desserts/Mai-Tai.webp",
    description: "Tropical fruity drink with citrus flavors.",
    rating: 4.8,
    reviews: 210,
    deliveryTime: "10-15 min",
    isVeg: true,
    bestseller: true
  },

  {
    id: 29,
    name: "Mint Julep",
    category: "Drinks",
    price: 149,
    image: "/images/biryani-drinks-desserts/Mint-Julep.webp",
    description: "Refreshing mint cooler served over crushed ice.",
    rating: 4.7,
    reviews: 142,
    deliveryTime: "10-15 min",
    isVeg: true,
    bestseller: true
  },

  {
    id: 30,
    name: "Paper Fleet",
    category: "Drinks",
    price: 189,
    image: "/images/biryani-drinks-desserts/Paper-Fleet.webp",
    description: "Signature house special chilled beverage.",
    rating: 4.5,
    reviews: 88,
    deliveryTime: "10-15 min",
    isVeg: true,
    bestseller: false
  },

  {
    id: 31,
    name: "The Iciest Strawberry Daiquiri",
    category: "Drinks",
    price: 199,
    image: "/images/biryani-drinks-desserts/The-Iciest-Strawberry-Daiquiri.webp",
    description: "Frozen strawberry drink bursting with fruity flavor.",
    rating: 4.8,
    reviews: 201,
    deliveryTime: "10-15 min",
    isVeg: true,
    bestseller: true
  },

  {
    id: 32,
    name: "Vegan Coquito",
    category: "Drinks",
    price: 179,
    image: "/images/biryani-drinks-desserts/Vegan-Coquito.webp",
    description: "Creamy dairy-free tropical coconut beverage.",
    rating: 4.6,
    reviews: 117,
    deliveryTime: "10-15 min",
    isVeg: true,
    bestseller: false
  },

  {
    id: 33,
    name: "Watermelon Cucumber Slushy",
    category: "Drinks",
    price: 169,
    image: "/images/biryani-drinks-desserts/Watermelon-Cucumber-Slushy.webp",
    description: "Refreshing watermelon and cucumber slushy perfect for summer.",
    rating: 4.8,
    reviews: 184,
    deliveryTime: "10-15 min",
    isVeg: true,
    bestseller: true
  },
  // DESSERTS
  {
    id: 34,
    name: "Assorted Cupcake Indulgence Box",
    category: "Dessert",
    price: 349,
    image: "/images/biryani-drinks-desserts/Assorted-Cupcake-Indulgence-Box.webp",
    description: "A delightful assortment of freshly baked gourmet cupcakes.",
    rating: 4.9,
    reviews: 236,
    deliveryTime: "20-25 min",
    isVeg: true,
    bestseller: true
  },

  {
    id: 35,
    name: "Banoffee Tart",
    category: "Dessert",
    price: 199,
    image: "/images/biryani-drinks-desserts/Banoffee-Tart.webp",
    description: "Classic banana and toffee tart with whipped cream.",
    rating: 4.8,
    reviews: 163,
    deliveryTime: "20-25 min",
    isVeg: true,
    bestseller: true
  },

  {
    id: 36,
    name: "Choco Caramel Tart",
    category: "Dessert",
    price: 219,
    image: "/images/biryani-drinks-desserts/Choco-Caramel-Tart.webp",
    description: "Rich chocolate tart filled with smooth caramel.",
    rating: 4.8,
    reviews: 174,
    deliveryTime: "20-25 min",
    isVeg: true,
    bestseller: true
  },

  {
    id: 37,
    name: "Chocolate Mousse Jar",
    category: "Dessert",
    price: 189,
    image: "/images/biryani-drinks-desserts/Chocolate-Mousse-Jar.webp",
    description: "Creamy chocolate mousse layered inside a dessert jar.",
    rating: 4.9,
    reviews: 301,
    deliveryTime: "20-25 min",
    isVeg: true,
    bestseller: true
  },

  {
    id: 38,
    name: "Classic Chocolate Truffle Pastry",
    category: "Dessert",
    price: 169,
    image: "/images/biryani-drinks-desserts/Classic-Chocolate-Truffle-Pastry.webp",
    description: "Soft chocolate sponge layered with rich truffle cream.",
    rating: 4.8,
    reviews: 285,
    deliveryTime: "20-25 min",
    isVeg: true,
    bestseller: true
  },

  {
    id: 39,
    name: "Kunafa Chocolate Tub",
    category: "Dessert",
    price: 259,
    image: "/images/biryani-drinks-desserts/Kunafa-Chocolate-Tub.webp",
    description: "Middle Eastern kunafa paired with creamy chocolate filling.",
    rating: 4.9,
    reviews: 214,
    deliveryTime: "20-25 min",
    isVeg: true,
    bestseller: true
  },

  {
    id: 40,
    name: "Lemon Tart",
    category: "Dessert",
    price: 179,
    image: "/images/biryani-drinks-desserts/Lemon-Tart.webp",
    description: "Tangy lemon curd baked inside a buttery tart shell.",
    rating: 4.6,
    reviews: 138,
    deliveryTime: "20-25 min",
    isVeg: true,
    bestseller: false
  },

  {
    id: 41,
    name: "Strawberry Tart",
    category: "Dessert",
    price: 189,
    image: "/images/biryani-drinks-desserts/Strawberry-Tart.webp",
    description: "Fresh strawberries layered over smooth vanilla cream.",
    rating: 4.7,
    reviews: 156,
    deliveryTime: "20-25 min",
    isVeg: true,
    bestseller: true
  },

  {
    id: 42,
    name: "Tiramisu Jar",
    category: "Dessert",
    price: 229,
    image: "/images/biryani-drinks-desserts/Tiramisu-Jar.webp",
    description: "Classic Italian tiramisu served in a convenient dessert jar.",
    rating: 4.9,
    reviews: 329,
    deliveryTime: "20-25 min",
    isVeg: true,
    bestseller: true
  }
];

export default foodData2;