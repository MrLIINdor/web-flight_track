import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import './MainLayout.scss';

export default function MainLayout({ children, isAuth }) {
  return (
    <div className="box-wrapper">
      {isAuth ? null : <Header />}

      <div className="box-wrapper-content">{children}</div>

      <Footer />
    </div>
  );
}
