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

const productGrid = document.getElementById('product-grid');

function getProductGrid(productArray){
    productArray.forEach((productCard)=>{
        const cardDiv= getproductCard(productCard);
        productGrid.appendChild(cardDiv)
    })
}

function getProductImage(productImage, productName){
    const productImageComponent = document.createElement('img');
    productImageComponent.className = "text-gray-700";
    productImageComponent.src= productImage;
    productImageComponent.alt= productName;
    productImageComponent.className= "w-full"
    return productImageComponent;
   }

function getProductTitle(productName){
    const productTitleComponent = document.createElement('h3');
    productTitleComponent.className = "text-lg font-semibold"
    productTitleComponent.innerText= productName;
    return productTitleComponent;
}

function getProductPrice(productPrice){
 const productPriceComponent = document.createElement('p');
 productPriceComponent.className = "text-gray-700";
 productPriceComponent.innerText= `$${productPrice}`;
 return productPriceComponent;
}
function getAddToProductButton(){
    const addToCartButton= document.createElement('button');
    addToCartButton.className =
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2';
  addToCartButton.innerText = 'Add to Cart';
    return addToCartButton;
}

function getproductCard(productCard){
    const cardDiv = document.createElement('div');
    cardDiv.className= "bg-white rounded p-4 shadow";
    const productImageComponent= getProductImage(productCard.image);
    const productTitleComponent= getProductTitle(productCard.name);
    const productPriceComponent= getProductPrice(productCard.price);
    const addToCartButton= getAddToProductButton();
    
    cardDiv.append(productImageComponent, productTitleComponent, productPriceComponent, addToCartButton);
    return cardDiv;
}

getProductGrid(products);
