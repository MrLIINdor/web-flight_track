import Routing from '../pages';
import Providers from './providers';
import './styles/index.scss';

function App() {
  return (
    <Providers>
      <Routing />
    </Providers>
  );
}

export default App;
