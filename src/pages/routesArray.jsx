import { Navigate } from 'react-router';
import { ERROR_403, LOGIN, PLATFORM } from '../app/providers/RouterConfig';
import { getAuthorizationData } from '../shared/utils/authUtils';
import AuthPage from './common/auth/AuthPage';
import HomePage from './platform/home/HomePage';
import Error403 from './common/error/Error403';

const Root = () => <Navigate to={getAuthorizationData() ? PLATFORM : LOGIN} />;

export const routesArray = [
  {
    path: '/',
    element: <Root />,
  },
  { path: '*', element: <Error403 /> },
  { path: ERROR_403, element: <Error403 /> },
  {
    path: LOGIN,
    element: <AuthPage />,
    isAuthPage: true,
  },
  {
    path: PLATFORM,
    element: <HomePage />,
  },
];
