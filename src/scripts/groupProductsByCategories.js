import { readProducts } from '../utils/readProducts.js';

const groupProductsByCategories = async () => {
  const products = await readProducts();
  return products.reduce((acc, { category, name }) => {
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(name);

    return acc;
  }, {});
};
console.log(await groupProductsByCategories());
