import './App.css';
import './styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Registration from './pages/auth/Registration';
import SignIn from './pages/auth/SignIn';

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <Registration />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
