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
const totalPrice= document.getElementById("total-price");
const categoryFiltersContainer= document.getElementById("category-filters");
const filterKey= "e-commerce-filter"
const cartKey='e-commerce-cart';
////////////////////////////////////Cart functionality//////////////////////////////////
// const cartKey='e-commerce-cart';

// saving item from cartlist list into local storage
const saveCartListTolocalStorage=(cartList)=>{
localStorage.setItem(cartKey,JSON.stringify(cartList)); // saving object as string
};


// retriving  previous cart list from local storage
const getCartListFromlocalStorage=()=>{
const cartToRetriveFromLocalStorage =JSON.parse(localStorage.getItem(cartKey)); // retriving string as object
if(!cartToRetriveFromLocalStorage)
{
    return[]
}
console.log(cartToRetriveFromLocalStorage)
return cartToRetriveFromLocalStorage;
};





// making cartList list after clicking on the add to cart button
const cartList = getCartListFromlocalStorage();
// const cartList = []

const addProductToCart = (product) => {
  //checking if the item is already been added or not?
  const productIndexInCartList = cartList.findIndex((item) => item.id === product.id);
  if (productIndexInCartList === -1) {
    // item not selected yet
    console.log(productIndexInCartList);
    cartList.push({ ...product, quantity: 1 });

    return;
  }
  cartList[productIndexInCartList].quantity++;
};


// remove item function 

const removeFromCartf=((cartItemToRemove)=>{

const removeProductIndexInCart = cartList.findIndex((item) => cartItemToRemove.id === item.id);

  // more than 1 same item in the cart
  
   if (cartList[removeProductIndexInCart].quantity>1) {
   
    cartList[removeProductIndexInCart].quantity--;
    renderCart(cartList)
    return;
  }

  
  // 1 item in the cart

  if(confirm("Are you sure to remove the item")){

    cartList.splice(removeProductIndexInCart,1)
     renderCart(cartList)
  }



})

const removeFromCartButtonf=(cartItem)=>{
    const deleteBtn= document.createElement('button')
    deleteBtn.innerText='Remove'
    deleteBtn.className="bg-red-500 hover:bg-red-500 text-white py-1 px-1 rounded mt-2 ml-3"
    deleteBtn.addEventListener('click',()=>{
    const removeFromCart= removeFromCartf(cartItem)
    })
    return deleteBtn
}


   // retriving each cartItem's info from cartList list
   const getCartListItem= (cartItem)=>{
    const getCartListItemLi= document.createElement('li');
    getCartListItemLi.innerText=`Item:${cartItem.name} X ${cartItem.quantity}`;
    
    // delete item 
    const removeFromCartButton=removeFromCartButtonf(cartItem);
    getCartListItemLi.appendChild(removeFromCartButton);


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
    
    // price counting 

    const priceAmount= cartList.reduce((acc,currItem)=>{
        return acc+ currItem.price*currItem.quantity
    },0) 

    console.log(priceAmount)
    totalPrice.innerText=`Total: ${priceAmount}$`;
    
    saveCartListTolocalStorage(cartList);
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

////////////////////////categories and filter////////////////////////////////////////////////////////////

// const categoryFiltersContainer= document.createElement("category-filters");
// const filterKey= "e-commerce-filter"

// get category button function

const getCategoryBtn = (categoryy) => {
  const categoryNameBtn = document.createElement("button");
  categoryNameBtn.className ="hover:bg-gray-300 font-semibold py-2 px-4 rounded mr-2 bg-gray-200 text-gray-800";
  categoryNameBtn.innerText = categoryy;

  console.log("hiiii");
  return categoryNameBtn;
};

const renderCategories = (products) => {
  const categories = Array.from(
    new Set(products.map((product) => product.categories).flat())
  );
  console.log(categories);

  const categoryBtns = categories.map((category) => {
    const categoryBtn = getCategoryBtn(category);
    return categoryBtn;
  });

  categoryFiltersContainer.innerHTML = "";
  categoryFiltersContainer.append(...categoryBtns);
  return categoryFiltersContainer;
};




/////////////////////////////////////////////////////////////////////////////////////////////////
renderProducts(products);
renderCart(cartList);
renderCategories(products);