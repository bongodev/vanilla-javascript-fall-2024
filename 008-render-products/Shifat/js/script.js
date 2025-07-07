const url =
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

const loadingTextContainer = document.getElementById("loading-text");
const productListContainer = document.getElementById("product-list");

const generateProducts = (products) => {
  productListContainer.innerHTML = "";

  const productListItems = products.map((product) => {
    const productListTag = document.createElement("li");
    productListTag.className =
      "bg-black/5 mb-4 px-4 py-2 rounded-md uppercase text-center";
    productListTag.innerText = product.name;
    return productListTag;
  });

  productListContainer.append(...productListItems);
};

const fetchProduct = async () => {
  const productResponse = await fetch(url);
  const products = await productResponse.json();

  return products;
};

const renderProducts = async () => {
  loadingTextContainer.innerHTML = "Loading...";

  try {
    const getProducts = await fetchProduct();
    generateProducts(getProducts);
  } catch (e) {
    alert("Failed to load products");
  } finally {
    loadingTextContainer.innerHTML = "";
  }
};

renderProducts();
