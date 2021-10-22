import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"

import Home from './routes/Home'
import Stopwatch from "./routes/Stopwatch"
import Timer from './routes/Timer'
import Clock from "./routes/Clock"

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/clock'>Clock</Link>
            </li>
            <li>
              <Link to='/stopwatch'>Stopwatch</Link>
            </li>
            <li>
              <Link to='/timer'>Timer</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/clock">
            <Clock />
          </Route>
          <Route exact path="/stopwatch">
            <Stopwatch />
          </Route>
          <Route exact path="/timer">
            <Timer />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
