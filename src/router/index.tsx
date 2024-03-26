import App from '@/App';
import HomePage from '@/pages/HomePage';
import MyspacePage from '@/pages/MyspacePage';
import { createBrowserRouter } from 'react-router-dom';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'myspace',
        element: <MyspacePage />,
      },
    ],
  },
]);

export default Router;
