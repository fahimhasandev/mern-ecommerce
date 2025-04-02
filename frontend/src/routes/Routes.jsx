import { createBrowserRouter } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import Main from '../layout/main';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
    children: [
      {
        path: '/',
        Component: HomeScreen,
      },
      {
        path: '/product/:id',
        Component: ProductScreen,
      },
      {
        path: '/cart',
        Component: CartScreen,
      },
    ],
  },
]);
