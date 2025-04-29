import React from 'react';
import { routesArray } from './routesArray';
import { Route, Routes } from 'react-router';
import MainLayout from '../widgets/MainLayout/MainLayout';
import RequireAuth from '../widgets/RequireAuth/RequireAuth';
import { getAuthorizationData } from '../shared/utils/authUtils';
import { LOGIN } from '../app/providers/RouterConfig';

export default function Routing() {
  const auth = !!getAuthorizationData();

  return (
    <Routes>
      {routesArray.map((route) => {
        // Очень важен порядок в котором мы будем оборачивать компонент

        let element = route.element;

        element = <MainLayout isAuthPage={route?.isAuthPage}>{element}</MainLayout>;

        if (route.path !== LOGIN) {
          element = <RequireAuth>{element}</RequireAuth>;
        }

        return <Route key={route.path} path={route.path} element={element} />;
      })}
    </Routes>
  );
}
