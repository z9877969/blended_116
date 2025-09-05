import { readProducts } from '../utils/readProducts.js';

export const getUniqueCategories = async () => {
  const products = await readProducts();

  const uniqueDict = {};

  return products.reduce((acc, { category }) => {
    if (!uniqueDict[category]) {
      acc.push(category);
      uniqueDict[category] = true;
    }
    return acc;
  }, []);
};

console.log(await getUniqueCategories());
