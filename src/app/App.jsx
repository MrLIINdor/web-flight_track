import AntConfig from './providers/AntConfig';
import { RouterProvider } from 'react-router';
import { router } from './providers/RouterConfig';
import { store } from './stores';
import './styles/index.scss';
import { Provider } from 'react-redux';

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
