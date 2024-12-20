const products = [
  {
    id: 1,
    name: 'Gaming Laptop',
    price: 1500,
    image: 'https://via.placeholder.com/150',
    categories: ['Laptops', 'Gaming'],
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 50,
    image: 'https://via.placeholder.com/150',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 100,
    image: 'https://via.placeholder.com/150',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 4,
    name: 'External Hard Drive',
    price: 120,
    image: 'https://via.placeholder.com/150',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 5,
    name: 'Graphics Card',
    price: 500,
    image: 'https://via.placeholder.com/150',
    categories: ['Components', 'Gaming'],
  },
  {
    id: 6,
    name: 'Portable SSD',
    price: 200,
    image: 'https://via.placeholder.com/150',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 7,
    name: 'Gaming Monitor',
    price: 300,
    image: 'https://via.placeholder.com/150',
    categories: ['Monitors', 'Gaming'],
  },
  {
    id: 8,
    name: 'All-in-One Printer',
    price: 150,
    image: 'https://via.placeholder.com/150',
    categories: ['Peripherals', 'Printers'],
  },
];
const CART_KEY = 'e-commerce-cart';

const cartList = document.getElementById('cart-items');
const productGrid = document.getElementById('product-grid');
const totalPriceComponent = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');

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
    cart.push({ ...product, quantity: 1 });
  } else {
    cart[productIndexInCart].quantity++;
  }
};

const removeCartItem = (cartItem) => {
  const productIndexInCart = getProductIndexInCart(cartItem.id);
  if (productIndexInCart === -1) {
    alert(`${cartItem.name} doesn't exist in cart!`);
    return;
  }

  if (cart[productIndexInCart].quantity > 1) {
    cart[productIndexInCart].quantity--;
    renderCart(cart);
    return;
  }

  if (confirm('Are you sure?')) {
    cart.splice(productIndexInCart, 1);
    renderCart(cart);
  }
};

const renderProducts = (products) => {
  const productCards = products.map((product) => {
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
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2';
  addToCartBtn.innerText = 'Add to Cart';
  addToCartBtn.addEventListener('click', () => {
    addProductToCart(product);
    renderCart(cart);
  });
  return addToCartBtn;
};

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
  removeFromCartBtn.className = 'text-red-500 ml-2';
  removeFromCartBtn.innerText = 'Remove';
  removeFromCartBtn.addEventListener('click', () => {
    removeCartItem(cartItem);
  });
  return removeFromCartBtn;
};

const getCartListItem = (cartItem) => {
  const cartListItem = document.createElement('li');
  cartListItem.innerText = `${cartItem.name} x ${cartItem.quantity}`;
  const removeFromCartBtn = getRemoveFromCartBtn(cartItem);
  cartListItem.appendChild(removeFromCartBtn);
  return cartListItem;
};

const renderCart = (cart) => {
  cartList.innerHTML = '';

  cart.forEach((cartItem) => {
    const cartListItem = getCartListItem(cartItem);
    cartList.appendChild(cartListItem);
  });

  const totalPrice = cart.reduce((acc, currItem) => {
    const subTotal = currItem.quantity * currItem.price;
    return acc + subTotal;
  }, 0);

  totalPriceComponent.innerText = `Total = $${totalPrice}`;
  saveCartItemsToLocalStorage(cart);
};

renderProducts(products);
renderCart(cart);

checkoutBtn.addEventListener('click', () => {
  cart = [];
  renderCart(cart);
});
