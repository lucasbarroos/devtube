import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducers/index';
import Navigation from './components/Navigation/index';
import Home from './pages/Home/index';
import Video from './pages/Video/index';
import Channel from './pages/Channel/index';
import Login from './pages/Login/index';
import Register from './pages/Register/index';

const store = createStore(reducer);

export default function router() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <Navigation />
            <Home />
          </Route>
          <Route exact path="/video/:id">
            <Navigation />
            <Video />
          </Route>
          <Route exact path="/channel/:id">
            <Navigation />
            <Channel />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}
