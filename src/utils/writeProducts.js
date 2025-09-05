import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const writeProducts = async (products) => {
  await fs.writeFile(PATH_DB, JSON.stringify(products, null, 2), 'utf-8');
};
