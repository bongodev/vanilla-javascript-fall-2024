const productsContainer = document.getElementById('products-container');
const clearBtn = document.getElementById('clear-btn');
const filterBtnContainer = document.getElementById('filter-buttons-container');
const cartList = document.getElementById('cart-list');
const totalPrice = document.getElementById('total-price');
const cartBody = document.getElementById('cart-body');
const cartContainer = document.getElementById('cart-container');
const cartInfo = document.getElementById('cart-info');
const checkoutButton = document.getElementById('checkout');

let products = [
  {
    id: 1,
    title: 'Essence Mascara Lash Princess',
    price: 9.99,
    url: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
    category: 'beauty',
  },
  {
    id: 2,
    title: 'Eyeshadow Palette with Mirror',
    price: 19.99,
    url: 'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png',
    category: 'beauty',
  },
  {
    id: 3,
    title: 'Powder Canister',
    price: 14.99,
    url: 'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png',
    category: 'beauty',
  },
  {
    id: 4,
    title: 'Red Lipstick',
    price: 12.99,
    url: 'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png',
    category: 'beauty',
  },
  {
    id: 5,
    title: 'Red Nail Polish',
    price: 8.99,
    url: 'https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png',
    category: 'beauty',
  },
  {
    id: 6,
    title: 'Calvin Klein CK One',
    price: 49.99,
    url: 'https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png',
    category: 'fragrances',
  },
  {
    id: 7,
    title: 'Chanel Coco Noir Eau De',
    price: 129.99,
    url: 'https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png',
    category: 'fragrances',
  },
  {
    id: 8,
    title: "Dior J'adore",
    price: 89.99,
    url: "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
    category: 'fragrances',
  },
  {
    id: 9,
    title: 'Dolce Shine Eau de',
    price: 69.99,
    url: 'https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png',
    category: 'fragrances',
  },
  {
    id: 10,
    title: 'Gucci Bloom Eau de',
    price: 79.99,
    url: 'https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png',
    category: 'fragrances',
  },
  {
    id: 11,
    title: 'Annibale Colombo Bed',
    price: 1899.99,
    url: 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png',
    category: 'furniture',
  },
  {
    id: 12,
    title: 'Annibale Colombo Sofa',
    price: 2499.99,
    url: 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png',
    category: 'furniture',
  },
  {
    id: 13,
    title: 'Bedside Table African Cherry',
    price: 299.99,
    url: 'https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png',
    category: 'furniture',
  },
  {
    id: 14,
    title: 'Knoll Saarinen Executive Conference Chair',
    price: 499.99,
    url: 'https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png',
    category: 'furniture',
  },
  {
    id: 15,
    title: 'Wooden Bathroom Sink With Mirror',
    price: 799.99,
    url: 'https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png',
    category: 'furniture',
  },
  {
    id: 16,
    title: 'Apple',
    price: 1.99,
    url: 'https://cdn.dummyjson.com/products/images/groceries/Apple/1.png',
    category: 'groceries',
  },
  {
    id: 17,
    title: 'Beef Steak',
    price: 12.99,
    url: 'https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png',
    category: 'groceries',
  },
  {
    id: 18,
    title: 'Cat Food',
    price: 8.99,
    url: 'https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png',
    category: 'groceries',
  },
  {
    id: 19,
    title: 'Chicken Meat',
    price: 9.99,
    url: 'https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png',
    category: 'groceries',
  },
  {
    id: 20,
    title: 'Cooking Oil',
    price: 4.99,
    url: 'https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png',
    category: 'groceries',
  },
  {
    id: 21,
    title: 'Cucumber',
    price: 1.49,
    url: 'https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png',
    category: 'groceries',
  },
  {
    id: 22,
    title: 'Dog Food',
    price: 10.99,
    url: 'https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png',
    category: 'groceries',
  },
  {
    id: 23,
    title: 'Eggs',
    price: 2.99,
    url: 'https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png',
    category: 'groceries',
  },
  {
    id: 24,
    title: 'Fish Steak',
    price: 14.99,
    url: 'https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png',
    category: 'groceries',
  },
  {
    id: 25,
    title: 'Green Bell Pepper',
    price: 1.29,
    url: 'https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png',
    category: 'groceries',
  },
  {
    id: 26,
    title: 'Green Chili Pepper',
    price: 0.99,
    url: 'https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png',
    category: 'groceries',
  },
  {
    id: 27,
    title: 'Honey Jar',
    price: 6.99,
    url: 'https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png',
    category: 'groceries',
  },
  {
    id: 28,
    title: 'Ice Cream',
    price: 5.49,
    url: 'https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png',
    category: 'groceries',
  },
  {
    id: 29,
    title: 'Juice',
    price: 3.99,
    url: 'https://cdn.dummyjson.com/products/images/groceries/Juice/1.png',
    category: 'groceries',
  },
  {
    id: 30,
    title: 'Kiwi',
    price: 2.49,
    url: 'https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png',
    category: 'groceries',
  },
];

