import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../stores/index';

export default function ReduxConfig({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
