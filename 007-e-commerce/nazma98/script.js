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

const productGrid = document.getElementById('product-grid');


const renderProducts = (products) => {
    const productCards = products.map( product => {
        const productCard = getProductCard(product);
        return productCard;
    });
    
    productGrid.append(...productCards);
};

const getProductNameComponent = (productName) => {
    const productNameComponent = document.createElement('h1');
    productNameComponent.className = 'text-lg font-semibold';
    productNameComponent.innerText = productName;
    return productNameComponent;
}

const getProductPriceComponent = (productPrice) => {
    const productPriceComponent = document.createElement('p');
    productPriceComponent.className = 'text-gray-700';
    productPriceComponent.innerText = `$${productPrice}`;
    return productPriceComponent;
}

const getProductCard = (product) => {
    const productCard = document.createElement('div');
    productCard.className = 'bg-white p-4 rounded shadow';

    const productNameComponent = getProductNameComponent(product.name);
    const productPriceComponent = getProductPriceComponent(product.price);

    productCard.append(productNameComponent, productPriceComponent);
    return productCard;
}
renderProducts(products);