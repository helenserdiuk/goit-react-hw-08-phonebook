import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const PhoneBookPage = lazy(() => import('./pages/PhoneBookPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading page</p>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="goit-react-hw-08-phonebook" element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="contacts" element={<PhoneBookPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
