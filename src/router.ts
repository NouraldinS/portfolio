import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
  },
]);

export default router;
