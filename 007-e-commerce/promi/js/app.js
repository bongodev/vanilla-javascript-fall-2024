const products = [
  {
    id: 1,
    name: 'Gaming Laptop',
    price: 1500,
    image: './assets/images/product-placeholder.webp',
    categories: ['Laptops', 'Gaming'],
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 50,
    image: './assets/images/mouse.webp',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 100,
    image: './assets/images/keyboard.webp',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 4,
    name: 'External Hard Drive',
    price: 120,
    image: './assets/images/hardDrive.webp',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 5,
    name: 'Graphics Card',
    price: 500,
    image: './assets/images/graphics.webp',
    categories: ['Components', 'Gaming'],
  },
  {
    id: 6,
    name: 'Portable SSD',
    price: 200,
    image: './assets/images/product-placeholder.webp',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 7,
    name: 'Gaming Monitor',
    price: 300,
    image: './assets/images/product-placeholder.webp',
    categories: ['Monitors', 'Gaming'],
  },
  {
    id: 8,
    name: 'All-in-One Printer',
    price: 150,
    image: './assets/images/product-placeholder.webp',
    categories: ['Peripherals', 'Printers'],
  },
];

const CART_KEY = 'e-commerce-cart';
//empty cart list
// let cart = [];

const productGrid = document.getElementById('product-grid');
const cartList = document.getElementById('cart-items');
const checkoutBtn = document.getElementById('checkout-btn');
const totalPriceComponent = document.getElementById('total-price');
const categoryBtnContainer = document.getElementById('category-filters');
const clearFilterBtn = document.getElementById('clear-filters-btn');
const applyFilterBtn = document.getElementById('apply-filters-btn');
class Filter {
  constructor() {
    this.filters = this.getFromLocalStorage() || new Set();
  }

  static KEY = 'e-commerce-filter';

  addFilter(category) {
    if (this.filters.has(category)) {
      this.filters.delete(category);
      return;
    }
    this.filters.add(category);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem(Filter.KEY, JSON.stringify([...this.filters]));
  }

  getFromLocalStorage() {
    return new Set(JSON.parse(localStorage.getItem(Filter.KEY)));
  }

  hasCategory(category) {
    return this.filters.has(category);
  }

  deleteCategory(category) {
    this.filters.delete(category);
    this.saveToLocalStorage();
  }

  isEmpty() {
    return this.filters.size === 0;
  }

  clear() {
    this.filters.clear();
    this.saveToLocalStorage();
  }
}
const filter = new Filter();

const saveCartItemsToLocalStorage = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};
const getCartItemsFromLocalStorage = () => {
  const cartItems = JSON.parse(localStorage.getItem(CART_KEY));
  if (!cartItems) {
    return [];
  }
  return cartItems;
};
let cart = getCartItemsFromLocalStorage();

const getProductIndexInCart = (productId) =>
  cart.findIndex((cartItem) => {
    if (cartItem.id === productId) {
      return true;
    }
    return false;
  });

const addProductToCart = (product) => {
  const productIndexInCart = getProductIndexInCart(product.id);

  if (productIndexInCart === -1) {
    //add extra attribute quanitity to count the product item added to the cart

    cart.push({ ...product, quantity: 1 });
  } else {
    cart[productIndexInCart].quantity++;
  }
};

// remove item
const removeCartItem = (cartItem) => {
  const productIndexInCart = getProductIndexInCart(cartItem.id);
  if (productIndexInCart === -1) {
    alert(`${cartItem.name} doesn't exist in cart`);
    return;
  }
  //if cart has product more than 1
  if (cart[productIndexInCart].quantity > 1) {
    cart[productIndexInCart].quantity--;
    renderCart(cart);
    return;
  }
  if (confirm(`Are you sure want to remove this item?`)) {
    cart.splice(productIndexInCart, 1);
    renderCart(cart);
  }
};

const renderProducts = (products) => {
  let filteredProducts = products;

  if (!filter.isEmpty()) {
    filteredProducts = products.filter((product) =>
      product.categories.some((category) => filter.hasCategory(category))
    );
  }

  const productCards = filteredProducts.map((product) => {
    const productCard = getProductCard(product);
    return productCard;
  });

  productGrid.innerHTML = '';
  productGrid.append(...productCards);
};

