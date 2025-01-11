const url =
    'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

const productListComponent = document.getElementById('product-list');
const loadingComponent = document.getElementById('loading-text');
const renderProductList = (product) => {
    productListComponent.innerHTML = '';
    const productListItems = product.map((product) => {
        const listItem = document.createElement('li');
        listItem.innerText = product.name;
        return listItem;
    });
    productListComponent.append(...productListItems);

};
const getProducts=async()=>{
    const productResponse = await fetch(url);
    const products = await productResponse.json();
    return products;
};

const renderProducts = async () => {

    loadingComponent.innerText = 'Loading...';
    try {
        const products= await getProducts();
        renderProductList(products);
    } catch (error) {
        alert('Failed to load products');
    } finally {
        loadingComponent.innerText = '';
    }
};

renderProducts();
