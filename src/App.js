import './App.css';
import './styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Registration from './pages/auth/Registration';
import SignIn from './pages/auth/SignIn';
import Home from './pages/Home';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signup',
    element: <Registration />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
