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
    image: './assets/images/wireless-mouse2.jpg',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 100,
    image: './assets/images/mechanical-keyboard.jpg',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 4,
    name: 'External Hard Drive',
    price: 120,
    image: './assets/images/external-hard-disk.png',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 5,
    name: 'Graphics Card',
    price: 500,
    image: './assets/images/graphics-card.jpg',
    categories: ['Components', 'Gaming'],
  },
  {
    id: 6,
    name: 'Portable SSD',
    price: 200,
    image: './assets/images/portable-ssd.webp',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 7,
    name: 'Gaming Monitor',
    price: 300,
    image: './assets/images/gaming-monitor.webp',
    categories: ['Monitors', 'Gaming'],
  },
  {
    id: 8,
    name: 'All-in-One Printer',
    price: 150,
    image: './assets/images/all-in-one-printer.jpg',
    categories: ['Peripherals', 'Printers'],
  },
];

const CART_KEY = 'e-commerce-cart';

const getCartItemsFromLocalStorage = () => {
  const cartItems = JSON.parse(localStorage.getItem(CART_KEY));
  if(!cartItems) {
    return [];
  }
  return cartItems;
}

let cart = getCartItemsFromLocalStorage();

const productGrid = document.getElementById('product-grid');
const cartList = document.getElementById('cart-items');
const totalPriceComponent = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');
const categoryFilterElement = document.getElementById('category-filters');

let filters = new Set();

const saveCartItemsToLocalStorage = () => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

const renderProducts = (products) => {
  const productCards = products.map(product => {
    const productCard = getProductCard(product);
    return productCard;
  });

  productGrid.append(...productCards);
};

const getProductImageComponent = (product) => {
  const productImageComponent = document.createElement('img');
  productImageComponent.className = 'w-full mb-4';
  productImageComponent.src = product.image;
  productImageComponent.alt = product.name;
  return productImageComponent;
};

const getProductNameComponent = (productName) => {
  const productNameComponent = document.createElement('h1');
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

const getItemIndexInCart = (productId) =>
  cart.findIndex((cartItem) => {
    if (cartItem.id === productId) {
      return true;
    }
    return false;
  });


const removeProductFromCart = (cartItem) => {
  const productIndexInCart = getItemIndexInCart(cartItem.id);
  if(confirm('Are you sure?')) {
    cart.splice(productIndexInCart, 1);
  }
};

const getRemoveProductFromCart = (cartItem) => {
  const removeFromCartBtn = document.createElement('button');
  removeFromCartBtn.className = 'text-red-500 ml-2';
  removeFromCartBtn.innerText = 'Remove';
  removeFromCartBtn.addEventListener('click', () => {
    removeProductFromCart(cartItem);
    renderCart(cart);
  });
  return removeFromCartBtn;
}

const addProductTocart = (product) => {
  const productIndexInCart = getItemIndexInCart(product.id);
  if(productIndexInCart === -1) {
    cart.push({...product, quantity: 1});
  } else {
    cart[productIndexInCart].quantity++;
  }
};

const getAddToCartButton = (product) => {
  const addToCardBtn = document.createElement('button');
  addToCardBtn.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2';
  addToCardBtn.innerText = 'Add to Cart';
  addToCardBtn.addEventListener('click', () => {
    addProductTocart(product);
    renderCart(cart);
  });
  return addToCardBtn;
};

const getProductCard = (product) => {
  const productCard = document.createElement('div');
  productCard.className = 'bg-white p-4 rounded shadow';

  const productImageComponent = getProductImageComponent(product);
  const productNameComponent = getProductNameComponent(product.name);
  const productPriceComponent = getProductPriceComponent(product.price);
  const addToCardBtn = getAddToCartButton(product);

  productCard.append(
    productImageComponent,
    productNameComponent,
    productPriceComponent,
    addToCardBtn
  );
  return productCard;
};

const increaseItemInCart = (cartItem) => {
  const cartItemIndex = getItemIndexInCart(cartItem.id);
  cart[cartItemIndex].quantity++;
  renderCart(cart);
}

const getItemIncrementBtn = (cartItem) => {
  const itemIncrementBtn = document.createElement('button');
  itemIncrementBtn.className = 'p-2 font-semibold text-xl';
  itemIncrementBtn.innerText = '+';
  itemIncrementBtn.addEventListener('click', () => {
    increaseItemInCart(cartItem);
  });
  return itemIncrementBtn;
};

const decreaseItemInCart = (cartItem) => {
  const cartItemIndex = getItemIndexInCart(cartItem.id);
  if(cart[cartItemIndex].quantity > 0) {
    cart[cartItemIndex].quantity--;
  }
  renderCart(cart);
}

const getItemDecrementBtn = (cartItem) => {
  const itemDecrementBtn = document.createElement('button');
  itemDecrementBtn.className = 'p-2 font-semibold text-xl';
  itemDecrementBtn.innerText = '-';
  itemDecrementBtn.addEventListener('click', () => {
    decreaseItemInCart(cartItem);
  });
  return itemDecrementBtn;
};

const getCartListItem = (cartItem) => {
  const cartListItem = document.createElement('li');
  const itemIncrementBtn = getItemIncrementBtn(cartItem);
  const itemDecrementBtn = getItemDecrementBtn(cartItem);

  cartListItem.append(
    `${cartItem.name} `, 
    itemDecrementBtn,
    `${cartItem.quantity}`,  
    itemIncrementBtn, 
  );
  const removeFromCart = getRemoveProductFromCart(cartItem);
  cartListItem.appendChild(removeFromCart);
  return cartListItem;
};

const renderCart = (cart) => {
  cartList.innerHTML = '';
  cart.forEach((cartItem) => {
    const cartListItem = getCartListItem(cartItem);
    cartList.appendChild(cartListItem);
  });

  const totalPrice = cart.reduce((acc, currentItem) => {
    const subTotalPrice = currentItem.quantity * currentItem.price;
    return acc + subTotalPrice;
  }, 0);

  totalPriceComponent.innerText = `Total = $${totalPrice}`;
  saveCartItemsToLocalStorage(cart);
};

checkoutBtn.addEventListener('click', () => {
  cart = [];
  renderCart(cart);
});

const getUniqueCategories = (products) => {
  const flattenCategories = products.map((product) => product.categories).flat();
  return [...new Set(flattenCategories)];
};

const getCategoryBtn = (category) => {
  const categoryBtn = document.createElement('button');
  categoryBtn.className = 'bg-blue-500 p-2 text-white m-2 font-semibold rounded hover:bg-blue-700';
  
  if(filters.has(category)) {
    categoryBtn.classList.add('bg-blue-700');
  } else {
    categoryBtn.classList.add('bg-blue-500');
  }

  categoryBtn.innerText = category;
  categoryBtn.addEventListener('click', () => {
    if(filters.has(category)) {
      filters.delete(category);
    } else {
      filters.add(category);
    }

    renderCategories(products);
  });
  return categoryBtn;
};

const renderCategories = (products) => {
  const categories = getUniqueCategories(products);
  const categoriesBtn = categories.map((category) => {
    const categoryBtn = getCategoryBtn(category);
    return categoryBtn;
  });
  categoryFilterElement.innerHTML = '';
  categoryFilterElement.append(...categoriesBtn);
};

renderCategories(products);
renderProducts(products);
renderCart(cart);
