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
];
const productGrid= document.getElementById("product-grid");
const cartItems= document.getElementById("cart-items");

////////////////////////////////////Cart functionality//////////////////////////////////


// making cartList list after clicking on the add to cart button
cartList = [];
const addProductToCart = (product) => {
  //checking if the item is already been added or not?
  const cartListIndex = cartList.findIndex(
    (item) => item.id === product.id
  );
  if (cartListIndex === -1) {
    // item not selected yet
    console.log(cartListIndex);
    cartList.push({ ...product, quantity: 1 });

    return;
  }
  cartList[cartListIndex].quantity++;
};


   // retriving each cartItem's info from cartList list
   const getCartListItem= (cartItem)=>{
    const getCartListItemLi= document.createElement('li');
    getCartListItemLi.innerText=`Item:${cartItem.name}  || Quantity: ${cartItem.quantity}`;
    return getCartListItemLi;
   }


  // traversing cartList list
    const renderCart=(cartList)=>{
    const cartListItems = cartList.map((cartItem)=>{
    const cartListItem= getCartListItem(cartItem);
    return cartListItem;
    })
    cartItems.innerText=""
    cartItems.append(...cartListItems);

    }










////////////////////////////////////retriving product info (name , image, price , add button)//////////////////////////////////

const getProductImageComponent=(product)=>{
    const productImgComponent=document.createElement('img');
    productImgComponent.src=product.image;
    productImgComponent.className="w-full mb-7";
    productImgComponent.alt='Product image'
    return productImgComponent;
}


const getProductNameComponent=(productName)=>{
    const productNameComponent=document.createElement('h3');
    productNameComponent.innerText=productName;
    return productNameComponent;
}

const getProductPriceComponent=(productPrice)=>{
    const productPriceComponent=document.createElement('h4')
    productPriceComponent.innerText=`${productPrice} $`;
    return productPriceComponent;
}




const addToCartBtnComponent = (product)=>{

    const addToCartBtnComponent=document.createElement("button");
    addToCartBtnComponent.innerText='Add to cart';
    addToCartBtnComponent.className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4";

    addToCartBtnComponent.addEventListener('click',()=>{
        addProductToCart(product);
        renderCart(cartList);
    })

    return addToCartBtnComponent;
}



const getProductCard=(product)=>{
    const getProductCard= document.createElement("div");
    
    const productImage=getProductImageComponent(product);
    const productName=getProductNameComponent(product.name);
    const productPrice=getProductPriceComponent(product.price);
    const addToCartBtn= addToCartBtnComponent(product);
    
    getProductCard.append(productImage,productName, productPrice,addToCartBtn);
      getProductCard.className = "bg-gray-100 p-4 rounded shadow";
    return getProductCard;
}


// const productGrid= document.getElementById("product-grid");
const renderProducts= (products)=>{
   const productCards= products.map((product)=>{ //accesing each product in productlist object to create  productCards list
    const productCard=getProductCard(product) //retriving each product info
    return productCard;
   })

   productGrid.innerHTML="";
productGrid.append(...productCards); //products in the list will be displayed as grid

};







////////////////////////////////////////////// root function call///////////////////////////////////////////////////
renderProducts(products);