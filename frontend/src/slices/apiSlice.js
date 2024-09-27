import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants'; // Ensure this is correctly defined
import { logout } from './authSlice'; // Import the logout action

// Customize the base query to include token management and handle 401 responses
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL, // Make sure BASE_URL is valid
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token'); // Get the token from localStorage
    if (token) {
      headers.set('Authorization', `Bearer ${token}`); // Attach token to the headers
    }
    return headers;
  },
});

async function baseQueryWithAuth(args, api, extra) {
  const result = await baseQuery(args, api, extra);
  // Dispatch the logout action on 401.
  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
  }
  return result;
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithAuth, // Use the customized baseQuery
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({
    // Example endpoint
    getProducts: builder.query({
      query: () => '/api/products',
    }),
    // Define other endpoints as needed
  }),
});
