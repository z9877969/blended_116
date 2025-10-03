import createHttpError from 'http-errors';

export const validateBody = (schema) => {
  return (req, res, next) => {
    try {
      const { error } = schema.validate(req.body);
      if (error) {
        throw createHttpError(400, error.message);
      }
      next();
    } catch (error) {
      next(error); // {status: 400, message: 'some error message'}
    }
  };
};
