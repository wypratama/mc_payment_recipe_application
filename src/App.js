import { Fragment } from 'react';
import { Home } from './pages';
import { Navbar } from './components';

function App() {
  return (
    <div className="content">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
