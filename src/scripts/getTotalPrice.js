import { readProducts } from '../utils/readProducts.js';

const getTotalPrice = async () => {
  const products = await readProducts();
  return products.reduce((total, product) => {
    return total + Number(product.price);
  }, 0);
};
console.log(await getTotalPrice());
