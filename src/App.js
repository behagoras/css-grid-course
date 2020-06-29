import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Promotional from './pages/Promotional';
import FlexItems from './pages/FlexItems';
import SuperResponsive from './pages/SuperResponsive';
import GridList from './pages/GridList';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/list">Grid List</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <SuperResponsive />
          </Route>
          <Route path="/users">
            <FlexItems />
          </Route>
          <Route path="/list">
            <GridList />
          </Route>
          <Route path="/">
            <Promotional />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
