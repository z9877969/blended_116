import path from 'node:path';
import { readProducts } from '../utils/readProducts.js';
import fs from 'node:fs/promises';
import { PATH_FILES_DIR } from '../constants/products.js';

const createProductsFiles = async () => {
  const products = await readProducts();

  for (const product of products) {
    const fileName = product.name.toLowerCase().split(' ').join('-') + '.json';

    await fs.writeFile(
      path.join(PATH_FILES_DIR, fileName),
      JSON.stringify(product),
      'utf-8',
    );
    console.log(product.name, 'file write ');
  }

  console.log('finish');
};
await createProductsFiles();
