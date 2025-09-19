import { ProductsCollection } from '../db/modals/product.js';

export const getProductsService = async () => {
  const products = await ProductsCollection.find({}, '-createdAt -updatedAt');

  return products;
};
