import { readProducts } from '../utils/readProducts.js';

export const getProductsByMinPrice = async (minPrice) => {
  const products = await readProducts();
  const filteredProducts = products.filter(
    (product) => parseFloat(product.price) >= minPrice,
  );
  return filteredProducts;
};

console.log(await getProductsByMinPrice(400));
