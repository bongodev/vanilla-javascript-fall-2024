const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: 1500,
    image: "./assets/laptop.webp",
    categories: ["Laptops", "Gaming"],
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 50,
    image: "./assets/wireless mouse.png",
    categories: ["Accessories", "Peripherals"],
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: 100,
    image: "./assets/mechanical keyboard.webp",
    categories: ["Accessories", "Peripherals"],
  },
  {
    id: 4,
    name: "External Hard Drive",
    price: 120,
    image: "./assets/hard drive.webp",
    categories: ["Storage", "Accessories"],
  },
  {
    id: 5,
    name: "Graphics Card",
    price: 500,
    image: "./assets/gpu.webp",
    categories: ["Components", "Gaming"],
  },
  {
    id: 6,
    name: "Portable SSD",
    price: 200,
    image: "./assets/ssd.webp",
    categories: ["Storage", "Accessories"],
  },
  {
    id: 7,
    name: "Gaming Monitor",
    price: 300,
    image: "./assets/monitor.webp",
    categories: ["Monitors", "Gaming"],
  },
  {
    id: 8,
    name: "All-in-One Printer",
    price: 150,
    image: "./assets/printer.webp",
    categories: ["Peripherals", "Printers"],
  },
  {
    id: 8,
    name: "Gaming Desktop RAM",
    price: 1500,
    image: "./assets/ram.webp",
    categories: ["Peripherals", "Gaming"],
  },
];
const productGrid = document.getElementById('product-grid');
const cartList = document.getElementById('cart-items');

// ------------------- cart ------------------------------------

const cart = [];
const addProductToCart = (product) => {
  const productIndexInCart = cart.findIndex((cartItem) => cartItem.id === product.id);
  // product is not added yet
  if(productIndexInCart === -1){
    cart.push({
      ...product,
      quantity: 1,
    });
    return;
  }
  cart[productIndexInCart].quantity++; 
};
const getCartListItem = (cartItem) => {
  const cartListItem = document.createElement('li');
  cartListItem.innerText = `${cartItem.name} x ${cartItem.quantity}`;
  return cartListItem;
};
const renderCart = (cart) => {
  const cartListItems = cart.map((cartItem) => {
    const cartListItem = getCartListItem(cartItem);
    return cartListItem;
  });
  cartList.innerHTML = '';
  cartList.append(...cartListItems);
};


// ------------------- cart ------------------------------------



// ------------------- functions ------------------------------------
const getProductImageComponent = (product) => {
  const productImageComponent = document.createElement('img');
  productImageComponent.className = 'w-full mb-4'
  productImageComponent.src = product.image;
  productImageComponent.alt = product.name;
  return productImageComponent;
}
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
// ------------------- functions ------------------------------------




const getAddToCardBtn = (product) => {
  const addToCard = document.createElement('button');
  addToCard.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2';
  addToCard.innerText = 'Add to cart';
  addToCard.addEventListener('click', () => {
    addProductToCart(product);
    renderCart(cart);
  })
  return addToCard;
}

const getProductCard = (product) => {
  const productCard = document.createElement('div');
  const productImageComponent = getProductImageComponent(product);
  const productNameComponent = getProductNameComponent(product.name);
  const productPriceComponent = getProductPriceComponent(product.price);
  const addToCartBtn = getAddToCardBtn(product);

  productCard.append(productImageComponent, 
    productNameComponent, 
    productPriceComponent, 
    addToCartBtn
  );
  productCard.className = 'border-2 border-gray-300 bg-white p-4 rounded-xl shadow-xl shadow-cyan-500/50';
  return productCard;
};

const renderProducts = (products) => {
  const productCards = products.map((product) => {
    const productCard = getProductCard(product);
    return productCard;
  });
  productGrid.innerHTML = '';
  productGrid.append(...productCards);
};

renderProducts(products);
