import AntConfig from './providers/AntConfig';
import { RouterProvider } from 'react-router';
import { router } from './providers/RouterConfig';
import { store } from './stores';
import { Provider } from 'react-redux';
import './styles/index.scss';

function App() {
  return (
    <Provider store={store}>
      <AntConfig>
        <RouterProvider router={router} />
      </AntConfig>
    </Provider>
  );
}

export default App;
