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

const getProducts = async () => {
  const productResponse = await fetch(url);
  const products = await productResponse.json();
  return products;
};

const renderProducts = async () => {
  loadingComponent.innerText = 'Loading...';

  // const products = fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     renderProductsList(data);
  //   })
  //   .catch((err) => console.error(err))
  //   .finally(() => (loadingComponent.innerText = ''));

  try {
    const products = await getProducts();
    renderProductsList(products);
  } catch (error) {
    alert('Failed to load products');
  } finally {
    loadingComponent.innerText = '';
  }
};

renderProducts();
