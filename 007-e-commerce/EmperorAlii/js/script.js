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

// Array to hold cart items
const cart = [];

//function to render products on the page
function renderProducts() {
  const productGrid = document.getElementById('product-grid');

  productGrid.innerHTML = '';

  //Looping through the product list
  products.forEach((product) => {
    const card = makeCard(product);
    productGrid.appendChild(card);
  });
}

//function to create a product card
function makeCard(product) {
  //making necessary elements for the card
  const cardContainer = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardTitle = document.createElement('h3');
  const cardPrice = document.createElement('div');
  const addToCartBtn = document.createElement('button');

  //adding classes to the elements
  cardImage.src = product.image;
  cardTitle.innerText = product.name;
  cardPrice.innerText = `$${product.price}`;
  addToCartBtn.innerText = 'Add To Cart';

  //adding items to the cart
  addToCartBtn.addEventListener('click', () => {
    addProductToCart(product);
  });

  //appending elements to the card container
  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(cardTitle);
  cardContainer.appendChild(cardPrice);
  cardContainer.appendChild(addToCartBtn);

  //adding styles to the elements
  cardContainer.className =
    'bg-white shadow p-4 rounded flex flex-col items-center';
  cardImage.className = 'w-full mb-2';
  cardTitle.className = 'text-lg font-semibold mb-1';
  cardPrice.className = 'text-gray-700 mb-2';
  addToCartBtn.className =
    'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded';

  return cardContainer;
}

//function to render cart
function renderCart() {
  // Getting the cart item container and creating total price view element
  const cartItemContainer = document.getElementById('cart-items');
  const totalPriceView = document.createElement('li');
  // Variable to hold total price
  var totalPrice = 0;

  // Clearing the cart
  cartItemContainer.innerHTML = '';

  //rendering each of the cart item
  cart.forEach((product) => {
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <span class="font-medium mb-2 block">${product.name} x ${product.quantity}</span>
      <div class="flex space-x-2">
        <button class="plus bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded">+</button>
        <button class="minus bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-3 rounded">-</button>
        <button class="remove bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded">Remove</button>
      </div>
      `;

    // Getting buttons for adding removing quantity and removing the item from cart
    const plusBtn = cartItem.querySelector('.plus');
    const minusBtn = cartItem.querySelector('.minus');
    const removeBtn = cartItem.querySelector('.remove');

    // Event listener for plus button
    plusBtn.addEventListener('click', () => {
      product.quantity++;

      // Updating cart after quantity change
      saveCartToLocalStorage();
      renderCart();
    });

    // Event listener for minus button
    minusBtn.addEventListener('click', () => {
      if (product.quantity > 1) product.quantity--;
      else {
        alert(
          'Quantity cannot be less than 1. To remove the item, click on Remove button.'
        );
      }

      // Updating cart after quantity change
      saveCartToLocalStorage();
      renderCart();
    });

    // Event Listener for remove button
    removeBtn.addEventListener('click', () => {
      indexOfProduct = cart.indexOf(product);
      if (indexOfProduct > -1) cart.splice(indexOfProduct, 1);

      // Updating cart after removal
      saveCartToLocalStorage();
      renderCart();
    });

    // Appending cart item to the cart container and updating total price
    cartItemContainer.appendChild(cartItem);
    totalPrice += product.price * product.quantity;
  });

  totalPriceView.innerHTML = `<div class="bg-white p-3 rounded shadow mt-4 text-left">
    <span class="text-lg font-semibold">Total: </span>
    <span class="text-xl font-bold text-blue-600">$${totalPrice}</span>
  </div>`;

  cartItemContainer.appendChild(totalPriceView);
}

//function which will be called each time add to cart is clicked
function addProductToCart(product) {
  // checking if the product already in the cart
  const haveProductInTheCart = cart.find(
    (currentProduct) => product.name === currentProduct.name
  );

  // Logic to update cart
  if (haveProductInTheCart) {
    haveProductInTheCart.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  //render cart after update
  saveCartToLocalStorage();
  renderCart();
}

//functions to save cart item in local storage
function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

//function to load cart items from local storage
function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart.push(...JSON.parse(savedCart));
  }
}

//function call to render all products, cart initially on page load
loadCartFromLocalStorage();
renderProducts();
renderCart();
