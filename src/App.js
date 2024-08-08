import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Splash from './components/splash/Splash';
import Login from './pages/login/Login';
import OtpVerification from './pages/otp-verification/OtpVerification';
import Search from './pages/search/Search';
import Settings from './pages/settings/Settings';
import Product from './pages/product/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/splash',
    element: <Splash />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/otp-verification',
    element: <OtpVerification />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/products',
    element: <Product />,
  },
  {
    path: '/product',
    element: <Product />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
