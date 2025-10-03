import Joi from 'joi';

export const addingProductSchema = Joi.object({
  name: Joi.string().max(128).required(),
  price: Joi.number().min(0).max(1000000).required(),
  category: Joi.string().valid('books', 'electronics', 'clothing', 'other'),
  description: Joi.string().max(512),
});

export const updatingProductSchema = Joi.object({
  name: Joi.string().max(128),
  price: Joi.number().min(0).max(1000000),
  category: Joi.string().valid('books', 'electronics', 'clothing', 'other'),
  description: Joi.string().max(512),
});
