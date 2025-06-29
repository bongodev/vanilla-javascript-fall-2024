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
const productGrid = document.getElementById("product-grid");
const cartItems = document.getElementById("cart-items");

// Render products
const renderProduct = (product) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="./assets/images/laptop.jpeg" class="rounded-md">
    <h3 class="font-bold text-xl mt-4">${product.name}</h3>
    <p class="">$${product.price}</p>
    <button class="bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-md text-white mt-2">Add to Cart</button>
  `;

  const button = div.querySelector("button");
  button.addEventListener("click", () =>
    handleCartButton(product.id, product.name)
  );

  productGrid.appendChild(div);
};

// Render cart items
const renderCartItems = () => {
  // Remove the previous added item
  cartItems.innerHTML = "";

  cart.map((cartItem) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${cartItem.name}</span>
      <span> x </span>
      <span>${cartItem.quantity}</span>
    `;

    cartItems.appendChild(li);
  });
};

// Handle add to cart button
// e.g. add item to cart, check for duplicate cart items
const handleCartButton = (id, name) => {
  if (checkItemIsInCart(id)) {
  } else {
    cart.push({ id: id, name: name, quantity: 1 });
  }
  renderCartItems();
};

// Check for duplicate item in cart
function checkItemIsInCart(id) {
  const item = cart.find((product) => product.id == id);

  if (item) {
    item.quantity++;
    return true;
  }

  return false;
}

products.map((product) => renderProduct(product));
