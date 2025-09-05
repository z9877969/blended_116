import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const modifyProducts = async () => {
  const products = await readProducts();

  const newProducts = products.map(({ description, ...rest }) => rest);

  await writeProducts(newProducts);
};

modifyProducts();
