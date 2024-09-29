export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'   // For local development
    : 'health-care-backend-yxrm:5000';  // Render URL for production

// API endpoints
export const PRODUCTS_URL = `${BASE_URL}/api/products`;
export const USERS_URL = `${BASE_URL}/api/users`;
export const ORDERS_URL = `${BASE_URL}/api/orders`;
export const PAYPAL_URL = `${BASE_URL}/api/config/paypal`;
