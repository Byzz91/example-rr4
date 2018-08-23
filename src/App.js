import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import Login from './routes/Login';
import MyPage from './routes/MyPage';
import Search from './routes/Search';
import NotFound from './routes/NotFound';

import Header from './components/Header';

export default class componentName extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/:username" component={About} />
            <Route path="/posts" component={Posts} />
            <Route path="/login" component={Login} />
            <Route path="/me" component={MyPage} />
            <Route path="/search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}
