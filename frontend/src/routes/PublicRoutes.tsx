import { Route, Routes } from 'react-router-dom';
import UserLayout from '../components/layout/UserLayout';
import Home from '../pages/Home';
import ProductDetailPage from '../pages/ProductDetailPage';
import ProductsPage from '../pages/ProductsPage';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/products/" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
};
export default PublicRoutes;
