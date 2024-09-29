// src/constants.js

// Base URL for the production environment from environment variable
export const BASE_URL = process.env.BASE_URL; // Set this to the production URL in your .env file

// API endpoints
export const PRODUCTS_URL = `${BASE_URL}/api/products`;
export const USERS_URL = `${BASE_URL}/api/users`;
export const ORDERS_URL = `${BASE_URL}/api/orders`;
export const PAYPAL_URL = `${BASE_URL}/api/config/paypal`;
