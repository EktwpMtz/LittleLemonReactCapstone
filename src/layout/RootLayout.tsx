import { Outlet } from 'react-router';
import { Footer } from './Footer';
import { Header } from './Header';
import './RootLayout.css';

export const RootLayout = () => {
  return (
    <div className="content">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
