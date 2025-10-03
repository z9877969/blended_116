import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
  patchProductController,
} from '../controllers/products.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  addingProductSchema,
  updatingProductSchema,
} from '../validation/productsValidation.js';

export const productsRouter = Router();

productsRouter.get('/products', ctrlWrapper(getProductsController));

productsRouter.get(
  '/products/:productId',
  ctrlWrapper(getProductByIdController),
);
productsRouter.post(
  '/products',
  validateBody(addingProductSchema),
  ctrlWrapper(createProductController),
);

productsRouter.patch(
  '/products/:productId',
  validateBody(updatingProductSchema),
  ctrlWrapper(patchProductController),
);

productsRouter.delete(
  '/products/:productId',
  ctrlWrapper(deleteProductController),
);
