const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [],
  },
];

let productIdCounter = 100;

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductById(id) {
  return products.find((product) => {
    return product.id === id;
  });
}

// update addNewProduct to make ID field not required
// If ID not provided we use the productIdCounter
function addNewProduct(id = String(productIdCounter++), description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };

  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const matchedProduct = getProductById(id);

  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment,
    };

    matchedProduct.reviews.push(newProductReview);

    return newProductReview;
  }
}

export default {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