let carts = [];

window.addEventListener('DOMContentLoaded', () => {
  console.log('loaded');
  const storedCartItems = localStorage.getItem('carts');
  if (storedCartItems) {
    carts = JSON.parse(storedCartItems);
    renderCartItems(carts);
  }
  handleEmptyCart();
});

renderFilterButtons();
handleFilterButtonsClick();
handleClearButtonClick();
renderProducts(products);
handleAddToCartClick();
handleEmptyCart();
addEventListenerToCartButtons();

function handleFilterButtonsClick() {
  filterBtnContainer.addEventListener('click', (e) => {
    if (
      e.target.tagName === 'BUTTON' &&
      e.target.classList.contains('filter-button')
    ) {
      const category = e.target.textContent;
      addSelectedColor(e.target);
      const filteredProducts = getFilteredProducts(products, category);
      renderProducts(filteredProducts);
    }
  });
}
function handleClearButtonClick() {
  clearBtn.addEventListener('click', () => {
    renderProducts(products);
    resetFilterButtonStyles();
  });
}

function addSelectedColor(button) {
  button.classList.add('bg-zinc-700', 'text-slate-300');
  const buttons = document.getElementsByClassName('filter-button');
  Array.from(buttons).forEach((element) => {
    if (element.textContent !== button.textContent) {
      element.classList.remove('bg-zinc-700', 'text-slate-300');
    }
  });
}
function resetFilterButtonStyles() {
  const buttons = document.getElementsByClassName('filter-button');
  Array.from(buttons).forEach((element) => {
    element.classList.remove('bg-zinc-700', 'text-slate-300');
  });
}

function getFilteredProducts(products, category) {
  return products.filter((product) => product.category === category);
}

function addEventListenerToCartButtons() {
  cartList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const id = Number(e.target.getAttribute('data-id'));
      if (e.target.classList.contains('increase-button')) {
        handleIncreaseButton(id);
      } else if (e.target.classList.contains('decrease-button')) {
        handleDecreaseButton(id);
      } else if (e.target.classList.contains('remove-button')) {
        removeItem(id);
      }
      renderCartItems(carts);
      totalPrice.textContent = getTotal();
      localStorage.setItem('carts', JSON.stringify(carts));
      handleEmptyCart();
    }
  });
}
// ***** render logic ******
function renderCartItems(cartItems) {
  cartList.innerHTML = '';
  if (cartItems.length === 0) {
    return;
  }
  cartItems.forEach((item) => {
    const cartItem = getCartItem(
      item.title,
      item.price,
      item.quantity,
      item.id
    );
    cartList.appendChild(cartItem);
    handleEmptyCart();
  });
  totalPrice.textContent = getTotal();
}
function renderFilterButtons() {
  const categoryList = Array.from(
    new Set(products.map((product) => product.category))
  );
  categoryList.forEach((item) => {
    const filterButton = getFilterButton(item);
    filterBtnContainer.appendChild(filterButton);
  });
}
function renderProducts(products) {
  productsContainer.innerHTML = '';
  products.forEach((product) => {
    const { title, price, url, id } = product;
    const productElement = GetProductElement(url, title, price, id);
    productsContainer.appendChild(productElement);
  });
}
// **** components ******
function GetProductElement(src, title, price, id) {
  const article = createElement('article', [
    'space-y-2',
    'bg-white',
    'max-w-[300px]',
    'rounded-md',
    'p-4',
    'flex',
    'flex-col',
    'shadow-md',
  ]);

  article.innerHTML = `<img
          src="${src}"
          alt="${title}"
          class="w-full h-40 object-cover rounded-md"
        />
        <div class="flex-1 product-body space-y-2 flex flex-col justify-between">
          <div>
            <h2 class="text-slate-800 font-bold">${title}</h2>
            <p class="text-slate-700">${price}</p>
          </div>
          <button
            data-category=${id}
            class=" mx-auto add-to-cart-btn px-4 py-2 rounded-md border bg-slate-100 text-slate-800 hover:bg-slate-300 hover:text-slate-800"
          >
            Add to Cart
          </button>
        </div>`;
  return article;
}
function getFilterButton(text) {
  const button = document.createElement('button');
  button.classList.add(
    'filter-button',
    'text-nowrap',
    'bg-zinc-200',
    'text-sm',
    'border',
    'p-2',
    'px-4',
    'rounded-md',
    'hover:bg-zinc-700',
    'hover:text-slate-300'
  );
  button.textContent = text;
  return button;
}

