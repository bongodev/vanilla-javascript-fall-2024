const products = [
    {
        id: 1,
        name: 'Gaming Laptop',
        price: 1500,
        image: './assets/images/laptop.webp',
        categories: ['Laptops', 'Gaming'],
    },
    {
        id: 2,
        name: 'Wireless Mouse',
        price: 50,
        image: './assets/images/wirelessmouse.webp',
        categories: ['Accessories', 'Peripherals'],
    },
    {
        id: 3,
        name: 'Mechanical Keyboard',
        price: 100,
        image: './assets/images/mechanical.webp',
        categories: ['Accessories', 'Peripherals'],
    },
    {
        id: 4,
        name: 'External Hard Drive',
        price: 120,
        image: './assets/images/harddrive.webp',
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
        image: './assets/images/ssd.webp',
        categories: ['Storage', 'Accessories'],
    },
    {
        id: 7,
        name: 'Gaming Monitor',
        price: 300,
        image: './assets/images/monitor.webp',
        categories: ['Monitors', 'Gaming'],
    },
    {
        id: 8,
        name: 'All-in-One Printer',
        price: 150,
        image: './assets/images/printer.webp',
        categories: ['Peripherals', 'Printers'],
    },
];

const CART_KEY = 'ecommerce_cart';

const productGrid = document.getElementById('product-grid');
const cartList = document.getElementById('cart-items');
const checkoutBtn = document.getElementById('checkout-btn');
const totalPriceComponent = document.getElementById('total-price');
const categoryBtnContainer = document.getElementById('category-filters');
const applyFilterBtn = document.getElementById('apply-filters-btn');
const clearFilterBtn = document.getElementById('clear-filters-btn');

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
    return cartItems ? cartItems : [];
};

let cart = getCartItemsFromLocalStorage();

const getProductIndexInCart = (productId) =>
    cart.findIndex((cartItem) => cartItem.id === productId);

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
  
const getProductCard = (product) => {
    const productCard = document.createElement('div');
    productCard.className = 'bg-green-100 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow m-4';


    const productName = getProductName(product.name);
    const productPrice = getProductPrice(product.price);
    const productImage = getProductImage(product);
    const addToCartBtn = getAddToCartBtn(product);

    productCard.append(productName, productPrice, productImage, addToCartBtn);
    return productCard;
};

const getProductName = (productName) => {
    const productNameComponent = document.createElement('h3');
    productNameComponent.innerText = productName;
    productNameComponent.className = 'text-lg font-semibold';
    return productNameComponent;
};

const getProductPrice = (productPrice) => {
    const productPriceComponent = document.createElement('p');
    productPriceComponent.innerText = `$${productPrice}`;
    productPriceComponent.className = 'text-gray-700';
    return productPriceComponent;
};

const getProductImage = (product) => {
    const productImageComponent = document.createElement('img');
    productImageComponent.src = product.image;
    productImageComponent.alt = product.name;
    productImageComponent.className = 'w-full mb-4';
    return productImageComponent;
};

const getAddToCartBtn = (product) => {
    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2';
    addToCartBtn.innerText = 'Add to cart';
    addToCartBtn.addEventListener('click', () => {
        addProductToCart(product);
        renderCart(cart);
    });
    return addToCartBtn;
};

const addProductToCart = (product) => {
    const productIndex = getProductIndexInCart(product.id);
    if (productIndex === -1) {
        cart.push({ ...product, quantity: 1 });
    } else {
        cart[productIndex].quantity++;
    }
    saveCartItemsToLocalStorage(cart);
};

const removeCartItem = (cartItem) => {
    const productIndex = getProductIndexInCart(cartItem.id);
    if (productIndex !== -1 && confirm('Are you sure?')) {
        cart.splice(productIndex, 1);
        renderCart(cart);
    }
};

const increaseCartItem = (cartItem) => {
    const productIndex = getProductIndexInCart(cartItem.id);
    if (productIndex !== -1) {
        cart[productIndex].quantity++;
        renderCart(cart);
    }
};

const decreaseCartItem = (cartItem) => {
    const productIndex = getProductIndexInCart(cartItem.id);
    if (productIndex !== -1 && cart[productIndex].quantity > 1) {
        cart[productIndex].quantity--;
        renderCart(cart);
    } else {
        alert('Item quantity is one');
    }
};

const renderCart = (cart) => {
    cartList.innerHTML = '';
    const totalPrice = cart.reduce((acc, currItem) => {
        const cartListItem = getCartListItem(currItem);
        cartList.appendChild(cartListItem);
        return acc + currItem.price * currItem.quantity;
    }, 0);
    totalPriceComponent.innerText = `Total = $${totalPrice}`;
    saveCartItemsToLocalStorage(cart);
};

const getCartListItem = (cartItem) => {
    const cartListItem = document.createElement('li');
    cartListItem.innerText = `${cartItem.name} x ${cartItem.quantity}`;
    cartListItem.className = 'text-lg font-bold text-gray-800 flex items-center justify-between py-2 px-4 border-b border-gray-300';

    cartListItem.append(getPlusItemBtn(cartItem), getMinusItemBtn(cartItem), getRemoveFromCartBtn(cartItem));
    return cartListItem;
};

const getPlusItemBtn = (cartItem) => {
    const plusItembtn = document.createElement('button');
    plusItembtn.innerText = '+';
    plusItembtn.className = 'bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg shadow-sm transition-colors  m-2';
    plusItembtn.addEventListener('click', () => increaseCartItem(cartItem));
    return plusItembtn;
};

const getMinusItemBtn = (cartItem) => {
    const minusItembtn = document.createElement('button');
    minusItembtn.innerText = '-';
    minusItembtn.className = 'bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 rounded-lg shadow-sm transition-colors  m-2';
    minusItembtn.addEventListener('click', () => decreaseCartItem(cartItem));
    return minusItembtn;
};

const getRemoveFromCartBtn = (cartItem) => {
    const removeFromCartBtn = document.createElement('button');
    removeFromCartBtn.innerText = 'Remove';
    removeFromCartBtn.className = 'bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg shadow-sm transition-colors m-2';
    removeFromCartBtn.addEventListener('click', () => removeCartItem(cartItem));
    return removeFromCartBtn;
};


const getUniqueCategories = (products) => {
    const flattenCategories = products.flatMap((product) => product.categories);
    return [...new Set(flattenCategories)];
};

const renderCategories = (products) => {
    const categories = getUniqueCategories(products);
    const categoryBtns = categories.map((category) => {
      const categoryBtn = getCategoryBtn(category);
      return categoryBtn;
    });
    categoryBtnContainer.innerHTML = '';
    categoryBtnContainer.append(...categoryBtns);
  };
  

const getCategoryBtn = (category) => {
    const categoryBtn = document.createElement('button');
    categoryBtn.className =
      'hover:bg-gray-300  font-semibold py-2 px-4 rounded mr-2';
  
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
  

renderCategories(products);
renderProducts(products);
renderCart(cart);
checkoutBtn.addEventListener('click', () => {
    cart = [];
    renderCart(cart);
});

applyFilterBtn.addEventListener('click', () => {
    renderProducts(products);
  });
  
  clearFilterBtn.addEventListener('click', () => {
    filter.clear();
    renderCategories(products);
    renderProducts(products);
  });
  
  