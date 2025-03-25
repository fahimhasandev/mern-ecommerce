import { createBrowserRouter } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import Main from '../layout/main';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
    children: [
      {
        path: '/',
        Component: HomeScreen,
      },
    ],
  },
]);
