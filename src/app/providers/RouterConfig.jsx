import React from 'react';
import { BrowserRouter } from 'react-router';

export default function RouterConfig({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

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
