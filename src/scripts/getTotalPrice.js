import { readProducts } from '../utils/readProducts.js';

export const getTotalPrice = async () => {
  const products = await readProducts();

  return products.reduce(
    (acc, product) => (acc += parseFloat(product.price)),
    0,
  );
};

console.log(await getTotalPrice());
