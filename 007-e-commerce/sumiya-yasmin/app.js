const products = [
  {
    id: 1,
    name: 'Gaming Laptop',
    price: 1500,
    image: './images/laptop-with-blank-black-screen-white-table_1_cropped.webp',
    categories: ['Laptops', 'Gaming'],
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 50,
    image: './images/mouse.webp',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 100,
    image:
      './images/keyboard-isolated-white-background-3d-render-illustration (1).webp',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 4,
    name: 'External Hard Drive',
    price: 120,
    image: './images/external harddrive.webp',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 5,
    name: 'Graphics Card',
    price: 500,
    image: './images/graphics.webp',
    categories: ['Components', 'Gaming'],
  },
  {
    id: 6,
    name: 'Portable SSD',
    price: 200,
    image: './images/ssd.webp',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 7,
    name: 'Gaming Monitor',
    price: 300,
    image: './images/monitor (1).webp',
    categories: ['Monitors', 'Gaming'],
  },
  {
    id: 8,
    name: 'All-in-One Printer',
    price: 150,
    image: './images/printer.webp',
    categories: ['Peripherals', 'Printers'],
  },
];
const CART_KEY = 'e-commerce-cart';
const FILTERS_KEY = 'filter';

const productGrid = document.getElementById('product-grid');
const cartMessage = document.getElementById('cart-message');
const cartItemList = document.getElementById('cart-items');
const cartItemsPrice = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout-btn');
const categoryFilters = document.getElementById('category-filters');
const clearFiltersButton = document.getElementById('clear-filters-btn');

const saveCartItemsToLocalStorage = () => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};
const getCartItemsFromLocalStorage = () => {
  const cartData = localStorage.getItem(CART_KEY);
  if (!cartData) {
    return [];
  }
  return JSON.parse(cartData);
};
let cart = getCartItemsFromLocalStorage();

const saveFiltersToLocalStorage = (filteredProducts) => {
  localStorage.setItem(FILTERS_KEY, JSON.stringify([...filteredProducts]));
};

const getFiltersFromLocalStorage = () => {
  const filtersData = JSON.parse(localStorage.getItem(FILTERS_KEY));
  if (!filtersData) {
    return new Set();
  }
  return new Set(filtersData);
};
let filteredProducts = new Set(getFiltersFromLocalStorage());

function getProductGrid(productArray) {
  productArray.forEach((productCard) => {
    const cardDiv = getproductCard(productCard);
    productGrid.appendChild(cardDiv);
  });
}
function findItemIndex(cart, productCard) {
  return cart.findIndex((cartItem) => {
    if (cartItem.id === productCard.id) {
      return true;
    }
    return false;
  });
}
function addItemsToCart(productCard) {
  const cartItemIndex = findItemIndex(cart, productCard);

  if (cartItemIndex === -1) {
    cart.push({ ...productCard, quantity: 1 });
  } else {
    cart[cartItemIndex].quantity++;
  }
}
function getProductImage(productImage, productName) {
  const productImageComponent = document.createElement('img');
  productImageComponent.className = 'text-gray-700';
  productImageComponent.src = productImage;
  productImageComponent.alt = productName;
  productImageComponent.className = 'w-full';
  return productImageComponent;
}

function getProductTitle(productName) {
  const productTitleComponent = document.createElement('h3');
  productTitleComponent.className = 'text-lg font-semibold';
  productTitleComponent.innerText = productName;
  return productTitleComponent;
}

function getProductPrice(productPrice) {
  const productPriceComponent = document.createElement('p');
  productPriceComponent.className = 'text-gray-700';
  productPriceComponent.innerText = `$${productPrice}`;
  return productPriceComponent;
}
function getAddToProductButton(productCard) {
  const addToCartButton = document.createElement('button');
  addToCartButton.className =
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2';
  addToCartButton.innerText = 'Add to Cart';
  addToCartButton.addEventListener('click', () => {
    addItemsToCart(productCard);
    renderCart(cart);
  });
  return addToCartButton;
}

