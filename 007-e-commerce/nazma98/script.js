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
    image: './assets/images/product-placeholder.webp',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 100,
    image: './assets/images/product-placeholder.webp',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 4,
    name: 'External Hard Drive',
    price: 120,
    image: './assets/images/product-placeholder.webp',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 5,
    name: 'Graphics Card',
    price: 500,
    image: './assets/images/product-placeholder.webp',
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

let cart = [];

const productGrid = document.getElementById('product-grid');
const cartList = document.getElementById('cart-items');

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
  productImageComponent.href = product.image;
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
  cart.splice(productIndexInCart, 1);
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
}

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

const getCartListItem = (cartItem) => {
  const cartListItem = document.createElement('li');
  cartListItem.innerText = `${cartItem.name} x ${cartItem.quantity}`;
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
};

renderProducts(products);
renderCart(cart);