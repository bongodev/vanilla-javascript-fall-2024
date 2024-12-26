const products = [
  {
    id: 1,
    name: 'Gaming Laptop',
    price: 1500,
    image: './assets/images/gaming-laptop.webp',
    categories: ['Laptops', 'Gaming'],
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 50,
    image: './assets/images/gaming-laptop.webp',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 100,
    image: './assets/images/gaming-laptop.webp',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 4,
    name: 'External Hard Drive',
    price: 120,
    image: './assets/images/gaming-laptop.webp',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 5,
    name: 'Graphics Card',
    price: 500,
    image: './assets/images/gaming-laptop.webp',
    categories: ['Components', 'Gaming'],
  },
  {
    id: 6,
    name: 'Portable SSD',
    price: 200,
    image: './assets/images/gaming-laptop.webp',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 7,
    name: 'Gaming Monitor',
    price: 300,
    image: './assets/images/gaming-laptop.webp',
    categories: ['Monitors', 'Gaming'],
  },
  {
    id: 8,
    name: 'All-in-One Printer',
    price: 150,
    image: './assets/images/gaming-laptop.webp',
    categories: ['Peripherals', 'Printers'],
  },
];

const CART_KEY = 'e-commerce-cart';
const productGrid = document.getElementById('product-grid');
const cartList = document.getElementById('cart-items');
const checkoutBtn = document.getElementById('checkout-btn');
const totalPriceComponent = document.getElementById('total-price');
const cartEmptyComponent = document.getElementById('cartEmpty');
const hrTag = document.getElementById('hrTag');
const categoryBtnContainer = document.getElementById('category-filters');

const addProductToCart = (product) => {
  const productIndexInCart = getProductIndexInCart(product.id);
  if (productIndexInCart === -1) {
    cart.push({ ...product, quantity: 1 });
  } else {
    cart[productIndexInCart].quantity++;
  }
  saveCartItemsToLocalStorage(cart);
};

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

const removeCartItem = (cartItem) => {
  const productIndexInCart = getProductIndexInCart(cartItem.id);

  if (productIndexInCart === -1) {
    alert(`${cartItem.name} does not exist in cart`);
    return;
  }

  if (confirm('Are you sure to remove it?')) {
    cart.splice(productIndexInCart, 1);
    renderCart(cart);
  }
};

const increaseQuantity = (cartItem) => {
  const productIndexInCart = getProductIndexInCart(cartItem.id);

  if (cart[productIndexInCart].quantity > 0) {
    cart[productIndexInCart].quantity++;
    renderCart(cart);
    return;
  }
};

const decreaseQuantity = (cartItem) => {
  const productIndexInCart = getProductIndexInCart(cartItem.id);
  if (cart[productIndexInCart].quantity > 1) {
    cart[productIndexInCart].quantity--;
    renderCart(cart);
    return;
  }
};

const getProductImageComponent = (product) => {
  const productImageComponent = document.createElement('img');
  productImageComponent.className = 'w-full h-40 object-cover rounded-md';
  productImageComponent.src = product.image;
  productImageComponent.alt = product.name;
  return productImageComponent;
};

const getProductNameComponent = (productName) => {
  const productNameComponent = document.createElement('h3');
  productNameComponent.className = 'text-lg font-semibold';
  productNameComponent.innerText = productName;
  return productNameComponent;
};

const getProductPriceComponent = (productPrice) => {
  const productPriceComponent = document.createElement('p');
  productPriceComponent.className = 'text-gray-700';
  productPriceComponent.innerText = `$${productPrice}`;
  return productPriceComponent;
};

const getAddToCartBtn = (product) => {
  const addToCartBtn = document.createElement('button');
  addToCartBtn.className =
    'bg-purple-200 text-blue-500 hover:bg-purple-400 hover:text-white font-bold py-2 px-4 rounded mt-2 w-1/2 self-center';
  addToCartBtn.innerText = 'Add to Cart';
  addToCartBtn.addEventListener('click', () => {
    addProductToCart(product);
    renderCart(cart);
  });

  return addToCartBtn;
};

