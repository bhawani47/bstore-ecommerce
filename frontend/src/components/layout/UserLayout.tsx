import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import type { ReactNode } from 'react'
import Footer from '../common/Footer';

const UserLayout = (): ReactNode => {
  return (
    <main className="min-h-screen w-full bg-bg text-text">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
export default UserLayout;
