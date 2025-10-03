import { Router } from 'express';
import { registerUserController } from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import { userRegistrationSchema } from '../validation/usersValidation.js';

export const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(userRegistrationSchema),
  registerUserController,
);
