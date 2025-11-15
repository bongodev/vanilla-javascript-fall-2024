const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: 1500,
    image: "./assets/images/product-placeholder.webp",
    categories: ["Laptops", "Gaming"],
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 50,
    image: "./assets/images/product-placeholder.webp",
    categories: ["Accessories", "Peripherals"],
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: 100,
    image: "./assets/images/product-placeholder.webp",
    categories: ["Accessories", "Peripherals"],
  },
  {
    id: 4,
    name: "External Hard Drive",
    price: 120,
    image: "./assets/images/product-placeholder.webp",
    categories: ["Storage", "Accessories"],
  },
  {
    id: 5,
    name: "Graphics Card",
    price: 500,
    image: "./assets/images/product-placeholder.webp",
    categories: ["Components", "Gaming"],
  },
  {
    id: 6,
    name: "Portable SSD",
    price: 200,
    image: "./assets/images/product-placeholder.webp",
    categories: ["Storage", "Accessories"],
  },
  {
    id: 7,
    name: "Gaming Monitor",
    price: 300,
    image: "./assets/images/product-placeholder.webp",
    categories: ["Monitors", "Gaming"],
  },
  {
    id: 8,
    name: "All-in-One Printer",
    price: 150,
    image: "./assets/images/product-placeholder.webp",
    categories: ["Peripherals", "Printers"],
  },
  {
    id: 9,
    name: "Tablet",
    price: 150,
    image: "./assets/images/resizecom_tablets.webp",
    categories: ["Components", "Tablet PC"],
  },
];


const productGrid = document.getElementById("product-grid");
const cartList = document.getElementById('cart-items');

///////////////////////////
const cart = [];

const addProductToCart = (product) => {
    const productIndexInCart = cart.findIndex(
        (cartItem) => cartItem.id === product.id
    );
    //the product has not been added to the cart  yet
    if (productIndexInCart === -1){
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

    cartList.innerText = ""
    cartList.append(...cartListItems);
};
///////////////////////////

/////////////////////////// 
const getProductImageComponent = (product) => {
    const productImageComponent = document.createElement("img");
    productImageComponent.className = "w-full mb-4";
    productImageComponent.src = product.image;
    productImageComponent.alt = product.name;

    return productImageComponent;
};

const getProductNameComponent = (productName) => {
    const productNameComponent    = document.createElement('h3');
    productNameComponent.className = "text-lg font-smibold";
    productNameComponent.innerText = productName;
    return productNameComponent;
};

const getProductPriceComponent = (productPrice) => {
    const productPriceComponent = document.createElement('p');
    productPriceComponent.classList = "text-gray-700";
    productPriceComponent.innerText = `$${productPrice}`;
    return productPriceComponent;
};


const getAddToCartBtn = (product) => {
    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = "bg-blue-500 hover:bg-blue-700 text-white font-blod py-2 px-4 rounded mt-2";
    addToCartBtn.innerText = "Add to Cart";
    addToCartBtn.addEventListener("click", () =>{
        addProductToCart(product);
        renderCart(cart);
    });
    return addToCartBtn;
};

const getproductCard = (product) => {
    const productCard = document.createElement('div');
    productCard.className = "bg-white p-4 rounded shadow";
     
    const productImageComponent = getProductImageComponent(product);
    const productNameComponent  = getProductNameComponent(product.name);
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

////////////////////////////////////////

const renderProducts = (products) => {
    const productCards = products.map((product => {
        const productCard = getproductCard(product);
        return productCard;
    }));

    productGrid.innerHTML = "";
    productGrid.append(...productCards);

};

renderProducts(products); 