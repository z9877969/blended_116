import { Router } from 'express';
import { isValidObjectId } from 'mongoose';
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
import { validateId } from '../middlewares/validateId.js';

export const productsRouter = Router();

productsRouter.get('/', ctrlWrapper(getProductsController));

productsRouter.get(
  '/:id',
  validateId,
  ctrlWrapper(getProductByIdController),
);
productsRouter.post(
  '/',
  validateBody(addingProductSchema),
  ctrlWrapper(createProductController),
);

productsRouter.patch(
  '/:productId',
  validateId,
  validateBody(updatingProductSchema),
  ctrlWrapper(patchProductController),
);

productsRouter.delete(
  '/:productId',
  validateId,
  ctrlWrapper(deleteProductController),
);
