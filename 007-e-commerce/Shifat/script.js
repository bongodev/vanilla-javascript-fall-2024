const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: 1500,
    image: "./assets/images/product-placeholder.webp",
    categories: ["Laptops", "Gaming"],
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 50,
    image: "./assets/images/product-placeholder.webp",
    categories: ["Accessories", "Peripherals"],
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: 100,
    image: "./assets/images/product-placeholder.webp",
    categories: ["Accessories", "Peripherals"],
  },
  {
    id: 4,
    name: "External Hard Drive",
    price: 120,
    image: "./assets/images/product-placeholder.webp",
    categories: ["Storage", "Accessories"],
  },
  {
    id: 5,
    name: "Graphics Card",
    price: 500,
    image: "./assets/images/product-placeholder.webp",
    categories: ["Components", "Gaming"],
  },
  {
    id: 6,
    name: "Portable SSD",
    price: 200,
    image: "./assets/images/product-placeholder.webp",
    categories: ["Storage", "Accessories"],
  },
  {
    id: 7,
    name: "Gaming Monitor",
    price: 300,
    image: "./assets/images/product-placeholder.webp",
    categories: ["Monitors", "Gaming"],
  },
  {
    id: 8,
    name: "All-in-One Printer",
    price: 150,
    image: "./assets/images/product-placeholder.webp",
    categories: ["Peripherals", "Printers"],
  },
];

let cart = [];
let filterTags = [];
const productGrid = document.getElementById("product-grid");
const cartItems = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

function renderProducts() {
  let filteredProducts = [...products];

  const productCards = filteredProducts.map((product) => {
    return createProductCard(product);
  });

  productGrid.innerHTML = "";
  productGrid.append(...productCards);
}

// Create product cart
const createProductCard = (product) => {
  const div = document.createElement("div");
  div.className = "bg-white rounded-md";
  div.innerHTML = `
    <img src="./assets/images/laptop.jpeg" class="rounded-md">
    <div class="px-4 pb-4">
      <h3 class="font-bold text-xl mt-4">${product.name}</h3>
      <p class="">$${product.price}</p>
      <button class="bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-md text-white mt-2">Add to Cart</button>
    </div>
  `;

  const button = div.querySelector("button");
  button.addEventListener("click", () =>
    handleCartButton(product.id, product.name, product.price)
  );

  return div;
};

// Render cart items
const renderCartItems = () => {
  cart = localStorageGetItem();

  // Remove the previous added item
  cartItems.innerHTML = "";

  cart.forEach((cartItem) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${cartItem.name}</span>
      <span> x </span>
      <span>${cartItem.quantity}</span>
      <span onclick="localStorageDeleteItem('${cartItem.id}')" class="text-red-500 cursor-pointer">Remove</span>
    `;

    cartItems.appendChild(li);
  });

  calculateTotalPrice();
};

// Handle add to cart button
// e.g. add item to cart, check for duplicate cart items
const handleCartButton = (id, name, price) => {
  if (!checkItemIsInCart(id)) {
    cart.push({ id: id, name: name, price: price, quantity: 1 });
    localStorageSetItem({ id: id, name: name, price: price, quantity: 1 });
  }
  renderCartItems();
};

// Calculate total price
function calculateTotalPrice() {
  const totalPrice = cart.reduce((acc, currItem) => {
    return acc + currItem.price * currItem.quantity;
  }, 0);

  totalPriceElement.innerText = `Total: $${totalPrice}`;
}

// Check for duplicate item in cart
function checkItemIsInCart(id) {
  const item = cart.find((product) => product.id == id);

  if (item) {
    item.quantity++;
    localStorageUpdateItem(id);
    return true;
  }

  return false;
}

// *********** LOCAL STORAGE ***********

function localStorageGetItem() {
  const getCart = localStorage.getItem("cart");

  if (getCart) {
    return JSON.parse(getCart);
  }

  return [];
}

function localStorageSetItem(cartItem) {
  const getCart = localStorageGetItem();
  const newCart = [...getCart, cartItem];
  localStorage.setItem("cart", JSON.stringify(newCart));
}

function localStorageDeleteItem(id) {
  const cart = localStorageGetItem();

  const updatedCart = cart
    .map((item) => {
      if (item.id == id) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return null;
        }
      }
      return item;
    })
    .filter(Boolean);

  localStorage.setItem("cart", JSON.stringify(updatedCart));

  renderCartItems();
  calculateTotalPrice();
}

function localStorageUpdateItem(id) {
  const cart = localStorageGetItem();

  const updatedCart = cart.map((item) => {
    if (item.id == id) {
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    }
    return item;
  });

  localStorage.setItem("cart", JSON.stringify(updatedCart));
}

renderProducts();
renderCartItems();

// TODO: Work on filter functionality
