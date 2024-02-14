import productsModel from "./products.model.js";

export const Query = {
  products: () => {
    return productsModel.getAllProducts();
  },
  productsByPrice: (_, args) => {
    // first arg is undefined, and args is an object,
    return productsModel.getProductsByPrice(args.min, args.max);
  },
  product: (_, args) => {
    return productsModel.getProductById(args.id);
  },
};

export const Mutation = {
  addNewProduct: (_, args) => {
    return productsModel.addNewProduct(args.id, args.description, args.price);
  },
  addNewProductReview: (_, args) => {
    return productsModel.addNewProductReview(
      args.id,
      args.rating,
      args.comment
    );
  },
};