function getCartItem(title, price, quantity, id) {
  const li = createElement('li', [
    'flex',
    'justify-space-between',
    'w-full',
    'mr-2',
    'flex',
    'gap-4',
    'mb-1',
    'items-start',
  ]);
  li.innerHTML = `
          <span class="flex-1">${title}</span>
          <span class="">x</span>
          <span class="flex-1">${quantity}</span>
          <span class="flex-1">= $${(quantity * price).toFixed(2)}</span>
          <button
            data-id=${id}
            class="increase-button my-auto font-bold bg-gray-500 hover:bg-gray-800 text-white px-4 rounded-md"
          >
            +
          </button>
          <button
          data-id=${id}
            class="decrease-button my-auto font-bold bg-gray-500 hover:bg-gray-800 text-white px-4 rounded-md"
          >
            -
          </button>
          <button
          data-id=${id}
            class="remove-button my-auto  bg-red-400 hover:bg-red-600 text-white px-4 rounded-md"
          >
            Remove
          </button>
  `;
  return li;
}
//****cart funcionality */
function handleAddToCartClick() {
  productsContainer.addEventListener('click', (e) => {
    const tagName = e.target.tagName;
    const text = e.target.innerText;
    if (tagName === 'BUTTON' && text === 'Add to Cart') {
      const selectedProductId = e.target.getAttribute('data-category');

      const selectedProduct = products.find(
        (product) => product.id === Number(selectedProductId)
      );
      // check if items already exists in the cart
      const itemExits = carts.find((item) => item.id === selectedProduct.id);
      if (itemExits) {
        carts = carts.map((item) =>
          item.id === selectedProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        renderCartItems(carts);
        localStorage.setItem('carts', JSON.stringify(carts));
        return;
      }
      handleEmptyCart();
      const cartItem = {
        price: selectedProduct.price,
        quantity: 1,
        title: selectedProduct.title,
        id: selectedProduct.id,
      };
      carts.push(cartItem);
      localStorage.setItem('carts', JSON.stringify(carts));
      renderCartItems(carts);
    }
  });
}
function handleEmptyCart() {
  if (carts.length === 0) {
    cartContainer.classList.add('hidden');
    cartInfo.classList.remove('hidden');
    checkoutButton.classList.add('bg-blue-300');
  } else {
    cartContainer.classList.remove('hidden');
    cartInfo.classList.add('hidden');
    checkoutButton.classList.remove('bg-blue-300');
  }
}
function handleIncreaseButton(id) {
  carts = carts.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
}
function handleDecreaseButton(id) {
  carts = carts.map((item) =>
    item.id === id && item.quantity != 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
}
function removeItem(id) {
  confirm('Are you sure you want to delete?');
  carts = carts.filter((item) => id !== item.id);
}

// utils
function createElement(type, classList, text) {
  const element = document.createElement(type);
  element.classList.add(...classList);
  if (!text) {
    element.textContent = text;
  }
  return element;
}

function getTotal() {
  return carts
    .reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
    .toFixed(2);
}
