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
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

const getCartItemsFromLocalStorage = () => {
  const cartItems = JSON.parse(localStorage.getItem(CART_KEY));
  if (!cartItems) {
    return [];
  }
  console.log(cartItems);
  return cartItems;
};

const cart = getCartItemsFromLocalStorage();

const addProductToCart = (product) => {
  const productIndexInCart = cart.findIndex(
    (cartItem) => cartItem.id === product.id
  );
  // the product has not been added to the cart yet
  if (productIndexInCart === -1) {
    cart.push({
      ...product,
      quantity: 1,
    });
    return;
  }

  cart[productIndexInCart].quantity++;
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

const renderCart = (cart) => {
  const cartListItems = cart.map((cartItem) => {
    const cartListItem = getCartListItem(cartItem);
    return cartListItem;
  });

  cartList.innerHTML = "";
  cartList.append(...cartListItems);

  const totalPrice = cart.reduce((acc, currItem) => {
    return acc + currItem.price * currItem.quantity;
  }, 0);

  totalPriceComponent.innerText = `Total = $${totalPrice}`;

  saveCartItemsToLocalStorage(cart);
};
///////////////////////////

///////////////////////////
const getProductImageComponent = (product) => {
  const productImageComponent = document.createElement("img");
  productImageComponent.className = "w-full h-48 object-cover mb-4";
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
  productPriceComponent.innerText = `$${productPrice}`;
  return productPriceComponent;
};

const getAddToCartBtn = (product) => {
  const addToCartBtn = document.createElement("button");
  addToCartBtn.className =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2";
  addToCartBtn.innerText = "Add to Cart";
  addToCartBtn.addEventListener("click", () => {
    addProductToCart(product);
    renderCart(cart);
  });
  return addToCartBtn;
};

const getProductCard = (product) => {
  const productCard = document.createElement("div");
  productCard.className = "bg-white p-4 rounded shadow flex flex-col";

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

const renderProducts = (products) => {
  let filteredProducts = [...products];

  if (filters.length > 0) {
    filteredProducts = products.filter((product) => {
      if (product.categories.some((category) => filters.includes(category))) {
        return true;
      }
      return false;
    });
  }

  const productCards = filteredProducts.map((product) => {
    const productCard = getProductCard(product);
    return productCard;
  });

  productGrid.innerHTML = "";
  productGrid.append(...productCards);
};

////////////////////////////////////
const FILTER_KEY = " e-commerce-filter";

const saveFiltersToLocalStorage = (filters) => {
  localStorage.setItem(FILTER_KEY, JSON.stringify(filters));
};

const getFiltersFromLocalStorage = () => {
  const savedFilters = JSON.parse(localStorage.getItem(FILTER_KEY));
  if (!savedFilters) {
    return [];
  }
  return savedFilters;
};

let filters = getFiltersFromLocalStorage();

const getCategoryBtn = (categoryName) => {
  const categoryBtn = document.createElement("button");
  categoryBtn.className =
    "hover:bg-gray-300 font-semibold py-2 px-4 rounded mr-2 mb-2 bg-gray-200 text-gray-800";

  if (filters.includes(categoryName)) {
    categoryBtn.classList.add("bg-blue-600", "text-white");
    categoryBtn.classList.remove("bg-gray-200", "text-gray-800");
  } else {
    categoryBtn.classList.add("bg-gray-200", "text-gray-800");
    categoryBtn.classList.remove("bg-blue-600", "text-white");
  }

  categoryBtn.innerText = categoryName;

  categoryBtn.addEventListener("click", () => {
    const filterIndex = filters.findIndex((filter) => filter === categoryName);
    if (filterIndex === -1) {
      filters.push(categoryName);
      categoryBtn.classList.add("bg-blue-600", "text-white");
      categoryBtn.classList.remove("bg-gray-200", "text-gray-800");
    } else {
      filters.splice(filterIndex, 1);
      categoryBtn.classList.add("bg-gray-200", "text-gray-800");
      categoryBtn.classList.remove("bg-blue-600", "text-white");
    }
    saveFiltersToLocalStorage(filters);
  });
  return categoryBtn;
};

const renderCategories = (products) => {
  const categories = Array.from(
    new Set(products.map((product) => product.categories).flat())
  );

  const categoryBtns = categories.map((category) => {
    const categoryBtn = getCategoryBtn(category);
    return categoryBtn;
  });

  categoryContainer.innerHTML = "";
  categoryContainer.append(...categoryBtns);
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
////////////////////////////////////

renderProducts(products);
renderCart(cart);
renderCategories(products);
