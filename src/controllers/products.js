import createHttpError from 'http-errors';
import {
  createProduct,
  deleteProduct,
  getProductsById,
  getProductsService,
  updateProduct,
} from '../services/products.js';

export const getProductsController = async (req, res, next) => {
  const products = await getProductsService(req.query);

  res.json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductByIdController = async (req, res, next) => {
  const { id } = req.params;
  const product = await getProductsById(id);
  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${id}!`,
    data: product,
  });
};
export const createProductController = async (req, res) => {
  const product = await createProduct(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

export const patchProductController = async (req, res, next) => {
  const { productId } = req.params;

  if (Object.keys(req.body).length === 0) {
    throw createHttpError(400, 'Body must have one or more fields');
  }

  const result = await updateProduct(productId, req.body);

  if (!result) {
    next(createHttpError(404, 'Product not found'));
    return;
  }

  res.json({
    status: 200,
    message: `Successfully patched a product!`,
    data: result.product,
  });
};
export const deleteProductController = async (req, res, next) => {
  const { productId } = req.params;
  const product = await deleteProduct(productId);
  if (!product) {
    next(createHttpError(404, 'Product not found'));
    return;
  }
  res.status(204).send();
};