const getProductNameComponent = (productName) => {
  const productNameComponent = document.createElement('h3');
  productNameComponent.className = 'text-lg font-semibold';
  productNameComponent.innerText = productName;
  return productNameComponent;
};
const getProductPriceComponent = (productPrice) => {
  const productPriceComponent = document.createElement('p');
  productPriceComponent.className = 'text-grey-700';
  productPriceComponent.innerText = `$${productPrice}`;
  return productPriceComponent;
};
const getProductImageComponent = (product) => {
  const prodcutImageComponent = document.createElement('img');
  prodcutImageComponent.className = 'w-full mb-4';
  prodcutImageComponent.src = product.image;
  prodcutImageComponent.alt = product.name;
  return prodcutImageComponent;
};
//add to cart button
const getAddToCartBtn = (product) => {
  const addToCartBtn = document.createElement('button');
  addToCartBtn.className =
    'bg-blue-500 hover:bg-blue-700 text-white font bold py-2 px-4 rounded mt-2';
  addToCartBtn.innerText = 'Add to Cart';
  //Button event
  addToCartBtn.addEventListener('click', () => {
    addProductToCart(product);
    // cart.push(product);
    renderCart(cart);
  });

  return addToCartBtn;
};
//Card function
const getProductCard = (product) => {
  const productCard = document.createElement('div');
  productCard.className = 'bg-white p-4 rounded shadow';
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

const getRemoveFromCartBtn = (cartItem) => {
  const removeFromCartBtn = document.createElement('button');
  removeFromCartBtn.className = 'text-red-600 ml-2';
  removeFromCartBtn.innerText = 'Remove';
  removeFromCartBtn.addEventListener('click', () => {
    removeCartItem(cartItem);
  });
  return removeFromCartBtn;
};

//increase funcitonality
const increaseItem = (cartItem) => {
  const productIndexInCart = getProductIndexInCart(cartItem.id);
  if (cart[productIndexInCart].quantity > 0) {
    cart[productIndexInCart].quantity++;
    renderCart(cart);
    return;
  }
};
// increase Button
const increaseButton = (cartItem) => {
  const increaseBtn = document.createElement('button');
  increaseBtn.className = ' bg-green-600 ml-2 rounded-md mx-2 px-3 pb-3';

  increaseBtn.innerText = '+';
  increaseBtn.addEventListener('click', () => {
    increaseItem(cartItem);
  });
  return increaseBtn;
};

//decrease

const decreaseItem = (cartItem) => {
  const productIndexInCart = getProductIndexInCart(cartItem.id);
  if (cart[productIndexInCart].quantity > 1) {
    cart[productIndexInCart].quantity--;
    renderCart(cart);
    return;
  } else {
    alert(
      `The quanity of this product is 1 . 
      Please click remove button to remove this product from cart`
    );
  }
};

const decreaseButton = (cartItem) => {
  const decreaseBtn = document.createElement('button');
  decreaseBtn.className = 'bg-red-400 ml-2 rounded-md mx-2 px-3 pb-3';
  decreaseBtn.innerText = '-';
  decreaseBtn.addEventListener('click', () => {
    decreaseItem(cartItem);
  });
  return decreaseBtn;
};
// getCartListItem functionality
const getCartListItem = (cartItem) => {
  const cartListItem = document.createElement('li');
  cartListItem.className = 'flex items-center gap-4';
  cartListItem.innerText = `${cartItem.name} x ${cartItem.quantity}`;

  const removeFromCartBtn = getRemoveFromCartBtn(cartItem);
  const increaseItemBtn = increaseButton(cartItem);
  const decreaseItemBtn = decreaseButton(cartItem);

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'flex items-center gap-2';
  buttonContainer.append(increaseItemBtn, decreaseItemBtn, removeFromCartBtn);

  cartListItem.appendChild(buttonContainer);

  return cartListItem;
};

//cart functionality
const renderCart = (cart) => {
  cartList.innerHTML = '';
  cart.forEach((cartItem) => {
    const cartListItem = getCartListItem(cartItem);
    cartList.appendChild(cartListItem);
  });
  //total price calculation
  const totalPrice = cart.reduce((acc, currentItem) => {
    const subTotalprice = currentItem.quantity * currentItem.price;
    return acc + subTotalprice;
  }, 0);
  totalPriceComponent.innerText = `Total =$${totalPrice}`;
  saveCartItemsToLocalStorage(cart);
};
const getUniqueCategories = (products) => {
  const flattenCategories = products
    .map((product) => product.categories)
    .flat();
  return [...new Set(flattenCategories)];
};

const getCategoryBtn = (category) => {
  const categoryBtn = document.createElement('button');
  categoryBtn.className =
    'hover:bg-gray-300  font-semibold py-4 px-4 rounded mr-2';

  if (filter.hasCategory(category)) {
    categoryBtn.classList.add('bg-blue-600', 'text-white');
  } else {
    categoryBtn.classList.add('bg-gray-200', 'text-gray-800');
  }

  categoryBtn.innerText = category;
  categoryBtn.addEventListener('click', () => {
    if (filter.hasCategory(category)) {
      filter.deleteCategory(category);
    } else {
      filter.addFilter(category);
    }

    renderCategories(products);
  });
  return categoryBtn;
};

//filtering with category

const renderCategories = (products) => {
  const categories = getUniqueCategories(products);
  const categoryBtns = categories.map((category) => {
    const categoryBtn = getCategoryBtn(category);
    return categoryBtn;
  });
  categoryBtnContainer.innerHTML = '';
  categoryBtnContainer.append(...categoryBtns);
};

renderCategories(products);
renderProducts(products);
renderCart(cart);

//checkout button
checkoutBtn.addEventListener('click', () => {
  cart = [];
  renderCart(cart);
});
//clear filter
clearFilterBtn.addEventListener('click', () => {
  filter.clear();
  renderCategories(products);
  renderProducts(products);
});
//Apply filter
applyFilterBtn.addEventListener('click', () => {
  renderProducts(products);
});
