import createHttpError from 'http-errors';
import { UserCollection } from '../db/modals/user.js';
import { registerUserService } from '../services/auth.js';

export const registerUserController = async (req, res) => {
  const user = await registerUserService(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};
