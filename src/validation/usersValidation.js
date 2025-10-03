import Joi from 'joi';

export const userRegistrationSchema = Joi.object({
  name: Joi.string().max(64).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(128).required(),
});
