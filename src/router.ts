import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import WIP from './pages/WIP';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
  },
  {
    path: '/wip',
    Component: WIP,
  },
]);

export default router;
