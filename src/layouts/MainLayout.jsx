import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainLayout = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header />
    <Outlet />
  </div>
);

export default MainLayout;
