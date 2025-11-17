const loadingText = document.getElementById("loading-text");
//const productContainer = document.getElementById("product-list");
const productContainer = document.getElementById("productTableBody");

const url =
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

// const renderProductsList=(productList)=>{

//     productContainer.innerText="";
//    const productListitems= productList.map((productItem)=>{
//     const productName=document.createElement('li')
//      productName.innerText=productItem.name
//      return productName
//     })

//     productContainer.append(...productListitems)

// }




// Creating row for each product
const getProductRow = (productItem) => {
  // retriving each key for single product item
  const columnNames = Object.keys(productItem);

  // retriving each value for corresponding key for single product item
  const cells = columnNames.map((cellData) => {
    const cell = document.createElement("td");
    cell.classList.add("m-auto", "px-2", "py-3", "text-center");
    cell.innerText = productItem[cellData];
    return cell;
  });

  const productRowFull = document.createElement("tr");
  productRowFull.className = "hover:bg-red-50";
  productRowFull.append(...cells);
  return productRowFull;
};

// API -> info -> productList -> retriving each object
const renderProductsList = (productList) => {
  productList.forEach((productItem) => {
    const productRow = getProductRow(productItem);
    productContainer.appendChild(productRow);
  });
};

// API fetching info
const getProducts = async () => {
  const apiResponse = await fetch(url);
  const products = await apiResponse.json(); // APIs return JSON as a string and json() converts it into an js object we can work with.
  return products;
};

const renderProducts = async () => {
  loadingText.innerText = "loading.....";

  try {
    const productList = await getProducts();
    renderProductsList(productList);
  } catch {
    alert("cannot load data from API");
  } finally {
    loadingText.innerText = "";
  }
};

renderProducts();
