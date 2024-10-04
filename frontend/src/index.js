import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import HomeScreen from './screens/HomeScreen';
import LabScreen from './screens/lab';
import PharmacyScreen from './screens/pharmacy';
import VitualScreen from './screens/virtual';  // <-- Importing Virtual Screen
import TeleScreen from './screens/tele-consult';  // <-- Importing TeleScreen
import ClinicScreen from './screens/clinic';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';  // <-- Importing RegisterScreen
import ShippingScreen from './screens/ShippingScreen';  // <-- Importing ShippingScreen
import PaymentScreen from './screens/PaymentScreen';  // <-- Importing PaymentScreen
import PlaceOrderScreen from './screens/PlaceOrderScreen';  // <-- Importing PlaceOrderScreen
import OrderScreen from './screens/OrderScreen';  // <-- Importing OrderScreen
import ProfileScreen from './screens/ProfileScreen';  // <-- Importing ProfileScreen
import OrderListScreen from './screens/admin/OrderListScreen';  // <-- Importing OrderListScreen
import ProductListScreen from './screens/admin/ProductListScreen';  // <-- Importing ProductListScreen
import ProductEditScreen from './screens/admin/ProductEditScreen';  // <-- Importing ProductEditScreen
import UserListScreen from './screens/admin/UserListScreen';  // <-- Importing UserListScreen
import UserEditScreen from './screens/admin/UserEditScreen';  // <-- Importing UserEditScreen
import store from './store';
import { Provider } from 'react-redux';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/search/:keyword' element={<HomeScreen />} />
      <Route path='/page/:pageNumber' element={<HomeScreen />} />
      <Route
        path='/search/:keyword/page/:pageNumber'
        element={<HomeScreen />}
      />
      <Route path='/product/:id' element={<ProductScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/laboratory' element={<LabScreen />} />
      <Route path='/pharmacy' element={<PharmacyScreen />} />
      <Route path='/clinic' element={<ClinicScreen />} />
      <Route path='/vitual' element={<VitualScreen />} />  {/* Fixed import */}
      <Route path='/tele-consultation' element={<TeleScreen />} />  {/* Fixed import */}
      <Route path='/register' element={<RegisterScreen />} />  {/* Fixed import */}
      {/* Registered users */}
      <Route path=''>
        <Route path='/shipping' element={<ShippingScreen />} />  {/* Fixed import */}
        <Route path='/payment' element={<PaymentScreen />} />  {/* Fixed import */}
        <Route path='/placeorder' element={<PlaceOrderScreen />} />  {/* Fixed import */}
        <Route path='/order/:id' element={<OrderScreen />} />  {/* Fixed import */}
        <Route path='/profile' element={<ProfileScreen />} />  {/* Fixed import */}
      </Route>
      {/* Admin users */}
      <Route path=''>
        <Route path='/admin/orderlist' element={<OrderListScreen />} />  {/* Fixed import */}
        <Route path='/admin/productlist' element={<ProductListScreen />} />  {/* Fixed import */}
        <Route
          path='/admin/productlist/:pageNumber'
          element={<ProductListScreen />} />  {/* Fixed import */}
        <Route path='/admin/userlist' element={<UserListScreen />} />  {/* Fixed import */}
        <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />  {/* Fixed import */}
        <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />  {/* Fixed import */}
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
