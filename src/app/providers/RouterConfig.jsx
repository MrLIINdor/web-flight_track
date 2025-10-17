import React from 'react';
import AuthPage from '../../pages/common/auth/AuthPage';
import HomePage from '../../pages/platform/home/HomePage';
import Error403 from '../../pages/common/error/Error403';
import { createBrowserRouter, Navigate, useLocation } from 'react-router';
import { getAuthorizationData } from '../../shared/utils/authUtils';
import MainLayout from '../../widgets/MainLayout/MainLayout';

/**
 * MAIN
 */
export const PLATFORM = '/home';

/**
 * AUTHENTICATION
 */

export const LOGIN = '/login';

/**
 * ERROR
 */
export const ERROR_403 = '/err/403';

const Root = () => {
  const auth = !!getAuthorizationData();
  const location = useLocation();
  const isAuthPage = location.pathname === LOGIN;

  if (!auth && !isAuthPage) {
    return <Navigate to={LOGIN} />;
  }

  return <MainLayout isAuthPage={isAuthPage} />;
};

const routers = [
  { path: '*', element: <Error403 /> },
  { path: ERROR_403, element: <Error403 /> },
  { path: LOGIN, element: <AuthPage /> },
  { path: PLATFORM, element: <HomePage /> },
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: routers,
  },
]);
