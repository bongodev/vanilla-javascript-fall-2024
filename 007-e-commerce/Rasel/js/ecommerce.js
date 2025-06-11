// Add products
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
      image: './assets/images/wireless-mouse.webp',
      categories: ['Accessories', 'Peripherals'],
    },
    // Add more products...
  ];
  
  // Local Storage Keys
  const CART_KEY = 'e-commerce-cart';
  const WISHLIST_KEY = 'e-commerce-wishlist';
  
  // Get Elements
  const productGrid = document.getElementById('product-grid');
  const cartList = document.getElementById('cart-items');
  const wishlistList = document.getElementById('wishlist-items');
  const searchBar = document.getElementById('search-bar');
  const cartEmptyComponent = document.getElementById('cartEmpty');
  const wishlistEmptyComponent = document.getElementById('wishlistEmpty');
  
  // Initialize cart and wishlist
  let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  let wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
  
  // Save to Local Storage
  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  // Render products
  const renderProducts = (productsToRender) => {
    productGrid.innerHTML = '';
    productsToRender.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.className =
        'bg-white rounded-lg shadow-md p-4 flex flex-col items-center space-y-4 hover:shadow-lg transition';
  
      // Product Image
      const productImg = document.createElement('img');
      productImg.src = product.image;
      productImg.alt = product.name;
      productImg.className = 'w-full h-40 object-cover rounded-md';
  
      // Product Name
      const productName = document.createElement('h3');
      productName.innerText = product.name;
      productName.className = 'text-lg font-semibold';
  
      // Product Price
      const productPrice = document.createElement('p');
      productPrice.innerText = `$${product.price}`;
      productPrice.className = 'text-gray-700';
  
      // Add to Cart Button
      const addToCartBtn = document.createElement('button');
      addToCartBtn.innerText = 'Add to Cart';
      addToCartBtn.className =
        'bg-purple-500 text-white hover:bg-purple-300 font-bold py-2 px-4 rounded';
      addToCartBtn.addEventListener('click', () => {
        cart.push({ ...product, quantity: 1 });
        saveToLocalStorage(CART_KEY, cart);
      });
  
      // Add to Wishlist Button
      const addToWishlistBtn = document.createElement('button');
      addToWishlistBtn.innerText = 'Add to Wishlist';
      addToWishlistBtn.className =
        'bg-blue-500 text-white hover:bg-blue-300 font-bold py-2 px-4 rounded';
      addToWishlistBtn.addEventListener('click', () => {
        if (!wishlist.find((item) => item.id === product.id)) {
          wishlist.push(product);
          saveToLocalStorage(WISHLIST_KEY, wishlist);
          renderWishlist();
        }
      });
  
      productCard.append(productImg, productName, productPrice, addToCartBtn, addToWishlistBtn);
      productGrid.appendChild(productCard);
    });
  };
  
  // Render Wishlist
  const renderWishlist = () => {
    wishlistList.innerHTML = '';
    wishlist.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.className = 'flex justify-between items-center';
  
      const productInfo = document.createElement('div');
      productInfo.innerText = item.name;
  
      const removeBtn = document.createElement('button');
      removeBtn.innerText = 'Remove';
      removeBtn.className = 'bg-red-500 text-white px-3 py-1 rounded';
      removeBtn.addEventListener('click', () => {
        wishlist = wishlist.filter((wishlistItem) => wishlistItem.id !== item.id);
        saveToLocalStorage(WISHLIST_KEY, wishlist);
        renderWishlist();
      });
  
      listItem.append(productInfo, removeBtn);
      wishlistList.appendChild(listItem);
    });
  
    wishlistEmptyComponent.style.display = wishlist.length ? 'none' : 'block';
  };
  
  // Search functionality
  searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
  });
  
  // Initial Render
  renderProducts(products);
  renderWishlist();
  