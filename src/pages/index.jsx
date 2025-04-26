import React from 'react';
import { routesArray } from './routesArray';
import { Route, Routes } from 'react-router';
import MainLayout from '../widgets/MainLayout/MainLayout';

export default function Routing() {
  return (
    <Routes>
      {routesArray.map((route) => {
        // Очень важен порядок в котором мы будем оборачивать компонент

        let element = route.element;

        element = <MainLayout isAuth={route?.isAuth}>{element}</MainLayout>;

        return <Route key={route.path} path={route.path} element={element} />;
      })}
    </Routes>
  );
}
