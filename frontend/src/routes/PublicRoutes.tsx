import { Route, Routes } from 'react-router-dom';
import UserLayout from '../components/layout/UserLayout';
import Home from '../pages/Home';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route  element={<UserLayout />}>
       <Route index element={<Home />}></Route>
    
      </Route>
    </Routes>
  );
};
export default PublicRoutes;
