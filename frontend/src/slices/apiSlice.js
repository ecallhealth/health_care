import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
import { logout } from './authSlice';

// Base query setup with credentials (for JWT cookies)
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',  // This ensures cookies are sent with every request
});

// Custom baseQueryWithAuth to handle token expiration
async function baseQueryWithAuth(args, api, extra) {
  const result = await baseQuery(args, api, extra);
  // Dispatch the logout action on 401 (Unauthorized)
  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
  }
  return result;
}

// Define the API slice
export const apiSlice = createApi({
  baseQuery: baseQueryWithAuth,  // Use base query with auth
  tagTypes: ['Product', 'Order', 'User'],  // Tags for caching and invalidation
  endpoints: (builder) => ({
    
    // GET request to fetch all products
    getProducts: builder.query({
      query: () => '/api/products',
      providesTags: ['Product'],  // Tag for cache invalidation
    }),

    // GET request to fetch all users (Admin use-case)
    getUsers: builder.query({
      query: () => '/api/users',
      providesTags: ['User'],
    }),

    // GET request to fetch a single user by ID
    getUserById: builder.query({
      query: (id) => `/api/users/${id}`,
      providesTags: ['User'],
    }),

    // GET request to fetch all orders (Admin use-case)
    getOrders: builder.query({
      query: () => '/api/orders',
      providesTags: ['Order'],
    }),

    // GET request to fetch a single order by ID
    getOrderById: builder.query({
      query: (id) => `/api/orders/${id}`,
      providesTags: ['Order'],
    }),

    // POST request to create a new order
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: '/api/orders',
        method: 'POST',
        body: orderData,
      }),
      invalidatesTags: ['Order'],  // Invalidate the orders cache
    }),

    // PUT request to update order status (payment)
    updateOrderToPaid: builder.mutation({
      query: (id) => ({
        url: `/api/orders/${id}/pay`,
        method: 'PUT',
      }),
      invalidatesTags: ['Order'],  // Invalidate the order cache
    }),

    // PUT request to update order status (delivered)
    updateOrderToDelivered: builder.mutation({
      query: (id) => ({
        url: `/api/orders/${id}/deliver`,
        method: 'PUT',
      }),
      invalidatesTags: ['Order'],  // Invalidate the order cache
    }),

    // GET request to fetch PayPal configuration
    getPaypalConfig: builder.query({
      query: () => '/api/config/paypal',
    }),
  }),
});

// Export hooks for each endpoint to use in components
export const {
  useGetProductsQuery,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useCreateOrderMutation,
  useUpdateOrderToPaidMutation,
  useUpdateOrderToDeliveredMutation,
  useGetPaypalConfigQuery,
} = apiSlice;
