import bcrypt from 'bcrypt';
import createHttpError from 'http-errors';
import { UserCollection } from '../db/modals/user.js';

export const registerUserService = async (payload) => {
  const user = await UserCollection.findOne({ email: payload.email });

  if (user) throw createHttpError(409, 'Email in use');

  const encryptedPassword = await bcrypt.hash(payload.password, 10);

  const newUser = await UserCollection.create({
    ...payload,
    password: encryptedPassword,
  });

  return newUser;
};
