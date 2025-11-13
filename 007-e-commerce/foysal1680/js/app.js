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

const productGrid = document.getElementById("product-grid");
const cartList = document.getElementById("cart-items");
const totalPriceComponent = document.getElementById("total-price");
const categoryContainer = document.getElementById("category-filters");
const applyFiltersBtn = document.getElementById("apply-filters-btn");
const clearFiltersBtn = document.getElementById("clear-filters-btn");

///////////////////////////
const CART_KEY = "e-commerce-cart";

const saveCartItemsToLocalStorage = (cart) => {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error("Failed to save cart to localStorage", e);
  }
};

const getCartItemsFromLocalStorage = () => {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch (e) {
    console.warn(
      "Could not parse cart from localStorage, returning empty array.",
      e
    );
    return [];
  }
};

const cart = getCartItemsFromLocalStorage();

const addProductToCart = (product) => {
  const productIndexInCart = cart.findIndex(
    (cartItem) => cartItem.id === product.id
  );

  if (productIndexInCart === -1) {
    cart.push({
      ...product,
      quantity: 1,
    });
    renderCart(cart);
    return;
  }

  cart[productIndexInCart].quantity++;
  renderCart(cart);
};

const removeCartItem = (cartItemToRemove) => {
  const cartItemIndex = cart.findIndex(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (cartItemIndex === -1) {
    alert(`${cartItemToRemove.name} doesn't exist in the cart!!`);
    return;
  }
  if (cart[cartItemIndex].quantity > 1) {
    cart[cartItemIndex].quantity--;
    renderCart(cart);
    return;
  }
  if (confirm("Are you sure?")) {
    cart.splice(cartItemIndex, 1);
    renderCart(cart);
  }
};

const getRemoveFromCartBtn = (cartItem) => {
  const removeFromCartBtn = document.createElement("button");
  removeFromCartBtn.className = "text-red-500 ml-2";
  removeFromCartBtn.innerText = "Remove";
  removeFromCartBtn.addEventListener("click", () => {
    removeCartItem(cartItem);
  });
  return removeFromCartBtn;
};

const getCartListItem = (cartItem) => {
  const cartListItem = document.createElement("li");
  cartListItem.innerText = `${cartItem.name} x ${cartItem.quantity}`;

  const removeFromCartBtn = getRemoveFromCartBtn(cartItem);
  cartListItem.appendChild(removeFromCartBtn);
  return cartListItem;
};

const renderCart = (cartArray) => {
  const cartListItems = cartArray.map((cartItem) => getCartListItem(cartItem));

  cartList.innerHTML = "";
  if (cartListItems.length) {
    cartList.append(...cartListItems);
  } else {
    cartList.innerHTML = "<li class='text-gray-600'>Cart is empty</li>";
  }

  const totalPrice = cartArray.reduce(
    (acc, currItem) => acc + currItem.price * currItem.quantity,
    0
  );

  totalPriceComponent.innerText = `Total = $${totalPrice.toFixed(2)}`;

  saveCartItemsToLocalStorage(cartArray);
};
///////////////////////////

///////////////////////////
const getProductImageComponent = (product) => {
  const productImageComponent = document.createElement("img");
  productImageComponent.className = "w-full mb-4";
  productImageComponent.src = product.image;
  productImageComponent.alt = product.name;
  return productImageComponent;
};

const getProductNameComponent = (productName) => {
  const productNameComponent = document.createElement("h3");
  productNameComponent.className = "text-lg font-semibold";
  productNameComponent.innerText = productName;
  return productNameComponent;
};

const getProductPriceComponent = (productPrice) => {
  const productPriceComponent = document.createElement("p");
  productPriceComponent.classList = "text-gray-700";
  productPriceComponent.innerText = `$${productPrice.toFixed(2)}`;
  return productPriceComponent;
};

const getAddToCartBtn = (product) => {
  const addToCartBtn = document.createElement("button");
  addToCartBtn.className =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2";
  addToCartBtn.innerText = "Add to Cart";
  addToCartBtn.addEventListener("click", () => {
    addProductToCart(product);
  });
  return addToCartBtn;
};

const getProductCard = (product) => {
  const productCard = document.createElement("div");
  productCard.className = "bg-white p-4 rounded shadow";

  const productImageComponent = getProductImageComponent(product);
  const productNameComponent = getProductNameComponent(product.name);
  const productPriceComponent = getProductPriceComponent(product.price);
  const addToCartBtn = getAddToCartBtn(product);

  productCard.append(
    productImageComponent,
    productNameComponent,
    productPriceComponent,
    addToCartBtn
  );

  return productCard;
};
/////////////////////////////////////////////

const renderProducts = (productsArray) => {
  let filteredProducts = [...productsArray];

  if (filters.length > 0) {
    filteredProducts = productsArray.filter((product) =>
      product.categories.some((category) => filters.includes(category))
    );
  }

  const productCards = filteredProducts.map((product) =>
    getProductCard(product)
  );

  productGrid.innerHTML = "";
  if (productCards.length) {
    productGrid.append(...productCards);
  } else {
    productGrid.innerHTML =
      '<p class="col-span-full text-center">No products found.</p>';
  }
};

////////////////////////////////////
const FILTER_KEY = "e-commerce-filter";

const saveFiltersToLocalStorage = (filtersToSave) => {
  try {
    localStorage.setItem(FILTER_KEY, JSON.stringify(filtersToSave));
  } catch (e) {
    console.error("Failed to save filters", e);
  }
};

const getFiltersFromLocalStorage = () => {
  try {
    const raw = localStorage.getItem(FILTER_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch (e) {
    return [];
  }
};

let filters = getFiltersFromLocalStorage();

const getCategoryBtn = (categoryName) => {
  const categoryBtn = document.createElement("button");
  categoryBtn.className =
    "hover:bg-gray-300 font-semibold py-2 px-4 rounded mr-2";

  categoryBtn.classList.add("text-gray-800", "bg-gray-200");

  if (filters.includes(categoryName)) {
    categoryBtn.classList.remove("bg-gray-200");
    categoryBtn.classList.add("bg-blue-600", "text-white");
  }

  categoryBtn.innerText = categoryName;

  categoryBtn.addEventListener("click", () => {
    const filterIndex = filters.findIndex((filter) => filter === categoryName);
    if (filterIndex === -1) {
      filters.push(categoryName);
    } else {
      filters.splice(filterIndex, 1);
    }
    saveFiltersToLocalStorage(filters);
    renderCategories(products);
    renderProducts(products);
  });
  return categoryBtn;
};

const renderCategories = (productsArray) => {
  const categories = Array.from(
    new Set(productsArray.map((product) => product.categories).flat())
  );

  const categoryBtns = categories.map((category) => getCategoryBtn(category));

  categoryContainer.innerHTML = "";
  if (categoryBtns.length) categoryContainer.append(...categoryBtns);
};

applyFiltersBtn.addEventListener("click", () => {
  renderProducts(products);
});

clearFiltersBtn.addEventListener("click", () => {
  filters = [];
  saveFiltersToLocalStorage(filters);
  renderCategories(products);
  renderProducts(products);
});

renderCategories(products);
renderProducts(products);
renderCart(cart);
