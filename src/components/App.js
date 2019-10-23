import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TodoContainer from "../containers/TodoContainer";
import CounterGroup from "../components/Counter/CounterGroup";

function App() {
  return (

    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/todo">
            <TodoContainer />
          </Route>
          <Route path="/counter">
            <CounterGroup />
          </Route>
        </Switch>
      </div>
    </Router>

    // <div className="App">
    //   <div>
    //     <CounterGroup />
    //   </div>
    // </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
