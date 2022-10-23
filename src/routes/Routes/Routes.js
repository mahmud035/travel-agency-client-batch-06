import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Category from '../../Pages/Category/Category';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Gallery from '../../Pages/Gallery/Gallery';
import Home from '../../Pages/Home/Home';
import Trip from '../../Pages/Trip/Trip';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/trip',
        element: <Trip />,
      },
      {
        path: '/category',
        element: <Category />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
    ],
  },
]);

export default router;
