import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { Outlet } from 'react-router';
import './MainLayout.scss';

export default function MainLayout({ isAuthPage }) {
  return (
    <div className="box-wrapper">
      {isAuthPage ? null : <Header />}

      <div className="box-wrapper-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
