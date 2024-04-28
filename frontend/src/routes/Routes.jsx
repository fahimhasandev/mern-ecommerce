import { createBrowserRouter } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import Main from '../layout/main';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ShippingScreen from '../screens/ShippingScreen';
import PrivateRoutes from './PrivateRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
    children: [
      {
        path: '/',
        element: <HomeScreen></HomeScreen>,
      },
      {
        path: '/product/:id',
        element: <ProductScreen />,
      },
      {
        path: '/cart',
        element: <CartScreen />,
      },
      {
        path: '/login',
        element: <LoginScreen />,
      },
      {
        path: '/register',
        element: <RegisterScreen />,
      },
      {
        path: '/shipping',
        element: (
          <PrivateRoutes>
            <ShippingScreen></ShippingScreen>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
