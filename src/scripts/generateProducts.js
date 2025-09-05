import { readProducts } from '../utils/readProducts.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import { writeProducts } from '../utils/writeProducts.js';

export const generateProducts = async (productCount) => {
  const products = await readProducts();
  const newProducts = [];

  for (let i = 0; i < productCount; i++) {
    products.push(createFakeProduct());
  }

  await writeProducts(products);
};

generateProducts(5);
