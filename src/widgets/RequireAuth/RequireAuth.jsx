import React from 'react';
import { getAuthorizationData } from '../../shared/utils/authUtils';
import { Navigate } from 'react-router';
import { LOGIN } from '../../app/providers/RouterConfig';

export default function RequireAuth({ children }) {
  const auth = !!getAuthorizationData();

  return auth ? children : <Navigate to={LOGIN} />;
}
