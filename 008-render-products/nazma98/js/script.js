const url = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

const loadingComponent = document.getElementById('loading-text');
const productListComponent = document.getElementById('product-list');

const renderProductsList = (productsData) => {
    productListComponent.innerHTML = '';
    const productListItem = productsData.map(data => {
        const listItem = document.createElement('li'); 
        listItem.innerText = data.name;
        return listItem;
    });
    productListComponent.append(...productListItem);
};

const renderProducts = () => {
    loadingComponent.innerText = 'Loading...';
    const products = fetch(url)
        .then(res => res.json())
        .then(data => {
            renderProductsList(data);
        })
        .catch((err) => console.error(err))
        .finally(() => loadingComponent.innerText = '');
};

renderProducts();