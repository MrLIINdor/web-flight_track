import React from 'react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';

export default function AntConfig({ children }) {
  return (
    <ConfigProvider
      locale={ruRU}
      theme={{
        token: {
          colorPrimary: '#a31d1d',
          colorPrimaryHover: '#d84040',
          fontFamily: 'Comfortaa',
          borderRadius: '8px',
        },
        components: {
          Button: {
            defaultHoverBg: '#eae7dc',
            defaultBg: '#eae7dc',
          },
          // Dropdown: {
          //   colorBgElevated: '#eae7dc',
          // },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
