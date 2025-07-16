const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: 1500,
    image: "assets/gaming_laptop.jpeg",
    categories: ["Laptops", "Gaming"],
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 50,
    image: "./assets/wireless_mouse.jpeg",
    categories: ["Accessories", "Peripherals"],
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: 100,
    image: "./assets/mechanical_keyboard.jpeg",
    categories: ["Accessories", "Peripherals"],
  },
  {
    id: 4,
    name: "External Hard Drive",
    price: 120,
    image: "./assets/external_harddrive.jpeg",
    categories: ["Storage", "Accessories"],
  },
  {
    id: 5,
    name: "Graphics Card",
    price: 500,
    image: "./assets/graphics_card.jpeg",
    categories: ["Components", "Gaming"],
  },
  {
    id: 6,
    name: "Portable SSD",
    price: 200,
    image: "./assets/portable_ssd.jpeg",
    categories: ["Storage", "Accessories"],
  },
  {
    id: 7,
    name: "Gaming Monitor",
    price: 300,
    image: "./assets/gaming_monitor.jpeg",
    categories: ["Monitors", "Gaming"],
  },
  {
    id: 8,
    name: "All-in-One Printer",
    price: 150,
    image: "./assets/printer.jpeg",
    categories: ["Peripherals", "Printers"],
  },
];

const productGrid = document.getElementById("product-grid");
const cartList = document.getElementById("cart-items");

const getProductImage = (product) => {
    const productImage = document.createElement("img");
    productImage.className = "w-full object-cover aspect-[4/3] rounded";
    productImage.src = product.image;
    productImage.alt = product.name;

    return productImage;
}

const getProductName = (name) => {
    const productName = document.createElement("h3");
    productName.className = "text-lg font-semibold";
    productName.innerText = name;
    
    return productName;
}

const getProductPrice = (price) => {
  const productPrice = document.createElement("p");
  productPrice.classList = "text-gray-700";
  productPrice.innerText = `$${price}`;

  return productPrice;
}

const cart = [];
const addProductToCart = (product) => {
  // Check if the product is already in the cart
  const ProductIndex = cart.findIndex((item) => item.id === product.id);  
  if (ProductIndex !== -1) {
    // If it exists, increment the quantity   
    cart[ProductIndex].quantity += 1;
  } else {
    // If it doesn't exist, add it to the cart with quantity 1  
    product.quantity = 1; // Initialize quantity
  }
  // Add the product to the cart
  if (!cart.includes(product)) {
    cart.push(product);
  }
};


const getCartItem = (cartItem) => {
  const cartListItem = document.createElement("li");
  const removeButton = document.createElement("button");
  removeButton.className = "ml-2 text-red-500 hover:text-red-700";
  removeButton.innerText = "Remove";
  removeButton.addEventListener("click", () => {
    const index = cart.indexOf(cartItem);
    if (index > -1) {
      cart.splice(index, 1); // Remove the item from the cart
      renderCart(cart); // Re-render the cart
    }
    
 });
  
   cartListItem.innerText = `${cartItem.name} x ${cartItem.quantity} - $${cartItem.price * cartItem.quantity}`;
   cartListItem.appendChild(removeButton);
  return cartListItem;
};

const renderCart = (cart) => {
  cartList.innerHTML = ""; // Clear previous items
  cart.forEach((cartItem) => {
    const cartListItem = getCartItem(cartItem);
    cartList.appendChild(cartListItem);
  });
  updateTotalPrice(); // Update the total price after rendering the cart
};

const totalPriceElement = document.getElementById("total-price");

const updateTotalPrice = () => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  totalPriceElement.innerText = `Total: $${totalPrice}`;
};

const getAddToCartButton = (product) => {
  const addToCartButton = document.createElement("button");
  addToCartButton.className = "mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition";
  addToCartButton.innerText = "Add to Cart";

  addToCartButton.addEventListener("click", () => {
    addProductToCart(product);
    renderCart(cart);
  });
  return addToCartButton;
};

// const totalPriceElement = document.getElementById("total-price");
// const updateTotalPrice = () => {
//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   totalPriceElement.innerText = `Total: $${totalPrice}`;
// }

const getCategoryButton = (category) => {
  const categoryButton = document.createElement("button");  
  categoryButton.className = "bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded gap-2 m-1";
  categoryButton.innerText = category;  
  categoryButton.addEventListener("click", () => {
    categoryButton.classList.toggle("bg-blue-500");
  });
  return categoryButton;
};

const applyFiltersBtn = document.getElementById("apply-filters-btn");
applyFiltersBtn.addEventListener("click", () => {
  const selectedCategories = Array.from(document.querySelectorAll("#category-filters button.bg-blue-500"))
    .map((button) => button.innerText); 
  const filteredProducts = products.filter((product) =>
    product.categories.some((category) => selectedCategories.includes(category))
  );
  renderProducts(filteredProducts);
});

const clearFiltersBtn = document.getElementById("clear-filters-btn");
clearFiltersBtn.addEventListener("click", () => { 
  const categoryButtons = document.querySelectorAll("#category-filters button");
  categoryButtons.forEach((button) => {
    button.classList.remove("bg-blue-500");
  });
  renderProducts(products); // Reset to show all products
  filters = []; // Clear the filters array
});


const filterCategories = () => {
  const categories = new Set();
  products.forEach((product) => {
    product.categories.forEach((category) => {  
      categories.add(category);
    });
  });
  const categoryButtonsContainer = document.getElementById("category-filters");
  categoryButtonsContainer.innerHTML = ""; // Clear previous buttons
  categories.forEach((category) => {
    const categoryButton = getCategoryButton(category);
    categoryButtonsContainer.appendChild(categoryButton);
  });
};


const getProductCard = (product) => {
  const productCard = document.createElement("div");
  productCard.className = "bg-white p-4 rounded shadow h-full flex flex-col mt-2";
  
  const productImage = getProductImage(product);
  const productName = getProductName(product.name);
  const productPrice = getProductPrice(product.price);
  const addToCartButton = getAddToCartButton(product);

productCard.append(productImage, productName, productPrice, addToCartButton);

  return productCard;
};

const renderProducts = (products) => {
  const productCards = products.map((product) => {
    const productCard = getProductCard(product)
    return productCard;
  });

  productGrid.innerHTML = "";
  productGrid.append(...productCards);
};

renderProducts(products);
filterCategories();

const checkoutButton = document.getElementById("checkout-btn");
checkoutButton.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  alert(`Thank you for your purchase! Your total is $${totalAmount}.`);
  
  // Clear the cart after checkout
  cart.length = 0;
  renderCart(cart);
});

