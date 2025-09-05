import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const readProducts = async () => {
  const products = await fs.readFile(PATH_DB, 'utf-8');

  return JSON.parse(products);
};
