import React from 'react';
import { ConfigProvider, theme } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';

export default function AntConfig({ children }) {
  return (
    <ConfigProvider
      locale={ruRU}
      theme={{
        components: {},
        token: {
          colorPrimary: '#a31d1d',
          colorPrimaryHover: '#d84040',
          fontFamily: 'Comfortaa',
          borderRadius: '8px',
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
