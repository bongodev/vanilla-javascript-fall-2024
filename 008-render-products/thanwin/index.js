const url =
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

const productList = document.getElementById('product-list');
const loadingText = document.getElementById('loading-text');

let products = [];

fetchProducts();

async function fetchProducts() {
  try {
    loadingText.classList.toggle('hidden');
    const response = await fetch(url);
    products = await response.json();
    renderList(products);
    loadingText.classList.toggle('hidden');
  } catch (error) {
    throw new Error('something went wrong');
  }
}

function getListItem(value) {
  const li = document.createElement('li');
  li.classList.add(
    'text-xl',
    'text-gray-100',
    'mb-2',
    'p-2',
    'hover:bg-gray-500',
    'rounded-md'
  );
  li.textContent = value;
  return li;
}

function renderList() {
  products?.forEach((item) => {
    const listElement = getListItem(item.name);
    productList.appendChild(listElement);
  });
}
