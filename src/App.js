import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Search } from './pages';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <div className="content">
        <Navbar />
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
