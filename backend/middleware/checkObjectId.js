// @ts-check
import { isValidObjectId } from 'mongoose';

/**
 * Checks if the req.params.id is a valid Mongoose ObjectId.
 *
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The Express next middleware function.
 */
function checkObjectId(req, res, next) {
  if (!isValidObjectId(req.params.id)) {
    return res.status(400).json({ message: `Invalid ObjectId of: ${req.params.id}` });
  }
  next();
}

export default checkObjectId;
