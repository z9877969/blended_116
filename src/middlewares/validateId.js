import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const validateId = (req, res, next) => {
  try {
    // const {id, date, type} = req.params;

    /* 
     {
    productId: '6a5s6a54d654da', 
    userId: '654a6f54sf654'
    } -> 
     [
        [productId, '6a5s6a54d654da'],
        [userId, '654a6f54sf654']
     ]
    */

    const hasInvalidId = Object.entries(req.params) //  [['id' , '6a5s6a54d654da'], [date , '2025-12-12'],['type', 'closed'] ]
      .filter(([key]) => key.toLowerCase().endsWith('id')) // [['id' , '6a5s6a54d654da']]
      .some(([_, id]) => !isValidObjectId(id)); // [[productId -> '6a5s6a54d654da'], [userId -> '654a6f54sf654']]

    if (hasInvalidId) {
      throw createHttpError(400, 'Invalid ID');
    }

    next();
  } catch (error) {
    next(error);
  }
};