const getProductCard = (product) => {
  const productCard = document.createElement('div');
  productCard.className =
    'space-y-2 bg-white max-w-[300px] rounded-md p-4 flex flex-col shadow-md';

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

const renderProducts = (products) => {
  const productCards = products.map((product) => {
    const productCard = getProductCard(product);
    return productCard;
  });
  productGrid.append(...productCards);
};

const getRemoveFromCartBtn = (cartItem) => {
  const removeFromCartBtn = document.createElement('button');
  removeFromCartBtn.className =
    'bg-red-400 hover:bg-red-600 text-white ml-2 px-4 py-1 rounded-md';
  removeFromCartBtn.innerText = 'Remove';
  removeFromCartBtn.addEventListener('click', () => {
    removeCartItem(cartItem);
  });
  return removeFromCartBtn;
};

const getIncreaseQuantityBtn = (cartItem) => {
  const increaseQuantityBtn = document.createElement('button');
  increaseQuantityBtn.className =
    'border-solid border border-black text-black hover:bg-green-500 hover:text-white hover:border-white rounded-md mx-2 px-3 pb-1';
  increaseQuantityBtn.innerText = '+';
  increaseQuantityBtn.addEventListener('click', () => {
    increaseQuantity(cartItem);
  });
  return increaseQuantityBtn;
};

const getDecreaseQuantityBtn = (cartItem) => {
  const decreaseQuantityBtn = document.createElement('button');
  decreaseQuantityBtn.classList =
    'border-solid border border-black text-black hover:bg-red-500 hover:text-white hover:border-white rounded-md mx-2 px-4 pb-1';
  decreaseQuantityBtn.innerText = '-';
  decreaseQuantityBtn.addEventListener('click', () => {
    decreaseQuantity(cartItem);
  });
  return decreaseQuantityBtn;
};

const getCartListItem = (cartItem) => {
  const cartListItem = document.createElement('li');
  cartListItem.className = 'mb-2 flex justify-between items-center';

  const productInfo = document.createElement('div');
  productInfo.innerText = `${cartItem.name} X ${cartItem.quantity} = $${
    cartItem.price * cartItem.quantity
  }`;
  productInfo.className = 'flex-grow mr-2';

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'flex space-x-1';

  const increaseQuantityBtn = getIncreaseQuantityBtn(cartItem);
  const decreaseQuantityBtn = getDecreaseQuantityBtn(cartItem);
  const removeFromCartBtn = getRemoveFromCartBtn(cartItem);

  buttonContainer.append(
    increaseQuantityBtn,
    decreaseQuantityBtn,
    removeFromCartBtn
  );
  cartListItem.append(productInfo, buttonContainer);

  return cartListItem;
};

const renderCart = (cart) => {
  cartList.innerHTML = '';
  cart.forEach((cartItem) => {
    const cartListItem = getCartListItem(cartItem);
    cartList.appendChild(cartListItem);
  });

  const totalPrice = cart.reduce((acc, currItem) => {
    const subTotalPrice = currItem.quantity * currItem.price;
    return acc + subTotalPrice;
  }, 0);
  if (Object.keys(cart).length === 0) {
    cartEmptyComponent.innerText = 'Your shopping cart is empty!';
    totalPriceComponent.innerText = '';
    hrTag.classList.add('hidden');
  } else {
    cartEmptyComponent.innerText = '';
    hrTag.classList.remove('hidden');
    totalPriceComponent.innerText = `Total = $${totalPrice}`;
  }
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
    'bg-gray-200 text-gray-800 hover:bg-gray-300 font-semibold py-2 px-4 rounded mr-2';
  categoryBtn.innerText = category;
  return categoryBtn;
};

const renderCategories = (products) => {
  const categories = getUniqueCategories(products);
  const categoryBtns = categories.map((category) => {
    const categoryBtn = getCategoryBtn(category);
    return categoryBtn;
  });
  categoryBtnContainer.append(...categoryBtns);
};

renderProducts(products);
renderCart(cart);
renderCategories(products);

checkoutBtn.addEventListener('click', () => {
  cart = [];
  renderCart(cart);
});
