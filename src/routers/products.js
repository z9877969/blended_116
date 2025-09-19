import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getProductsController } from '../controllers/products.js';

export const productsRouter = Router();

productsRouter.get('/products', ctrlWrapper(getProductsController));
