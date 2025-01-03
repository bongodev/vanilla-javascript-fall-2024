const url =
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

const loadingComponent = document.getElementById('loading-text');
const productListComponent = document.getElementById('product-list');

const renderProductsList = (products) => {
    productListComponent.innerHTML = '';
    const productListItems = products.map((product) => {
        const listItem = document.createElement('li');
        listItem.innerText = product.name;
        return listItem;
    });
    productListComponent.append(...productListItems);
};

const renderProducts = () => {
  loadingComponent.innerText = 'Loading...';
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        renderProductsList(data);
    })
    .catch((err) => console.error(err))
    .finally(() => (loadingComponent.innerText = ''));
};

renderProducts();
