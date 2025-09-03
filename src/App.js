// App.js
// This is the root React component for the Home Finder app.
// It sets up the RouterProvider to enable client-side routing using the router defined in router.js.
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';


function App() {
  return <RouterProvider router={router} />;
}

export default App;
