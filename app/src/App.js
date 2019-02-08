import React, { Component } from 'react';
import './App.css';
import Index from './components/container/index';
import {Router,Route,Switch} from 'react-router-dom';
import Mine from './components/page/mine';
import Cart from './components/page/cart';
import Assort from './components/page/assort';
import User from './components/page/user';
import createBrowserHistory from 'history/createBrowserHistory';
const history=createBrowserHistory();
class App extends Component {
  render() {
    return (
      <div className="App">
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/assort" component={Assort} />
              <Route exact path="/cart" component={Cart} />
              <Route path="/mine" component={Mine} />
              <Route path="/user" component={User} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
