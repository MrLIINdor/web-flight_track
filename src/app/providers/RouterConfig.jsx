import React from 'react';
import AuthPage from '../../pages/common/auth/AuthPage';
import HomePage from '../../pages/platform/home/HomePage';
import Error403 from '../../pages/common/error/Error403';
import { createBrowserRouter, Navigate } from 'react-router';
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

const Root = () => <MainLayout />;

const routers = [
  { path: LOGIN, element: <AuthPage /> },
  { path: PLATFORM, element: <HomePage /> },
  { path: ERROR_403, element: <Error403 /> },
  { path: '*', element: <Error403 /> },
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: routers,
  },
]);
