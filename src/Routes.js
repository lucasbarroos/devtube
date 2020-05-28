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

const store = createStore(reducer);

export default function router() {
  return (
    <Router>
      <Provider store={store}>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/video/:id">
            <Video />
          </Route>
          <Route exact path="/channel/:id">
            <Channel />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}
