import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
  patchProductController,
} from '../controllers/products.js';

export const productsRouter = Router();

productsRouter.get('/products', ctrlWrapper(getProductsController));

productsRouter.get(
  '/products/:productId',
  ctrlWrapper(getProductByIdController),
);
productsRouter.post('/products', ctrlWrapper(createProductController));

productsRouter.patch(
  '/products/:productId',
  ctrlWrapper(patchProductController),
);

productsRouter.delete(
  '/products/:productId',
  ctrlWrapper(deleteProductController),
);
