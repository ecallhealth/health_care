import jwt from 'jsonwebtoken';

/**
 * Generates a JWT token and sets it as an HTTP-only cookie
 * @param {Object} res - The response object to set the cookie on
 * @param {String} userId - The user ID to include in the token payload
 */
const generateToken = (res, userId) => {
  // Generate the JWT token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',  // Set expiration to 30 days
  });

  // Set the JWT token as an HTTP-only cookie
  res.cookie('jwt', token, {
    httpOnly: true,  // Prevents client-side JavaScript from accessing the cookie
    secure: process.env.NODE_ENV === 'production',  // Use secure cookies in production (only sent over HTTPS)
    sameSite: 'strict',  // Helps prevent CSRF attacks by restricting cross-site sending of cookies
    maxAge: 30 * 24 * 60 * 60 * 1000,  // Set cookie to expire in 30 days
  });
};

export default generateToken;