function getproductCard(productCard) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'bg-white rounded p-4 shadow flex flex-col items-center';
  const productImageComponent = getProductImage(productCard.image);
  const productTitleComponent = getProductTitle(productCard.name);
  const productPriceComponent = getProductPrice(productCard.price);
  const addToCartButton = getAddToProductButton(productCard);

  cardDiv.append(
    productImageComponent,
    productTitleComponent,
    productPriceComponent,
    addToCartButton
  );
  return cardDiv;
}
function addRemoveCartbutton(cart, cartItem) {
  const cartItemIndex = findItemIndex(cart, cartItem);
  if (cartItemIndex !== -1) {
    cart.splice(cartItemIndex, 1);
    saveCartItemsToLocalStorage();
    renderCart(cart);
  }
}
function getRemoveCartItem(cartItem) {
  const cartQuantityControlDiv = document.createElement('div');
  cartQuantityControlDiv.className = ' flex gap-4 justify-items-end';
  const quantityControls = document.createElement('div');
  quantityControls.className = ' flex items-center justify-center gap-2';

  const decreaseCartButton = document.createElement('button');
  decreaseCartButton.innerText = ' - ';
  decreaseCartButton.className =
    'text-xl w-[25px] h-[25px] bg-gray-500 text-white hover:bg-gray-800 rounded';
  decreaseCartButton.addEventListener('click', () => {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      renderCart(cart);
    }
  });

  const quantityCartButton = document.createElement('p');
  quantityCartButton.innerText = cartItem.quantity;
  quantityCartButton.className = 'border border-slate-300 rounded px-2';

  const increaseCartButton = document.createElement('button');
  increaseCartButton.innerText = ' + ';
  increaseCartButton.className =
    'w-[25px] h-[25px] bg-gray-500 text-white hover:bg-gray-800 rounded';
  increaseCartButton.addEventListener('click', () => {
    cartItem.quantity++;
    renderCart(cart);
  });

  quantityControls.append(
    decreaseCartButton,
    quantityCartButton,
    increaseCartButton
  );
  const removeCartButton = document.createElement('button');
  removeCartButton.innerText = 'Remove';
  removeCartButton.className = 'bg-red-500 text-white px-2 hover:bg-red-600';
  removeCartButton.addEventListener('click', () =>
    addRemoveCartbutton(cart, cartItem)
  );
  cartQuantityControlDiv.append(quantityControls, removeCartButton);

  return cartQuantityControlDiv;
}
function renderCart(cartArray) {
  cartItemList.innerText = '';

  if (cartArray.length === 0) {
    cartMessage.innerText = 'Your Cart is Empty';
    cartItemsPrice.innerText = '';
    return;
  } else {
    cartMessage.innerText = '';
    const clearCartButton = getClearCart(cartArray);
    cartItemList.appendChild(clearCartButton);

    cartArray.forEach((cartItem) => {
      const cartItems = document.createElement('li');
      cartItems.className =
        'p-4 flex flex-col items-center gap-2 rounded-md bg-slate-100 mb-4';

      const cartImage = document.createElement('img');
      cartImage.src = cartItem.image;
      cartImage.alt = cartItem.name;
      cartImage.className = 'w-16 h-16';

      const cartItemsDetails = document.createElement('p');
      cartItemsDetails.innerText = `${cartItem.name} - $${cartItem.price}`;
      cartItems.append(cartImage, cartItemsDetails);
      cartItemList.appendChild(cartItems);
      const cartQuantityControlDiv = getRemoveCartItem(cartItem);
      const totalprice = document.createElement('p');
      totalprice.innerText = `Total: $${cartItem.price * cartItem.quantity}`;
      cartItems.append(cartQuantityControlDiv, totalprice);
    });
  }
  const subTotalPrice = cartArray.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);

  cartItemsPrice.innerText = `Total Price: $${subTotalPrice}`;
  saveCartItemsToLocalStorage(cart);
}
function getClearCart() {
  const clearCartButton = document.createElement('button');
  clearCartButton.innerText = 'Clear Cart';
  clearCartButton.className =
    ' bg-red-500 text-white mb-2 self-center px-2 py-0.5';
  clearCartButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear the cart?')) {
      cart = [];
      localStorage.removeItem(CART_KEY);
      renderCart(cart);
    } else {
      renderCart(cart);
    }
  });
  return clearCartButton;
}
const getUniqueCategories = (products) => {
  const flattenedCategories = products
    .map((product) => product.categories)
    .flat();
  return [...new Set(flattenedCategories)];
};

const renderCategories = (products) => {
  clearFiltersButton.classList.remove('bg-red-400');
  categoryFilters.innerText = '';
  const categories = getUniqueCategories(products);
  categories.forEach((category) => {
    console.log('Creating button for:', category);
    const filterCategory = document.createElement('button');
    filterCategory.innerText = category;
    filterCategory.className =
      'bg-[#F8F9FA] hover:bg-gray-400 text-black font-semibold py-1 px-3 border border-slate-300 rounded m-1';
    if (filteredProducts.has(category)) {
      filterCategory.classList.add('bg-gray-800', 'text-slate-50');
      clearFiltersButton.classList.add('bg-red-400');
    }
    categoryFilters.appendChild(filterCategory);
    filterCategory.addEventListener('click', () => {
      getFilteredProducts(category, filteredProducts);
    });
  });
};
const getFilteredProducts = (category, filteredProducts) => {
  if (filteredProducts.has(category)) {
    filteredProducts.delete(category);
  } else {
    filteredProducts.add(category);
  }
  saveFiltersToLocalStorage(filteredProducts);
  applyFilters();
};

const applyFilters = () => {
  productGrid.innerHTML = '';

  const filteredArray = products.filter((product) =>
    product.categories.some((category) => filteredProducts.has(category))
  );

  if (filteredProducts.size > 0) {
    getProductGrid(filteredArray);
  } else {
    getProductGrid(products);
  }

  renderCategories(products);
};

clearFiltersButton.addEventListener('click', () => {
  filteredProducts.clear();
  saveFiltersToLocalStorage(filteredProducts);
  applyFilters();
});
checkoutButton.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your Cart is Empty!');
    return;
  }

  const userConfirmation = confirm('Are you sure you want to checkout?');
  if (userConfirmation) {
    cart = [];
    localStorage.removeItem(CART_KEY);
    renderCart(cart);
    setTimeout(() => {
      alert('Thanks for Shopping with Us!');
    }, 400);
  } else {
    alert('Checkout Cancelled');
  }
});

const initializeApp = () => {
  applyFilters();
  renderCart(cart);
};
initializeApp();
