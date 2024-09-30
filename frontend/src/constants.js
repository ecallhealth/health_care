export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://health-care-backend-yxrm:5000'   // For local development
    : 'https://health-care-backend-yxrm.onrender.com';  // Render URL for production

// Adjust the API endpoints based on what actually exists on your back-end
// Uncomment or add back the routes if you implement them later

export const PRODUCTS_URL = `${BASE_URL}/routes/productRoutes`;  // Uncomment if you have this route
 export const USERS_URL = `${BASE_URL}/api/users`;  // Uncomment if you have this route
export const ORDERS_URL = `${BASE_URL}/routes/orderRoutes`;  // Uncomment if you have this route
 export const PAYPAL_URL = `${BASE_URL}/utils/paypal`;  // Uncomment if you have this route
