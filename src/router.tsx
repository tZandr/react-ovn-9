import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import List from './pages/List';
import AddItem from './pages/AddItem';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'list',
        element: <List />,
      },
      {
        path: 'add-item',
        element: <AddItem />,
      },
    ],
  },
]);
