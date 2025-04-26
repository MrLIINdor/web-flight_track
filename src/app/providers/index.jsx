import React from 'react';
import ReduxConfig from './ReduxConfig';
import AntConfig from './AntConfig';
import RouterConfig from './RouterConfig';

export default function Providers({ children }) {
  return (
    <ReduxConfig>
      <AntConfig>
        <RouterConfig>{children}</RouterConfig>
      </AntConfig>
    </ReduxConfig>
  );
}
