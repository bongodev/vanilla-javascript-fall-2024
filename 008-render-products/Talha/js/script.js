const url =
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

const loadingComponent = document.getElementById('loading-text');
const productTableBody = document.getElementById('productTableBody');

const renderProductRow = (product, index) => {
  const columnNames = Object.keys(product);
  const serialColumn = document.createElement('td');
  serialColumn.innerText = index + 1;
  serialColumn.className = 'border px-4 py-2';

  const columns = columnNames.map((columnName) => {
    const column = document.createElement('td');
    if (columnName === 'price') {
      column.innerText = `$${product[columnName].toFixed(2)}`;
    } else if (columnName === 'image') {
      const img = document.createElement('img');
      img.src = `assets/images/${product[columnName]}`;
      img.alt = product.name;
      img.className = 'w-full h-28 object-cover rounded'; // Adjust size as needed
      column.appendChild(img);
    } else {
      column.innerText = product[columnName];
    }
    column.className = 'border px-4 py-2';
    return column;
  });

  const productRow = document.createElement('tr');
  productRow.className = 'hover:bg-gray-100';
  productRow.append(serialColumn, ...columns);

  return productRow;
};

const renderProductTable = (products) => {
  products.forEach((product, index) => {
    const productRow = renderProductRow(product, index);
    productTableBody.appendChild(productRow);
  });
};

const renderProducts = async () => {
  loadingComponent.innerText = 'Loading...';
  try {
    const productResponse = await fetch(url);
    const products = await productResponse.json();
    renderProductTable(products);
  } catch (error) {
    alert('Failed to load products');
  } finally {
    loadingComponent.innerText = '';
  }
};

renderProducts();
